import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  return (
    <main className="flex justify-between items-center p-10">
      <h1>Hello World</h1>

      <UserButton afterSignOutUrl="/sign-in" />
    </main>
  );
}
