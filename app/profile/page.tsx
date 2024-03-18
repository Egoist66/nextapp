import { authConfig } from "@/configs/auth-config";
import { getServerSession } from "next-auth/next";
import { FC } from "react";

const Profile: FC = async () => {
    const session = await getServerSession(authConfig);
    
    return (
        <div className="container 2xl mx-auto">
            <h2 className="text-3xl pb-5">Welcome!</h2>
            <div className="flex flex-wrap gap-10 items-center">
                <div>
                   {session?.user?.image ? <img className="rounded max-w-full" src={session?.user?.image} alt="avatar" />
                   : <img className="rounded w-24 max-w-full" src="https://i.stack.imgur.com/l60Hf.png" alt="avatar" />} 
                </div>

                <div className="flex-grow">
                    <p className="pb-2">User name: <span className="text-xl font-semibold">{session?.user?.name}</span></p>
                    <p>Email: <a className="underline text-cyan-700" href={"mailto:" + session?.user?.email}>{session?.user?.email}</a></p>
                 
                </div>
            </div>

        </div>
    )
}

export default Profile