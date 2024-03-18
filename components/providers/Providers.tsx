'use clinet'

import { SessionProvider } from "next-auth/react";
import { FC } from "react";

export const Providers: FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}