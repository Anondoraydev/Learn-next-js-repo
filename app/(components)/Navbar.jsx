"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "../../public/image/logo.png";

const Navbar = () => {
    const pathname = usePathname();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const getNavLinkClass = (path) =>
        pathname === path
            ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 font-semibold border-b-2 border-blue-500"
            : "text-[#959595]";

    const NavLink = (
        <>
            <li>
                <Link href="/" className={getNavLinkClass("/")}>
                    Home
                </Link>
            </li>
            <li>
                <Link href="/pages/course" className={getNavLinkClass("/pages/course")}>
                    Course
                </Link>
            </li>
            <li>
                <Link
                    href="/pages/monitors"
                    className={getNavLinkClass("/pages/monitors")}
                >
                    Monitors
                </Link>
            </li>
            <li>
                <Link href="/pages/about" className={getNavLinkClass("/pages/about")}>
                    About
                </Link>
            </li>
        </>
    );

    return (
        <div className="md:max-w-[1400px] mx-auto">
            <nav className="navbar bg-base-100">
                <div className="navbar-start">
                    {/* Mobile Menu */}
                    <div className="dropdown">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="btn btn-ghost lg:hidden"
                            aria-label="Toggle Menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <ul
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 md:w-52 p-2 shadow"
                                role="menu"
                            >
                                {NavLink}
                            </ul>
                        )}
                    </div>
                    <Image src={Logo} alt="Website Logo" width={120} height={40} />
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="space-x-12 font-bold menu-horizontal px-1">
                        {NavLink}
                    </ul>
                </div>

                <div className="navbar-end">
                    <button className="md:w-[154px] h-[52px] bg-[#F5C362] text-[#190D30] font-bold rounded-xl transition-all duration-300 hover:brightness-90">
                        Get Started
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
