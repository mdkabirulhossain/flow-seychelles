import { inter } from '@/app/font';
import React from 'react';

const WhyChooseSection = () => {
    return (
        <div className='my-5 px-2 md:px-32 lg:px-48'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <h1 className='text-center text-4xl bg-[linear-gradient(90.37deg,#0187D0_10.26%,#15978A_35.1%,#28A745_54.97%,#9FC421_79.81%,#FCDB05_99.68%)]
                 bg-clip-text text-transparent'>Why Choose FloW Seychelles?</h1>
                <p className={`${inter.className} text-xl text-center max-w-[550px] text-[#7D7D7D]`}>A sleek, intuitive platform built to make charging easier, smarter, and greener.</p>
            </div>
        </div>
    );
};

export default WhyChooseSection;