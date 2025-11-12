import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center text-sm lg:text-lg font-[300] max-w-7xl mx-auto">
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
    </nav>
  );
}
