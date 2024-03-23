import { getBlog, getBlogs } from "@/service/api-blog";
import { Metadata } from "next";
import Link from "next/link";
import { FC } from "react";

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const blog = await getBlog(+params.id);
  return {
    title: blog?.title,
  };
}

export async function generateStaticParams() {
  const posts = await getBlogs();
  return posts?.map(post => ({
    
    slug: post.id.toString(),
    
  }))
}

type PostProps = {
  params: {
    id: string;
  };
};

const Blog: FC<PostProps> = async ({ params }) => {
  const blog = await getBlog(+params.id);

  return (
    <div className="container 2xl mx-auto">
      <h1 className="text-3xl text-center pb-5">{blog?.title}</h1>

      <div className="border-blue-900 border rounded p-5">
        <p>{blog?.body}</p>
        <p>Author: {blog?.userId}</p>
        <p>ID: {blog?.id}</p>
      </div>

      <div className="pt-10">
        <Link className="text-blue-900 underline" href={"/blogs"}>
          Back
        </Link>
      </div>
    </div>
  );
};

export default Blog;
