import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="text-gray-600 my-4 ">
      <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded text-base z-20">
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold">Blog</span>
          </Link>

          <Link className="ml-auto pr-5" href="/create-blog">
            Create Blog
          </Link>

          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
