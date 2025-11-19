import Link from "next/link";
import { BsInstagram, BsTelegram, BsTwitterX } from "react-icons/bs";


export default function Footer() {
  return (
    <footer className="bg-coffee-900 mt-5 border-t text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
      

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center sm:items-start gap-3">
            <h4 className="text-lg font-semibold">سوشال مدیا</h4>
            <div className="flex gap-3 mt-2">
              <a
                aria-label="instagram"
                href="#"
                className="p-2 rounded-md hover:bg-white/10"
              >
                <BsInstagram className="w-5 h-5" />
              </a>
              <a
                aria-label="telegram"
                href="#"
                className="p-2 rounded-md hover:bg-white/10"
              >
                <BsTelegram className="w-5 h-5" />
              </a>
              <a
                aria-label="twitter"
                href="#"
                className="p-2 rounded-md hover:bg-white/10"
              >
                <BsTwitterX className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-2">
            <h4 className="text-lg font-semibold">ارتباط با ما</h4>
            <Link href="/about" className="text-gray-300 hover:text-white">
              درباره ما
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">
              تماس با ما
            </Link>
            <Link href="/support" className="text-gray-300 hover:text-white">
              پشتیبانی
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              بررسی سفارش‌ها
            </Link>
          </div>

          {/* Categories */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <h4 className="text-lg font-semibold">دسته بندی ها</h4>
            <Link href="/menu" className="text-gray-300 hover:text-white">
              منو کافی
            </Link>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-2">
            <h4 className="text-lg font-semibold">محصولات</h4>
            <Link href="/menu" className="text-gray-300 hover:text-white">
              محصولات ویژه
            </Link>
            <Link href="/menu" className="text-gray-300 hover:text-white">
              پرفروش‌ها
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t pt-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} پمو کافی — تمام حقوق محفوظ است
            </p>
            <div className="flex gap-3 text-sm text-gray-300">
              <Link href="/privacy" className="hover:text-white">
                حریم خصوصی
              </Link>
              <Link href="/terms" className="hover:text-white">
                قوانین
              </Link>
            </div>
          
          </div>
        </div>
      </div>
    </footer>
  );
}
