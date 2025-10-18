import Link from "next/link";
import { BsInstagram, BsTelegram, BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-coffee-900 mt-5 border-t h-[300px]">
      <div className="flex p-5 justify-center w-full">
        <span className="border-b-4 px-2.5 w-[1200px]"></span>
      </div>
      <ul className="flex justify-center gap-20 text-white ">
        <li className="flex flex-col gap-3 items-center ">
          <span className="text-xl font-semibold">سوشال مدیا</span>
          <a href="#">
            <BsInstagram className="w-6 h-6 " />
          </a>
          <a href="#">
            <BsTelegram className="w-6 h-6 " />
          </a>
          <a href="#">
            <BsTwitterX className="w-6 h-6 " />
          </a>
        </li>
        <li>
          <div className="flex flex-col justify-center gap-2 items-center">
            <span className="text-xl font-semibold"> ارتباط با ما</span>
            <Link
              href="/about"
              className="text-gray-400 justify-center items-center"
            >
              درباره ما
            </Link>
            <Link
              href="/contact"
              className=" text-gray-400 justify-center items-center"
            >
              تماس با ما
            </Link>
            <Link
              href="/contact"
              className=" text-gray-400 justify-center items-center"
            >
              پشتیبانی
            </Link>{" "}
            <Link
              href="#"
              className=" text-gray-400 justify-center items-center"
            >
              بررسی سفارش ها
            </Link>
          </div>
        </li>
        <li>
          <span className="text-xl font-semibold"> دسته بندی ها</span>
        </li>
        <li className="flex flex-col gap-3 items-center">
          <span className="text-xl font-semibold">محصولات</span>
          <Link className="text-gray-400" href="/menu">
            منو کافی
          </Link>
        </li>
      </ul>
    </footer>
  );
}
