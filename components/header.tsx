import Link from "next/link";
import Nav from "./nav";
import MobileNav from "./mobile-nav";

export default function Header() {
  return (
    <header className="h-12 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur flex justify-between items-center">
      <Nav />
      <MobileNav />
      <Logo />
    </header>
  );
}

function Logo() {
  return (
    <Link href="/" className="font-extrabold">
      miryang.dev
    </Link>
  );
}
