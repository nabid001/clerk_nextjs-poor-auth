import { currentUser } from "@clerk/nextjs";
import { saveUserToDB } from "@/sanity/action";
import { redirect } from "next/navigation";
import Button from "@/components/button";

const page = async () => {
  const user = await currentUser();

  if (!user) {
    router.push("/sign-up");
  }

  const { id, username, imageUrl } = user;
  const email = user.externalAccounts[0]?.emailAddress;

  try {
    await saveUserToDB({
      id,
      username,
      imageUrl,
      email,
    });
  } catch (error) {
    console.error("Error saving user:", error);
  }

  return (
    <div className="flex justify-center items-center w-full mic-h-screen">
      <Button />
    </div>
  );
};

export default page;
