import Link from 'next/link';

function Header() {
  return (
    <header className="bg-purple-800 text-white flex shadow-xl h-16 items-center px-8 gap-8 mb-8">
      <h1 className="font-bold text-3xl">MDCU ACTIVITY</h1>
      <ul className="flex gap-4 text-md text-white">
        <li>
          <Link
            href="/"
            className="underline underline-offset-4 hover:no-underline"
          >
            Homepage
          </Link>
        </li>
        <li>
          <Link
            href="/createact"
            className="underline underline-offset-4 hover:no-underline"
          >
            สร้างกิจกรรม
          </Link>
        </li>
        <li>
          <Link
            href="/joinact"
            className="underline underline-offset-4 hover:no-underline"
          >
            เข้าร่วมกิจกรรม
          </Link>
        </li>
        <li>
          <Link
            href="/myact"
            className="underline underline-offset-4 hover:no-underline"
          >
            กิจกกรรมของฉัน
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;