import Header from "../_components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-[120px]">{children}</main>
    </>
  );
}
