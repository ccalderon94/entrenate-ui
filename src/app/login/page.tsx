import Image from "next/image";
import { LoginForm } from "app/components/loging";

export default function LoginPage () {
    return (

        <div className=" flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
                <Image
                    className="mx-auto h-30 w-auto mb-3"
                    src="/images/logo.png"
                    width={200}                    
                    height={200}
                    alt="Entrenate_logo"
                />
                <small>Preparate en tus tiempos libres con esta sencilla apliación</small>
            </div>        
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">                
                <h2 className="mt-2 mb-8 text-2xl font-bold leading-9 text-center tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
                <LoginForm/>           
                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    Start a 14 day free trial
                    </a>
                </p>
            </div>
        </div>
    )
}