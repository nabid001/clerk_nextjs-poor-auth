import CreateBlog from "@/components/forms/CreateBlog";
import { currentUser } from "@clerk/nextjs";

const page = async () => {
  const user = await currentUser();
  return (
    <div className="flex justify-center items-center top-10 w-full flex-col">
      <h1>Create Blog</h1>

      <div className="mt-10">
        <CreateBlog userId={user && user.id} />
      </div>
    </div>
  );
};

export default page;
