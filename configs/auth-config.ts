import type { AuthOptions, User } from "next-auth";
import googleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import users from '../service/db/user.json'

export const authConfig: AuthOptions = {
    providers: [
        googleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,

        }),
        Credentials({

            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "Enter your email",
                    required: true,
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter your password",
                    required: true,
                },
            },
            async authorize(credentials, req) {
                

                if (!credentials?.email || !credentials?.password) {
                    return null
                }

                const currentUser = users.find(user => user.email === credentials.email)
                if(currentUser && currentUser.password === credentials.password) {
                    const {password, ...userWithOutPassword} = currentUser
                   return userWithOutPassword as User
                }
                
                return null
            },
    
        })
    ],
    theme: {
        colorScheme: "dark",
       
    }
    // pages: {

    // }
}