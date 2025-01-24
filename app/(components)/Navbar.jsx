"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../../public/image/logo.png'

const Navbar = () => {
    const pathname = usePathname();
    const NavLink = <>
        <li><Link href="/" className={`${pathname === '/' ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 font-semibold border-b-2 border-blue-500' : 'text-[#959595]'}`}> Home </Link></li>
        <li><Link href="/pages/course" className={`${pathname === '/pages/course' ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 font-semibold border-b-2 border-blue-500' : 'text-[#959595]'}`}>Course</Link></li>
        <li><Link href="/pages/monitors" className={`${pathname === '/pages/monitors' ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 font-semibold border-b-2 border-blue-500' : 'text-[#959595]'}`} > Monitors</Link></li>
        <li><Link href="/pages/about" className={`${pathname === '/pages/about' ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 font-semibold border-b-2 border-blue-500' : 'text-[#959595]'}`}>  About </Link></li>

    </>
    return (
        <div className='max-w-[1400px] mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {NavLink}
                        </ul>
                    </div>
                    <Image src={Logo} alt='logo' />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="space-x-12 font-bold menu-horizontal px-1">
                        {NavLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="w-[154px] h-[52px] bg-[#F5C362] text-[#190D30] font-bold rounded-xl">
                    Get Started
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Navbar;