import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../store/auth';

export const Navbar = () => {
    const {isloggedIn} =useAuth()
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex justify-between items-center">
                <div className="text-white text-2xl">
                    <a href="#">Brand</a>
                </div>
                <div className="block lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? '' : 'hidden'}`}>
                    <ul className="text-white lg:flex lg:justify-end lg:flex-1">
                        <li className="p-2">
                        <NavLink to="/student"> Register    </NavLink>
                        </li>
                        <li className="p-2">
                        <NavLink to="/administrator"> Admin   </NavLink>
                        </li>
                        {
                        isloggedIn ?
                        (<li className="p-2"><NavLink to="/logout"> Logout</NavLink></li>):
                        (<li className="p-2"><NavLink to="/student/login"> Login</NavLink></li>)
                        }
                    </ul>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>









</div>
        </nav>
    );
}
