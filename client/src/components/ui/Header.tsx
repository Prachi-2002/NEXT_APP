import React from 'react';
import { Button } from './button';
import Link from 'next/link';

function Header() {
    return (
        <div className="flex mt-4 mb-4 justify-between px-8 items-center">
            {/* Styled Name with Rounded Background */}
            <Link href="/">
                <div className="relative flex items-center justify-center w-content p-2 rounded-full bg-gradient-to-r from-[oklch(0.789_0.154_211.53)] to-[oklch(0.637_0.237_25.331)] shadow-lg">
                    <p className="text-transparent font-bold bg-clip-text text-black bg-white text-xl font-mono italic tracking-widest drop-shadow-lg">
                        Prachi
                    </p>
                </div>
            </Link>

            {/* Buttons with Border Animation */}
            <span className="flex gap-4">
                <a href="/resume.pdf" download="Prachi_Resume.pdf">
                    <Button className="cursor-pointer border border-white px-4 py-2 transition duration-300 hover:border-transparent">
                        Resume Download
                    </Button>
                </a>
                <Link href="/contact">
                    <Button className="cursor-pointer border border-white hover:border-transparent transition duration-300">
                        Contact Me
                    </Button>
                </Link>
            </span>
        </div>
    );
}

export default Header;
