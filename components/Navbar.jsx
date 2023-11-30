import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-10">
      <Link href="/">Blog</Link>

      <Link href="create-blog">Create Blog</Link>

      <UserButton afterSignOutUrl="/sign-in" />
    </nav>
  );
};

export default Navbar;
