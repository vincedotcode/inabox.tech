
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Box, Menu } from 'lucide-react';
import { ModeToggle } from "@/helper/darkmode";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="bg-white shadow-md w-full dark:bg-stone-950 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
                <div className="flex justify-between items-center py-3 md:py-5">
                    <Link href="/" passHref className="flex items-center text-xl font-bold text-gray-800 dark:text-gray-200">
                        <Box className="mr-2" color="#FACC15" /> 
                        Inabox
                    </Link>
                    <div className="md:hidden d-flex justify-between">
                        <ModeToggle />
                        <button onClick={toggleMenu} className="mx-3">
                            <Menu size={24} />
                        </button>
                    </div>
                    <div className={`absolute md:relative top-16 left-0 md:top-auto md:left-auto w-full md:w-auto transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} md:block dark:bg-stone-950 shadow-md md:shadow-none`}>
                        <ul className="flex flex-col md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <Link href="/features" passHref className="block py-2 px-4 hover:bg-primary rounded-sm hover:text-slate-50">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" passHref className="block py-2 px-4 hover:bg-primary rounded-sm hover:text-slate-50">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" passHref className="block py-2 px-4 hover:bg-primary hover:text-slate-50 rounded-sm">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/auth/login" passHref className="block py-2 px-4 hover:bg-primary rounded-sm hover:text-slate-50">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden md:flex items-center md:text-sm md:font-medium">
                        <Link href="/auth/signup" passHref className="block py-2 px-4 hover:bg-primary rounded-sm hover:text-slate-50">
                            Sign Up
                        </Link>
                        <Link href="/auth/login" passHref className="block py-2 px-4 hover:bg-primary rounded-sm hover:text-slate-50 mx-2" >
                            Login
                        </Link>
                        <li className="hidden md:block">
                            <ModeToggle />
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
}
