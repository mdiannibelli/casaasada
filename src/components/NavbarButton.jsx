import { navbarStore } from "../store/navbar-store";

const NavbarButton = () => {
    const openNavbarMenu = navbarStore(state => state.openNavbarMenu);
    return (
        <div class="flex lg:hidden">
            <button onClick={openNavbarMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class='icon icon-tabler icons-tabler-outline icon-tabler-menu-2 size-10 text-primary'><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
            </button>
        </div>
    )
}

export default NavbarButton


