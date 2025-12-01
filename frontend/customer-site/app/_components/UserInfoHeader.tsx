"use client";
import { User } from "lucide-react";
import { useRef, useState } from "react";
import UserInfoModal from "./UserInfoModal";
import useClickOutside from "../hooks/useClickOutside";

export default function UserInfoHeader() {
  const [openModal, setOpenModal] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  //custom hook for click outside
  useClickOutside(modalRef, () => {
    if (modalRef) {
      setOpenModal(false);
    }
  });

  return (
    <div className="relative " ref={modalRef}>
      <button
        className="flex border bg-gradient-to-l from-cyan-700 to-cyan-500 px-5 py-2 rounded-md text-white "
        onClick={() => setOpenModal(!openModal)}
      >
        <User className="w-5 h-5 cursor-pointer" />
        <span className="cursor-pointer">پروفایل من</span>
      </button>

      {openModal && <UserInfoModal setOpenModal={setOpenModal} />}
    </div>
  );
}
