"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive);
    }
    return (
        <nav className={`${isActive ? "bg-primary-color duration-1000 pb-10 bg-opacity-50" : "bg-transparent"} absolute flex flex-wrap p-5 w-full text-white z-10`}>
            <button onClick={handleClick} className="lg:hidden inline-flex self-end ml-auto outline-none">
                <Menu className="h-8 w-8" />
            </button>
            <div className={`${isActive ? "" : "hidden"} w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
                <div className="lg:inline-flex lg:flex-grow lg:w-auto lg:items-center gap-y-3 justify-end flex flex-col lg:flex-row lg:h-auto">
                    <Link href="/" className="lg:inline-flex lg:w-auto w-full px-5 items-center justify-center font-semibold text-2xl hover:text-primary-color">
                        Home
                    </Link>
                    <Link href="#about" className="lg:inline-flex lg:w-auto w-full px-5 items-center justify-center font-semibold text-2xl hover:text-primary-color">
                        About
                    </Link>
                    <Link href={"../VanamaSaiVenkataKoushik.pdf"} target="_blank" className="lg:inline-flex lg:w-auto w-full px-5 items-center justify-center font-semibold text-2xl hover:text-primary-color">
                        Resume
                    </Link>
                    <Link href="#contact" className="lg:inline-flex lg:w-auto w-full px-5 items-center justify-center font-semibold text-2xl hover:text-primary-color">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
