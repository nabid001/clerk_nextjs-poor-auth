export default {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "userName",
      title: "User Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "id",
      title: "Id",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "firstName",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "imageUrl",
      title: "Image Url",
      type: "string",
    },
  ],
};
