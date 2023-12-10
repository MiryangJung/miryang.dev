import Link from "next/link";
import Nav from "./nav";
import MobileNav from "./mobile-nav";
import Image from "next/image";

export default function Header() {
  return (
    <header className="h-14 px-5 sticky top-0 z-50 w-full border-b bg-white flex justify-between items-center">
      <Nav />
      <MobileNav />
      <div className="flex items-center gap-1">
        <span className="text-xs font-medium">이직에 열려있습니다</span>
        <Logo />
      </div>
    </header>
  );
}

function Logo() {
  return (
    <Link href="/" className="font-extrabold">
      <Image width={30} height={30} src="/logo.png" alt="로고" />
    </Link>
  );
}
