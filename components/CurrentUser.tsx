import user from "../assets/user.png";
import Link from "next/link";

export default function CurrentUser() {
  return (
    <div>
      <div className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3">
        <img src={user.src} alt="" className="w-6" />
        <div className="hidden md:block">[ userName ]</div>
      </div>
    </div>
  );
}