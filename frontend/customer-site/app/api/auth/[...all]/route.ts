import auth from "@/app/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import arcjet, {
  BotOptions,
  detectBot,
  EmailOptions,
  protectSignup,
  shield,
  slidingWindow,
  SlidingWindowRateLimitOptions,
} from "@arcjet/next";
import { findIp } from "@arcjet/ip";

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  characteristics: ["userIdOrIp"],
  rules: [shield({ mode: "LIVE" })],
});

//no one bot allows, none of them
const botSettings = { mode: "LIVE", allow: [] } satisfies BotOptions;
//rate limit settings - for attack brute force
const restrictiveRateLimit = {
  mode: "LIVE",
  max: 10,
  interval: "10m",
} satisfies SlidingWindowRateLimitOptions<[]>;

const laxRateLimits = {
  mode: "LIVE",
  max: 60,
  interval: "1m",
} satisfies SlidingWindowRateLimitOptions<[]>;

// For email fake Block, like temp email
const emailSettings = {
  mode: "LIVE",
  block: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"],
} satisfies EmailOptions;

const authHandlers = toNextJsHandler(auth);
export const { GET } = authHandlers;
export async function POST(request: Request) {
  const cloneRequest = request.clone();
  const descision = await checkSecurity(request);

  if (descision.isDenied()) {
    if (descision.reason.isRateLimit()) {
      return new Response(null, { status: 429 });
    } else if (descision.reason.isEmail()) {
      let message: string;
      if (descision.reason.emailTypes.includes("INVALID")) {
        message = "ایمیل نامتعبر است. لطفا ایمیل معتبر وارد نمایید";
      } else if (descision.reason.emailTypes.includes("DISPOSABLE")) {
        message =
          "ایمیل استفاده شده مورد قبول نیست. لطفا ایمیل معتبر وارد نمایید";
      } else if (descision.reason.emailTypes.includes("NO_MX_RECORDS")) {
        message = "دامین ایمیل استفاده شده نامعتبر است.";
      } else {
        message = "ایمیل نامعتبر.";
      }
      return Response.json({ message }, { status: 400 });
    } else {
      return new Response(null, { status: 403 });
    }
  }

  return authHandlers.POST(cloneRequest);
}

// for check sec like sign up page
async function checkSecurity(request: Request) {
  const body = (await request.json()) as unknown;
  const session = await auth.api.getSession({ headers: request.headers });

  // for find user or ip user or localhost of that
  const userIdOrIp = (session?.user.id ?? findIp(request)) || "127.0.0.1";

  if (request.url.endsWith("/auth/sign-up")) {
    if (
      body &&
      typeof body === "object" &&
      "email" in body &&
      typeof body.email === "string"
    ) {
      return aj
        .withRule(
          protectSignup({
            email: emailSettings,
            bots: botSettings,
            rateLimit: restrictiveRateLimit,
          })
        )
        .protect(request, { email: body.email, userIdOrIp });
    } else {
      aj.withRule(detectBot(botSettings))
        .withRule(slidingWindow(restrictiveRateLimit))
        .protect(request, { userIdOrIp });
    }
  }

  return aj
    .withRule(detectBot(botSettings))
    .withRule(slidingWindow(laxRateLimits))
    .protect(request, { userIdOrIp });
}
