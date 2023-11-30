import { currentUser } from "@clerk/nextjs";
import { saveUserToDB } from "@/sanity/action";
import Button from "@/components/button";

const page = async () => {
  const user = await currentUser();

  const { id, username, imageUrl, firstName, lastName } = user;
  const email = user.externalAccounts[0]?.emailAddress;

  if (!user) {
    router.push("/sign-up");
  } else {
    try {
      await saveUserToDB({
        id,
        username,
        firstName,
        lastName,
        email,
        imageUrl,
      });
    } catch (error) {
      console.error("Error saving user:", error);
    }
  }

  return (
    <div className="flex justify-center items-center w-full mic-h-screen">
      <Button />
    </div>
  );
};

export default page;
