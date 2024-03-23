"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { CommentsApiRespone, getCommentsBySearch } from "@/service/api-blog";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Portal } from "./Portal";
import Link from "next/link";
import { usePathname,  } from "next/navigation";

export const SearchComment: FC = () => {
  const [search, setSearch] = useState<string>("");
  const [isSearchVisible, setSearchVisible] = useState<boolean>(false);
  const [comments, setComments] = useState<CommentsApiRespone | undefined>([]);


  const session = useSession();
  const pathName = usePathname();
  


  const [value, state] = useDebounce(search, 1000);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchVisible(true);
    setSearch(e.currentTarget.value);
  };

  const getBlog = async () => {
    const blog = await getCommentsBySearch(+value);
    setComments(blog);
  };

  useEffect(() => {
    if (isSearchVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isSearchVisible]);

  useEffect(() => {
    if (value.length > 0) {
      getBlog();
    }

    return () => {};
  }, [value]);

  return (
    <div className="search flex gap-10 flex-wrap items-center">
      <input
        className="search-input outline-none p-2 rounded"
        onChange={handleSearch}
        value={search}
        type="search"
        placeholder="Search comments by ID..."
      />

        {session?.data && (
          <Link className={pathName === "/profile" ? "activeNavLink text-cyan-400": "text-cyan-400"} href="/profile">Profile</Link>
        )}

        {session?.data ? (
          <Link className="text-cyan-400" onClick={() => signOut({redirect: true, callbackUrl: "/"})} href="#">Sign out</Link>
        ): (
          <Link href={'#'}  className="text-cyan-400" onClick={() => signIn('/auth/signin')}>Sign in</Link>
        )}

      {value.length > 0 && isSearchVisible && (
        <Portal
          onClickHandler={() => {
            setSearchVisible(false);
            setSearch("");
          }}
          className="portal-elem-backdrop absolute left-0 top-0 w-full h-screen backdrop-blur-sm"
        >
          <Portal className="portal-elem">
            <div className="search-result">
              {state.isPending() ? (
                <p className="text-center">Searching...</p>
              ) : comments?.length ? (
                comments?.map((comment, i: number) => (
                  <>
                    <div className="border-b" key={comment?.id}>
                      <h3 className="pb-2">
                        <b>Title: </b> {comment?.name}
                      </h3>
                      <p className="pb-2">
                        <b>Author email: </b>
                        <a
                          href={`mailto:${comment?.email}`}
                          className="underline"
                        >
                          {comment?.email}
                        </a>
                      </p>
                      <p className="pb-2">
                        <b>Body:</b> {comment?.body}
                      </p>
                      <p className="pb-2">
                        <b>postID:</b> {comment?.postId}
                      </p>
                      <div className="pb-2">
                        <Link
                          className="text-cyan-500"
                          href={`/blogs/${comment?.id}`}
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                  </>
                ))
              ) : (
                <p className="text-center">No comments found</p>
              )}
            </div>
          </Portal>
        </Portal>
      )}
    </div>
  );
};
