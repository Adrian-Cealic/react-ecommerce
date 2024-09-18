//hooks
import { useEffect, useState } from 'react'
//imgs
import Logo from '../img/logo.jpg'
//icons (React-icons)
import { FaCaretDown, FaPhone, FaMoon, FaSun } from 'react-icons/fa6'
import { IoMenu } from 'react-icons/io5'
import { RxCross1 } from "react-icons/rx";
//components
import ResponsiveMenu from './ResponsiveMenu';
import { Link } from 'react-router-dom';



const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'); //default
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const element = document.documentElement;

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        if (theme === 'dark') {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark')
        } else {
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light')
        }
    }

    useEffect(() => {
        if (theme === 'dark') {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme])

    return (
        <>
            <header className='h-40 bg-white text-black shadow-lg dark:bg-black dark:text-white'>
                <nav className="container mx-auto flex h-[70px] justify-between items-center py-16 px-8">
                    <div className="">
                        <Link to={'/'}>
                            <img src={Logo} alt="logo png" className='w-16 sm:w-26 md:w-48 lg:w-48 xl:w-40' />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <ul className='flex items-center gap-10'>
                            <li className='group relative cursor-pointer'>
                                <a href="#" className='flex items-center gap-2'>Menu
                                    <span><FaCaretDown className='transition-all duration-200 group-hover:rotate-180' /></span>
                                </a>
                                <div className="absolute hidden top-6 -left-5 z-[999] w-[100px] bg-white text-black p-4 text-lg rounded-xl group-hover:block">
                                    <ul className='space-y-3'>
                                        <li className='p-2 hover:bg-[#343E84] rounded-2xl hover:text-white'><Link to={'/shop'}>Shop</Link></li>
                                        <li className='p-2 hover:bg-[#343E84] rounded-2xl hover:text-white'><Link to={'/cart'}>Cart</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className='group relative cursor-pointer'>
                                <a href="#" className='flex items-center gap-2'>About
                                    <span><FaCaretDown className='transition-all duration-200 group-hover:rotate-180' /></span>
                                </a>
                                <div className="absolute hidden -left-40 z-[999] w-[220px] bg-white text-black p-4 text-lg rounded-xl group-hover:block xl:w-[320px] xl:-left-60" >
                                    <div className="grid grid-cols-2 xl:grid-cols-3 gap-5">
                                        <div className="h-[100px] overflow-hidden col-span-2 xl:col-span-1">
                                            <img src={Logo} alt="" className="w-full h-full object-contain" />
                                        </div>
                                        <div className="col-span-2">
                                            <ul className='mt-5'>
                                                <li className='flex gap-2'>Address: <span className='font-bold'>Muncesti 17</span></li>
                                                <li className='flex gap-2'>City: <span className='font-bold'>Orhei</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <div className="flex items-center gap-4">
                                <li>
                                    <FaPhone className='text-2xl rounded-md bg-brown p-2 w-[40px] h-[40px] text-white' />
                                </li>
                                <li>
                                    <div>
                                        <p className='text-sm'>Call us</p>
                                        <a href='tel:+37368901415' className='text-lg'>tel:+37368901415</a>
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div className='flex items-center gap-5'>
                        {
                            theme === 'light' ? (
                                <FaSun className='text-3xl' style={{ color: '#8f6a4c' }} onClick={() => changeTheme()} />

                            ) : (
                                <FaMoon className='text-3xl' style={{ color: '#8f6a4c' }} onClick={() => changeTheme()} />
                            )
                        }
                        {
                            showMenu ? (
                                <RxCross1 className='text-3xl md:hidden cursor-pointer transition-all duration-200 ease-in' onClick={() => toggleMenu()} />
                            ) : (
                                <IoMenu className='text-3xl md:hidden cursor-pointer transition-all duration-200 ease-in' onClick={() => toggleMenu()} />
                            )
                        }
                    </div>
                </nav>
            </header>
            {/* menu */}
            <ResponsiveMenu showMenu={showMenu} />

        </>

    )
}

export default Navbar