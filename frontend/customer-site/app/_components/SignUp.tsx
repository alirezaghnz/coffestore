"use client";

import { useForm } from "react-hook-form";
import { authClient } from "../lib/auth-client";
import LinkedForAuthentication from "./LinkedForAuthentication";
import z from "zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const signUpSchema = z.object({
  name: z.string().min(1),
  email: z.email().min(1),
  password: z.string().min(6),
});

type SignUpForm = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<SignUpForm>();
  async function handle(data: SignUpForm) {
    await authClient.signUp.email(
      {
        ...data,
        callbackURL: "/",
      },
      {
        onError: (error) => {
          toast.error(
            error.error.message || "ثبت نام موفقیت آمیز نبود. دوباره تلاش کنید."
          );
        },
        onSuccess: () => {
          router.push("/");
        },
      }
    );
    //  console.log(data);
  }
  return (
    <div className="bg-white shadow-lg rounded p-8 w-[600px] ">
      <h1 className="text-2xl font-bold text-center mb-6">
        ایجاد و ورود به حساب کاربری
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(handle)}>
        <input
          className="border p-2 rounded-md"
          {...register("name")}
          type="text"
          placeholder="نام و نام خانوادگی"
        />

        <input
          className="border p-2 rounded-md"
          type="email"
          {...register("email")}
          placeholder="ایمیل"
        />
        <input
          className="border p-2 rounded-md"
          type="password"
          {...register("password")}
          placeholder="رمز عبور"
        />

        <button
          type="submit"
          className="bg-coffee-400 text-white rounded-md py-2"
        >
          ایجاد حساب کاربری
        </button>
      </form>
      <LinkedForAuthentication />
    </div>
  );
}
