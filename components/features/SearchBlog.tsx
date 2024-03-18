"use client";;
import { BlogApiResponse, deletePosts } from "@/service/api-blog";
import Link from "next/link";
import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

type SearchProps = {
  posts: BlogApiResponse | undefined;
};

export const SearchBlog: FC<SearchProps> = memo(({ posts }) => {
  const [search, setSearch] = useState<string>("");
  const [foundPosts, setFoundPosts] = useState<BlogApiResponse | undefined>([])
  const [value] = useDebounce(search, 1000);


  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  
  }

  const removePosts = async (id: number) => {
    await deletePosts(id);
    setFoundPosts(foundPosts?.filter(post => post.id !== id))

  }

  useEffect(() => {
    if (value.length > 0) {
      const filteredPosts = posts?.filter((post) => {
        return post.title.toLowerCase().includes(value.toLowerCase());
      });
      setFoundPosts(filteredPosts);
    } else {
      setFoundPosts(posts);
    }
  }, [value]);

  return (
    <div>
      <input
        className="search-input text-white  outline-none p-2 rounded"
        style={{background: '#1F2937'}}
        onChange={handleSearch}
        value={search}
        type="search"
        placeholder="Search blog..."
      />

      <ul className="pt-10 pb-10">
        {foundPosts?.length ? foundPosts?.map((post, index: number) => (
          <li key={post?.id}>
            <span>{index + 1}. </span>
            <Link
              className="text-blue-900 underline"
              href={`/blogs/${post?.id}`}
            >
              {post?.title}
            </Link>
            <span onClick={() => removePosts(post?.id)} className="text-red-600 ml-2 text-lg cursor-pointer inline-block font-semibold">&times;</span>
          </li>
        )): <p>No posts found</p>}
      </ul>
    </div>
  );
});
