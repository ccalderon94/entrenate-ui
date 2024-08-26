import Link from "next/link";
import Image from "next/image";
import { MenuOptions } from "./MenuOptions";
import { LoginButton } from "./LoginButton";
import { MobileMenuPanel } from "./MobileMenuPanel";
import { MobileMenuButton } from "./MobileMenuButton";

export const Header = async () => {
    return (
        <header className="header">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <Link href='/' className="-m-1.5 p-1.5">
                        <span className="sr-only">Entrenate</span>                     
                        <Image width={38} height={32} alt="Entrenate_logo" src="/images/mark.svg" className="h-8 w-auto" />
                    </Link>
                </div>
                {/* Mobile Menú Button */}
                <div className="flex lg:hidden">
                    <MobileMenuButton/>
                </div>
                {/* Menu Options */}
                <div className="hidden lg:flex lg:gap-x-12">
                    <MenuOptions/>
                </div>
                
                {/* Login */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <LoginButton/>
                </div>
            </nav>
            {/* Mobile Menu Panel */}
            <MobileMenuPanel/>     
        </header>
    )
}