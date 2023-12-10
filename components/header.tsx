import Link from "next/link";
import { Nav } from "./nav";

export default function Header() {
  return (
    <header className="h-11 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur flex justify-between items-center">
      <Nav />
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
