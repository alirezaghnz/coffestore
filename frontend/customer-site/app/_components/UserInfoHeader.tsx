"use client";
import { User, Settings, FileText, LogOut } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { authClient } from "../lib/auth-client";
import { useRouter } from "next/navigation";


export default function UserInfoHeader() {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const { data: session } = authClient.useSession();
  const modalRef = useRef<HTMLDivElement>(null);

  // for handle click outside modal
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenModal(false);
      }
    }
    if (openModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openModal]);

  //modal items
  const modalItems = [
    {
      icon: User,
      label: `کاربر ${session?.user.name} `,
      href: "/profile/account",
    },
    {
      icon: Settings,
      label: "تنظیمات",
      href: "/settings",
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
    <div className="relative " ref={modalRef}>
      <button className="flex border bg-gradient-to-l from-cyan-700 to-cyan-500 px-5 py-2 rounded-md text-white " onClick={() => setOpenModal(!openModal)}>
        <User className="w-5 h-5 cursor-pointer" />
        <span className="cursor-pointer">پروفایل من</span>
      </button>

      {openModal && (
        <div className="absolute w-[300px] top-full right-0 mt-3 bg-white rounded-xl shadow-2xl overflow-hidden z-50 px-9">
          {modalItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={() => handleModalClick(item)}
                className="w-full px-9 py-4 flex items-center duration-150 border-b border-gray-50 last:border-b-0"
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
      )}
    </div>
  );
}
