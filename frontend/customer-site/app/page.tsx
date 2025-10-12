export default function Home() {
  return (
    <main>
      <div className="h-[400px] bg-[url('/header.jpg')] bg-cover bg-center [clip-path:polygon(0_0,100%_0,100%_85%,50%_100%,0_85%)]">
        <h1 className="text-white text-1xl lg:text-4xl font-bold text-center pt-40">
          پخش و فروش بهترین کافی در ایران
        </h1>
      </div>
      {/*For categories*/}
      <section className="mt-10 max-w-7xl mx-auto  p-8">
        <h1 className="text-3xl text-center">پرطرفدارترین</h1>
        <p className="text-gray-600 mt-6 text-center">
          پرطرفدار ترین کافی های چند وقت اخیر ما را تجربه کنید
        </p>
        <div className="mt-8 grid grid-cols-3 gap-4 items-center">
          <div className="relative bg-[url('/header.jpg')]  rotate-2 bg-cover bg-center h-[300px] rounded-lg">
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center rounded-lg">
              <span className="text-4xl text-white text-center items-center">
                اسپرسو دمی
              </span>
              <p className=" text-gray-300 mt-10">مشاهده بیشتر</p>
            </div>
          </div>
          <div className=" relative bg-[url('/header.jpg')]  rotate-2 bg-cover bg-center h-[300px] rounded-lg">
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center rounded-lg">
              <span className="text-4xl text-white text-center items-center">
                اسپرسو دمی
              </span>
              <p className=" text-gray-300 mt-10">مشاهده بیشتر</p>
            </div>
          </div>
          <div className="relative bg-[url('/header.jpg')] rotate-2  bg-cover bg-center h-[300px] rounded-lg">
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center rounded-lg">
              <span className="text-4xl text-white text-center items-center">
                اسپرسو دمی
              </span>
              <p className=" text-gray-300 mt-10">مشاهده بیشتر</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
