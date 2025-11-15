import Footer from "../_components/Footer";
import Header from "../_components/Header";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className=" pt-[150px]">{children}</main>
      <Footer />
    </>
  );
}
