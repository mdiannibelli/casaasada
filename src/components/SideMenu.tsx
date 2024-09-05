import { navbarStore } from '../store/navbar-store'
import clsx from 'clsx';

const SideMenu = () => {
    const navbarMenu = navbarStore((state) => state.navbarMenu);
    const closeNavbarMenu = navbarStore((state) => state.closeNavbarMenu);
    return (
        <div>
            {/* Background */}
            {
                navbarMenu &&
                <div className='fixed z-20 top-0 h-screen w-screen opacity-30 bg-primary' />
            }

            {/* Blur Background */}
            {
                navbarMenu &&
                <div className='fixed z-20 top-0 h-screen w-screen backdrop-filter backdrop-blur-sm fade-in' />
            }

            {/* Nav */}
            <nav className={
                clsx(
                    'fixed z-20 top-0 left-0 w-full h-screen bg-primary opacity-85 shadow-2xl transform transition-all duration-500',
                    { 'translate-x-[-100%]': !navbarMenu }
                )
            }>
                <button className='text-gray-800 size-12 absolute top-0 right-0 m-2' onClick={closeNavbarMenu}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x size-8"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg></button>
                <div className='flex flex-col items-center  [&>a]:mt-32 [&>a]:text-2xl'>
                    <a onClick={closeNavbarMenu} className='text-gray-900 duration-300 text-3xl uppercase' href='/'>Inicio</a>
                    <a onClick={closeNavbarMenu} className='text-gray-900 duration-300 text-3xl uppercase' href='/properties'>Propiedades</a>
                    <a onClick={closeNavbarMenu} className='text-gray-900 duration-300 text-3xl uppercase' href='/sobre-nosotros'>Sobre Nosotros</a>
                    <a onClick={closeNavbarMenu} className='text-gray-900 duration-300 text-3xl uppercase' href='/ubicacion'>Ubicación</a>
                </div>
            </nav>
        </div>
    )
}

export default SideMenu
