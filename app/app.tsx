
import { FC, ReactNode } from "react";

export const App: FC<{children: ReactNode}> = ({children}) => {
    return (
    
        <main className="min-h-screen pt-10 pl-5 pr-5">
            {children}
        </main>
       
    )
}