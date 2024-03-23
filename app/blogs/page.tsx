import { Metadata } from "next";
import { FC } from "react";
import { SearchBlog } from "@/components/features/SearchBlog";
import { getBlogs } from "@/service/api-blog";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Simple blog app",
};

const Blog: FC = async () => {
  const posts = await getBlogs();

  
  return (

    <div className="container 2xl mx-auto">
      <h1 className="text-3xl text-center pb-10">Page Blog</h1>

      <Link className="text-blue-900 underline pb-10 block" href="/blogs/new">Create new blog</Link>
      <SearchBlog posts={posts} />
    </div>
    
  );
};

export default Blog;
