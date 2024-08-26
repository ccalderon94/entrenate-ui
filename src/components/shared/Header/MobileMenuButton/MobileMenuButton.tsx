"use client";
import { useNavbar } from "app/hooks/useNavbar";
import { FiMenu } from "react-icons/fi"; 

export const MobileMenuButton = () => {
    const { setMobileMenuIsOpen } = useNavbar();
    return (
        <button 
            type="button" 
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuIsOpen(true)}>
                <span className="sr-only">Open mobile main menu</span>
                <FiMenu className="h-6 w-6" aria-hidden="true" />
        </button>
    )
}