import Link from "next/link";

export default function LinkedForAuthentication() {
  return (
    <div className="flex justify-between mt-4">
      <Link href="/authentication/signup">
        <p className="text-center  text-cyan-700">ثبت نام</p>
      </Link>
      <Link href="/">
        <p className="text-center text-cyan-700">بازگشت به خانه</p>
      </Link>
    </div>
  );
}
