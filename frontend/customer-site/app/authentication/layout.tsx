import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-center bg-[url('/bodyAuth.jpg')]  bg-cover h-screen">
      {children}
      <Toaster />
    </div>
  );
}
