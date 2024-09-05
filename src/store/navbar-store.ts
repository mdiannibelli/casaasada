import { create } from 'zustand'

interface State {
    navbarMenu: boolean
    openNavbarMenu: () => void
    closeNavbarMenu: () => void
}

export const navbarStore = create<State>()((set) => ({
    navbarMenu: false,
    openNavbarMenu: () => {
        set({ navbarMenu: true })
    },
    closeNavbarMenu: () => {
        set({ navbarMenu: false })
    }
}))