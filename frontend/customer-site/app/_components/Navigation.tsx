import Link from "next/link";
import Logo from "./Logo";
import CartIcon from "./CartIcon";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center text-md max-w-7xl mx-auto">
      <ul className="flex gap-9">
        <li>
          <Link href="/menu">منو کافی </Link>
        </li>
        <li>
          <Link href="/about">درباره ما</Link>
        </li>
        <li>
          <Link href="/contact">تماس با ما</Link>
        </li>
      </ul>
      <div className="flex gap-6">
        <Logo />
        <CartIcon />
      </div>
    </nav>
  );
}
