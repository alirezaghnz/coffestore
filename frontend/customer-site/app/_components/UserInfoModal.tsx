import { FileText, LogOut, User } from "lucide-react";
import { authClient } from "../lib/auth-client";
import { useRouter } from "next/navigation";

export default function UserInfoModal({ setOpenModal }) {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  const modalItems = [
    {
      icon: User,
      label: `کاربر ${session?.user.name} `,
      href: "/profile/account",
    },
    {
      icon: FileText,
      label: "سفارشات",
      href: "/profile/orders",
    },
    {
      icon: LogOut,
      label: "خروج کاربری",
      action: "logout",
    },
  ];
  const handleLogout = async () => {
    try {
      await authClient.signOut();
    } catch (error) {
      console.error("خطا در خروج", error);
    }
  };

  const handleModalClick = (item: any) => {
    if (item.action === "logout") {
      handleLogout();
    } else {
      router.push(item.href);
    }

    setOpenModal(false);
  };
  return (
    <div className="absolute w-[300px] top-full right-0 mt-3 bg-white rounded-xl shadow-2xl overflow-hidden z-50 px-9">
      {modalItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <button
            key={index}
            onClick={() => handleModalClick(item)}
            className="w-full px-9 py-4 flex items-center duration-150 border-b border-gray-100 last:border-b-0"
          >
            <div className="p-2 rounded-lg ">
              <Icon className="w-5 h-5" />
            </div>
            <div className="flex">
              <div className="font-medium text-base">{item.label}</div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
