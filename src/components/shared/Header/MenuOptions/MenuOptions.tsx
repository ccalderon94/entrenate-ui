'use client';
import Link from "next/link";
import { useNavbar } from "app/hooks/useNavbar";

export const MenuOptions = () => {
    const { mobileMenuIsOpen, menuOptions } = useNavbar();
    const linkStyles = mobileMenuIsOpen ? "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" : "text-sm font-semibold leading-6 text-gray-900";
    return (      
        menuOptions.map(({ name, href }) => (
            <Link key={name} href={`${href}`} className={linkStyles}>
                {name}
            </Link>
        ))      
    )
}