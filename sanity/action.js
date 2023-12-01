import { groq } from "next-sanity";
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

export const fetchAllBlog = async () => {
  const response = await client.fetch(
    groq`*[_type == "post"]{
      _createdAt,
      _id,
      author-> {
          id,
          firstName,
          lastName,
          userName,
          email,
          imageUrl,
          _createdAt
        },
      title,
      description,
      postedBy
  
  }`
  );
  return response;
};

export const CreateNewBlog = async ({ title, description, userId }) => {
  try {
    await client.create({
      _type: "post",
      title,
      description,
      postedBy: userId,
      author: { _type: "author", _ref: `${userId}` },
    });

    console.log("Post created successfully");
  } catch (error) {
    console.log(error.message);
  }
};
