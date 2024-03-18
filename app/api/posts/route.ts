import { getBlogs } from "@/service/api-blog"
import { NextResponse } from "next/server"

export const GET = async function (req: Request) {

    const {searchParams} = new URL(req.url)
    const query = searchParams.get('q')
    const posts = await getBlogs()

    if(query){
        const filteredPosts = posts?.filter(posts => 
            posts.title.toLowerCase().includes(query.toLowerCase())
        )

        return NextResponse.json(filteredPosts)
    }

    return NextResponse.json(posts)
}

export const POST = async function (req: Request) {
    const body = await req.json();
    console.log(body);

    return NextResponse.json({body})
    
}