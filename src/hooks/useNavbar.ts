import { create } from "zustand";

type Store = {
    mobileMenuIsOpen : boolean,
    menuOptions: MenuOption[],
    setMobileMenuIsOpen: (open: boolean) => void
}

export const useNavbar = create<Store>()((set) => ({
    mobileMenuIsOpen: false,
    idPersona: '',
    menuOptions: [
        {
            name: 'Home',
            description: '',
            href: '/',
        }, 
        {
            name: 'About',
            description: '',
            href: '/About',
        }, 
        {
            name: 'Projects',
            description: '',
            href: '/Projects',
        }, 
        {
            name: 'Contact',
            description: '',
            href: '/Contact',
        },
    ],
    setMobileMenuIsOpen: (open) => set({ mobileMenuIsOpen: open })
}));