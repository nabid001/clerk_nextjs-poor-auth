import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";

export async function GET(req, res) {
  const router = useRouter();
  const user = await currentUser();

  if (!user) {
    return NextResponse.redirect("/sign-up");
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

    // Redirect after saving the user
    req.re;
  } catch (error) {
    // Handle any potential errors while saving the user
    console.error("Error saving user:", error);
    return NextResponse.error(new Error("Failed to save user."));
  }
}
