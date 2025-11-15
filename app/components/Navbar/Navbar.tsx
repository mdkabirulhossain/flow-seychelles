import React from 'react';
import Image from "next/image";
import { inter } from '@/app/font';
import Link from 'next/link';


const Navbar = () => {
    return (
        <div className='flex justify-between items-center lg:px-20 py-7'>
            <div>
                <Link href={'/'}>
                <Image
                    src={"/logo.png"}
                    alt='logo'
                    width={200}
                    height={50}
                /></Link>
            </div>
            <div>
                <ul className='flex gap-10'>
                    <li className='hover:text-[#1E1E1E] text-[#A3A3A3]'><Link href={'/'}>Home</Link></li>
                    <li className='hover:text-[#1E1E1E] text-[#A3A3A3]'><Link href={'/'}>Features</Link></li>
                    <li className='hover:text-[#1E1E1E] text-[#A3A3A3]'><Link href={'/'}>How it Works</Link></li>
                    <li className='hover:text-[#1E1E1E] text-[#A3A3A3]'><Link href={'/'}>About Us</Link></li>
                    <li className='hover:text-[#1E1E1E] text-[#A3A3A3]'><Link href={'/'}>Our Ev Chargers</Link></li>
                    <li className='hover:text-[#1E1E1E] text-[#A3A3A3]'><Link href={'/'}>Blog</Link></li>
                    <li className='hover:text-[#1E1E1E] text-[#A3A3A3]'><Link href={'/'}>Contact Us</Link></li>
                </ul>
            </div>
            <div>
                <button className={`${inter.className} bg-linear-to-r from-[#0187D0] via-[#28A745] to-[#FCDB05] text-white px-6 py-2 rounded-full font-semibold`}>
                    Download App
                </button>
            </div>
        </div>
    );
};

export default Navbar;