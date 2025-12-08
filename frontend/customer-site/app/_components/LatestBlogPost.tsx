import Image from "next/image";
import Link from "next/link";

export default function LatestBlogPost() {
  return (
    <main className="px-8 py-10 border">
      <section className="mt-10">
        <h1 className="text-center text-3xl">بلاگ های قابل مشاهده</h1>
        <div className="grid grid-cols md:grid-cols-3 gap-4 h-[1200px] md:h-[400px] mt-6 ">
          <div className="border rounded-2xl flex flex-col  shadow-md">
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src="/header.jpg"
                alt="blog"
                className="rounded-t-2xl object-cover hover:scale-110 transition-transform duration-500"
                fill
              />
            </div>
            <div className="flex flex-col flex-grow p-5">
              <h3 className="text-xl font-semibold text-[#4B3A29]">
                قهوه بهتر در خانه
              </h3>
              <Link
                href="/blog/1"
                className="text-[#6A5444] text-sm mt-2 line-clamp-3 leading-relaxed"
              >
                قهوه مثل هنر و علم است؛ با چند تغییر کوچک می‌توانی کیفیت فنجان
                روزانه‌ات را به شدت بهتر کنی. در این نوشته، ۷ نکتهٔ کاربردی و
                سریع را با هم مرور می‌کنیم.
              </Link>
            </div>
          </div>
          <div className="border rounded-2xl flex flex-col shadow-md">
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src="/header3.jpg"
                alt="blog"
                className="rounded-t-2xl object-cover hover:scale-110 transition-transform duration-500"
                fill
              />
            </div>
            <div className="flex flex-col flex-grow p-5">
              <h3 className="text-xl font-semibold text-[#4B3A29]">بلاگ تست</h3>
              <Link
                href="/blog/1"
                className="text-[#6A5444] text-sm mt-2 line-clamp-3 leading-relaxed"
              >
                قهوه مثل هنر و علم است؛ با چند تغییر کوچک می‌توانی کیفیت فنجان
                روزانه‌ات را به شدت بهتر کنی. در این نوشته، ۷ نکتهٔ کاربردی و
                سریع را با هم مرور می‌کنیم.
              </Link>
            </div>
          </div>
          <div className="border rounded-2xl flex flex-col shadow-md">
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src="/header2.jpg"
                alt="blog"
                className="rounded-t-2xl object-cover hover:scale-110 transition-transform duration-500"
                fill
              />
            </div>
            <div className="flex flex-col flex-grow p-5">
              <h3 className="text-xl font-semibold text-[#4B3A29]">بلاگ تست</h3>
              <Link
                href="/blog/1"
                className="text-[#6A5444] text-sm mt-2 line-clamp-3 leading-relaxed"
              >
                قهوه مثل هنر و علم است؛ با چند تغییر کوچک می‌توانی کیفیت فنجان
                روزانه‌ات را به شدت بهتر کنی. در این نوشته، ۷ نکتهٔ کاربردی و
                سریع را با هم مرور می‌کنیم.
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
