import userImage from "../assets/user.png"

export default async function TestUser() {
  return (
    <div>
      <div className="flex h-[48px] w-full grow items-center justify-center gap-2 bg-gray-50 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3">
        <img src={userImage.src} alt="" className="w-8 rounded-full" />
        <p>Test User</p>
      </div>
    </div>
  );
}