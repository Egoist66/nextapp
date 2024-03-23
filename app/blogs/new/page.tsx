import { Metadata } from "next";
import { redirect } from "next/navigation";
import { FC } from "react";

async function createPost(data: FormData) {
  "use server";
  const { title, body } = Object.fromEntries(data);

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
      userId: Date.now(),
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const post = await response.json();
  redirect(`/blogs/${post.id}`);
}

export const metadata: Metadata = {
  title: "New",
  description: "Simple blog app",
};

const BlogForm: FC = () => {
  return (
    <div className="container 2xl mx-auto">
      <div className="flex justify-center items-center">
        <form
          action={createPost}
          className="flex flex-col w-full max-w-md p-8 bg-white border border-gray-200 rounded-lg shadow-md space-y-6"
        >
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Create a new blog post
          </h2>
          <input
            type="text"
            name="title"
            required
            placeholder="Title"
            className="border border-gray-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows={5}
            name="body"
            required
            placeholder="Content"
            className="resize-none border border-gray-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
