import React from 'react'
import { FaUser, FaHome, FaRegNewspaper } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaBasketShopping } from 'react-icons/fa6';

const ResponsiveMenu = ({ showMenu }) => {
    return (
        <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-full w-[60%] flex-col
     justify-between bg-slate-950 px-8px pt-24 text-white transition-all duration-200 ease-in`}>
            <div className="flex flex-col items-center justify-between">
                <div className="flex items-center gap-5">
                    <FaUser size={40} />
                    <h1 className='text-2xl font-bold'>Kima</h1>
                </div>
                <nav className='mt-20'>
                    <ul className='text-3xl mt-16 flex flex-col gap-16'>
                        <Link to={'/'}>
                            <li className='flex items-center gap-3 active:text-slate-500'><FaHome />
                                Home
                            </li>
                        </Link>
                        <Link to={'/cart'}>
                            <li className='flex items-center gap-3 active:text-slate-500'><MdShoppingCart />
                                Cart
                            </li>
                        </Link>
                        <Link to={'/shop'}>
                            <li className='flex items-center gap-3 active:text-slate-500'><FaBasketShopping />
                                Shop
                            </li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div >
    )
}

export default ResponsiveMenu
