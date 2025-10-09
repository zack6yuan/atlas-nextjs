export default async function TestUser() {
  const userImage = "../assets/user.png";
  return (
    <div>
      <div className="flex h-[48px] w-full grow items-center justify-center gap-2 bg-gray-50 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3">
        <img src={userImage} alt="" className="w-8 rounded-full" />
        <div className="hidden md:block">{"Test User"}</div>
      </div>
    </div>
  );
}