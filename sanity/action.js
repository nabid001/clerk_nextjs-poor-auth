import { client } from "./lib/client";

export const saveUserToDB = async ({
  id,
  username: userName,
  imageUrl,
  email,
  lastName,
  firstName,
}) => {
  try {
    await client.createIfNotExists({
      _type: "author",
      _id: id,
      id,
      userName,
      firstName,
      lastName,
      email,
      imageUrl,
    });

    console.log("user created");
  } catch (error) {
    console.log(error.message || "failed to create user");
  }
};
