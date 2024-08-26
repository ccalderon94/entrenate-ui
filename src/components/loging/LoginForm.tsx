"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import type { FormEventHandler, ChangeEventHandler } from "react";

export const LoginForm = () => {

    const [loginFormInfo, setLoginFormInfo] = useState({
        username: "",
        password: ""
    })

    const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setLoginFormInfo({
            ...loginFormInfo,           
            [event.target.name]: event.target.value            
        })
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        // const formData = new FormData(event.currentTarget);
        // const credentials = Object.fromEntries(formData);
        await signIn("credentials", {...loginFormInfo, callbackUrl: '/persona'})
      }
    return ( 
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username"className="block text-sm font-medium leading-6 text-gray-900">
                    Username
                </label>
                <div className="mt-2">
                    <input 
                        id="username" 
                        name="username" 
                        type="text"
                        autoComplete="username"
                        value={loginFormInfo.username}
                        onChange={onChange}
                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                        required 
                    />
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                        </a>
                    </div>
                </div>
                <div className="mt-2">
                    <input 
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"                        
                        onChange={onChange}
                        required
                    />
                </div>
            </div>
            <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                    Sign in
                </button>
            </div>
        </form>
    )
}