"use client";
import Link from "next/link";
import Image from "next/image";
import { useNavbar } from "app/hooks/useNavbar";
import { MenuOptions } from "../MenuOptions";
import { LoginButton } from "../LoginButton";
import { HiOutlineX } from "react-icons/hi"; 

export const MobileMenuPanel = () => {    
    const { mobileMenuIsOpen, setMobileMenuIsOpen } = useNavbar();

    return (
        (mobileMenuIsOpen) ? 
        <div className="lg:hidden">
            <div className="fixed inset-0 z-10">
                <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href='/' className="-m-1.5 p-1.5">
                            <span className="sr-only">Entrenate</span>                     
                            <Image width={38} height={32} alt="Entrenate_logo" src="/images/mark.svg" className="h-8 w-auto" />
                        </Link>
                        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuIsOpen(false)}>
                            <span className="sr-only">Close mobile menu</span>
                            <HiOutlineX className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">                                
                                {/* Menu Options */}
                                <MenuOptions/>
                            </div>                                        
                            <div className="py-6">                                        
                                <LoginButton/>
                            </div>
                        </div>
                    </div>
                </div>      
            </div>
            <div className="">

            </div>
        </div>
        :
        <></>
    )
}
