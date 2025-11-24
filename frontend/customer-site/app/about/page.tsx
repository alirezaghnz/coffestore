export default function AboutUs() {
  return (
    <section className="w-full mx-auto max-w-6xl px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          درباره کافه ما
        </h2>
        <p className="text-gray-600 text-lg">
          جایی برای تجربه طعم واقعی قهوه، آرامش و لحظه‌های خوب.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src="/header.jpg"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
            alt="Coffee Shop"
          />
        </div>

        <div className="space-y-6 leading-relaxed">
          <h3 className="text-3xl font-semibold text-gray-800">داستان ما</h3>

          <p className="text-gray-700 text-lg">
            کافه ما با عشق به قهوه و اشتیاق به خلق یک تجربه متفاوت شکل گرفت. ما
            باور داریم هر فنجان قهوه یک گفت‌وگوی تازه، یک شروع جدید و یک حس خوب
            است.
          </p>

          <p className="text-gray-700 text-lg">
            دانه‌های قهوه ما به صورت تخصصی انتخاب، رُست و دم‌آوری می‌شوند تا
            بهترین کیفیت را به شما ارائه دهیم.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition">
              <h4 className="text-xl font-bold text-gray-800">کیفیت بالا</h4>
              <p className="text-gray-600 text-sm mt-1">
                استفاده از بهترین دانه‌های قهوه
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition">
              <h4 className="text-xl font-bold text-gray-800">
                دم‌آوری حرفه‌ای
              </h4>
              <p className="text-gray-600 text-sm mt-1">باریستای آموزش‌دیده</p>
            </div>

            <div className="p-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition">
              <h4 className="text-xl font-bold text-gray-800">فضای دلنشین</h4>
              <p className="text-gray-600 text-sm mt-1">
                آرام، شیک و مناسب کار یا گپ‌وگفت
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition">
              <h4 className="text-xl font-bold text-gray-800">طعم خاص</h4>
              <p className="text-gray-600 text-sm mt-1">
                رُست اختصاصی با فرمول ویژه
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 p-10 bg-gradient-to-r from-amber-200 to-orange-100 rounded-3xl shadow-md">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">ماموریت ما</h3>
        <p className="text-gray-800 text-lg">
          هدف ما ساختن تجربه‌ای از قهوه است که فقط نوشیدنی نباشد؛ بلکه بخشی از
          سبک زندگی شما شود. ما تلاش می‌کنیم بهترین طعم‌ها، بهترین فضا و بهترین
          حس را برای شما خلق کنیم.
        </p>
      </div>
    </section>
  );
}
