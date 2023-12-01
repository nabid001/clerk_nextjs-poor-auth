import { fetchAllBlog } from "@/sanity/action";

export const revalidate = 1;

const page = async () => {
  const blogs = await fetchAllBlog();
  return (
    <main className="">
      <h1>Home Page</h1>
      {blogs.length == 0 ? (
        <>
          <h2>not post yet</h2>
        </>
      ) : (
        blogs.map((blog, i) => (
          <div key={i}>
            <h1>{blog.title}</h1>
            <h4>{blog.description}</h4>
          </div>
        ))
      )}
    </main>
  );
};

export default page;
