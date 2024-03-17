'use client'

import { FC, useEffect } from "react";

const ErrorBlogs: FC<{error: Error, reset: () => void}> = ({error, reset}) => {

    useEffect(() => {
        console.log(error)
    , [error]})
    
    return (
        <div className="container 2xl mx-auto">
            <h2 className="text-3xl text-center">Oops! {error.name} - {error.message}</h2>
            <div className="text-center pt-3">
                <button className="bg-blue-900 text-white px-5 py-2 rounded" onClick={reset}>Try again</button>
            </div>
        </div>
    );
}

export default ErrorBlogs