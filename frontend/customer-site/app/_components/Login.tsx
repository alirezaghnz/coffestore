"use client";
import z from "zod";
import LinkedForAuthentication from "./LinkedForAuthentication";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { authClient } from "../lib/auth-client";
import toast from "react-hot-toast";

const signUpSchema = z.object({
  name: z.string().min(1),
  email: z.email().min(1),
  password: z.string().min(6),
});

type SignInForm = z.infer<typeof signUpSchema>;
export default function Login() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<SignInForm>();
  async function handle(data: SignInForm) {
    await authClient.signIn.email(
      { ...data },
      {
        onError: (err) => {
          toast.error(err.error.message || "مشکل در ورود به حساب کاربری.");
        },
        onSuccess: () => {
          router.push("/");
        },
      }
    );
  }
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-[600px]">
      <h1 className="text-2xl font-bold text-center mt-5 mb-6">
        ورود به حساب کاربری
      </h1>
      <form onSubmit={handleSubmit(handle)} className="flex flex-col gap-4">
        <input
          className="border p-2 rounded-md"
          type="email"
          placeholder="ایمیل"
          {...register("email")}
        />
        <input
          className="border p-2 rounded-md"
          type="password"
          placeholder="رمز عبور"
          {...register("password")}
        />
        <button className="bg-coffee-400 text-white rounded-md py-2">
          ورود به حساب
        </button>
      </form>
      <LinkedForAuthentication />
    </div>
  );
}
