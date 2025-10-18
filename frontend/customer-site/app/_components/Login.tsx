import Link from "next/link";

export default function Login() {
  return (
    <div className="bg-white shadow-lg rounded p-8 w-[600px]">
      <h1 className="text-2xl font-bold text-center mb-6">
        ایجاد و ورود به حساب کاربری
      </h1>
      <form className="flex flex-col gap-4">
        <input
          className="border p-2 rounded-md"
          type="text"
          placeholder="نام"
        />
        <input
          className="border p-2 rounded-md"
          type="text"
          placeholder="نام خانوادگی"
        />
        <input
          className="border p-2 rounded-md"
          type="text"
          placeholder="استان: مازندران"
          disabled
          value="مازندران"
        />
        <input
          className="border p-2 rounded-md"
          type="email"
          placeholder="ایمیل"
        />
        <input
          className="border p-2 rounded-md"
          type="password"
          placeholder="رمز عبور"
        />
        <button className="bg-coffee-400 text-white rounded-md py-2">
          ایجاد و ورود به حساب
        </button>
      </form>
      <Link href="/">
        <p className="text-center mt-5 underline">بازگشت به خانه</p>
      </Link>
    </div>
  );
}
