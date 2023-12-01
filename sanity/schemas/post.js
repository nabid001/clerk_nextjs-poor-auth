export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "postedBy",
      title: "Posted By",
      type: "string",
    },

    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "MainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "AlternativeText",
          type: "string",
        },
      ],
    },
  ],
};
