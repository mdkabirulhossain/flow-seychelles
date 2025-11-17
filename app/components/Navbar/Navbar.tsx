"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { inter } from "@/app/font";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false); 

  return (
    <nav className="flex justify-between items-center lg:px-20 py-4 px-4 relative">
      
      {/* Logo */}
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={200} height={50} />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10">
        <li className="hover:text-[#1E1E1E] text-[#A3A3A3]"><Link href="/">Home</Link></li>
        <li className="hover:text-[#1E1E1E] text-[#A3A3A3]"><Link href="/">Features</Link></li>
        <li className="hover:text-[#1E1E1E] text-[#A3A3A3]"><Link href="/">How it Works</Link></li>
        <li className="hover:text-[#1E1E1E] text-[#A3A3A3]"><Link href="/">About Us</Link></li>
        <li className="hover:text-[#1E1E1E] text-[#A3A3A3]"><Link href="/">Our Ev Chargers</Link></li>
        <li className="hover:text-[#1E1E1E] text-[#A3A3A3]"><Link href="/">Blog</Link></li>
        <li className="hover:text-[#1E1E1E] text-[#A3A3A3]"><Link href="/">Contact Us</Link></li>
      </ul>

      {/* Button (hidden on mobile) */}
      <div className="hidden md:block">
        <button
          className={`${inter.className} bg-linear-to-r from-[#0187D0] via-[#28A745] to-[#FCDB05] text-white px-6 py-2 rounded-full font-semibold`}
        >
          Download App
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {/* Hamburger icon */}
        {!open ? (
          <Menu/>
        ) : (
          // Close icon
          <X/>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg p-6 md:hidden rounded-lg z-50">

          <ul className="flex flex-col gap-6 text-center">
            <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link href="/" onClick={() => setOpen(false)}>Features</Link></li>
            <li><Link href="/" onClick={() => setOpen(false)}>How it Works</Link></li>
            <li><Link href="/" onClick={() => setOpen(false)}>About Us</Link></li>
            <li><Link href="/" onClick={() => setOpen(false)}>Our Ev Chargers</Link></li>
            <li><Link href="/" onClick={() => setOpen(false)}>Blog</Link></li>
            <li><Link href="/" onClick={() => setOpen(false)}>Contact Us</Link></li>

            {/* Download Button in mobile menu */}
            <button
              className={`${inter.className} bg-linear-to-r from-[#0187D0] via-[#28A745] to-[#FCDB05] text-white px-6 py-2 rounded-full font-semibold`}
            >
              Download App
            </button>
          </ul>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
