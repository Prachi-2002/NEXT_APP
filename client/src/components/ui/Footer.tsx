import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white text-center p-6 border-t border-gray-800">
      <div className="flex flex-col items-center gap-4">
        {/* Social Media Links */}
        <div className="flex gap-6 text-xl">
          <a href="https://github.com/Prachi-2002" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-[oklch(0.789_0.154_211.53)] transition" />
          </a>
          <a href="https://www.linkedin.com/in/prachimadame/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-[oklch(0.789_0.154_211.53)] transition" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-[oklch(0.789_0.154_211.53)] transition" />
          </a>
        </div>

        {/* Footer Navigation */}
        <nav className="flex gap-4 text-sm">
          <Link href="/" className="hover:text-[oklch(0.789_0.154_211.53)]">About</Link>
          <Link href="/" className="hover:text-[oklch(0.789_0.154_211.53)]">Projects</Link>
          <Link href="/contact" className="hover:text-[oklch(0.789_0.154_211.53)]">Contact</Link>
        </nav>

        {/* Copyright Text */}
        <p className="text-xs opacity-70">
          © {new Date().getFullYear()} Prachi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
