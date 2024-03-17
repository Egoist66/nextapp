
export type BlogProps = {
  userId: number
  id: number
  title: string
  body: string
}

export type CommentsProps = {
    postId: number
    id: number
    name: string
    email: string
    body: string
  }
  
export type BlogApiResponse = BlogProps[]
export type CommentsApiRespone = CommentsProps[]



export const getBlogs = async (): Promise<BlogApiResponse | undefined> => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: {
        revalidate: 60
      }
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return undefined;
  }

}

  
export const getBlog = async (id: number): Promise<BlogProps | undefined> => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      next: {
        revalidate: 60
      }
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
  
export const getCommentsBySearch = async(id: number): Promise<CommentsApiRespone | undefined>  => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, {
      next: {
        revalidate: 60
      }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return undefined;
  }
}