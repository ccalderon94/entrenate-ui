"use client";
import Link from "next/link";
import { useNavbar } from "app/hooks/useNavbar";
import { FiLogIn } from "react-icons/fi";

export const LoginButton = () => {

    const { mobileMenuIsOpen } = useNavbar();
    const linkStyles = (mobileMenuIsOpen)? "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" : "inline-flex items-center justify-center text-sm font-semibold leading-6 text-gray-900"
    return (        
        <Link href='/login'  className={linkStyles}>
            <span>Log in</span>
            {!mobileMenuIsOpen && <FiLogIn className="h-6 w-6" />}            
        </Link>
    )
}

