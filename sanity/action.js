import { client } from "./lib/client";

export const saveUserToDB = async ({ id, username, imageUrl, email }) => {
  try {
    const response = await client.createIfNotExists({
      _type: "user",
      name: username,
      _id: id,
      id,
      email,
      imageUrl,
    });

    // return respons
  } catch (error) {
    console.log(error.message || "failed to create user");
  }
};
