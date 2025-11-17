'use client';

import { inter } from '@/app/font';
import Image from 'next/image';
import React, { useState } from 'react';

interface Step {
    id: number;
    title: string;
    description: string;
}

const ChargingYourEv = () => {
    const [activeStep, setActiveStep] = useState<number | null>(1);

    const steps: Step[] = [
        {
            id: 1,
            title: 'Find a Station',
            description: 'Open the app and instantly see nearby charging stations with real-time availability.'
        },
        {
            id: 2,
            title: 'Start Charging',
            description: 'Plug in your vehicle and start charging with just a tap. Monitor your charging progress in real-time.'
        },
        {
            id: 3,
            title: 'Track & Pay',
            description: 'Track your charging session and pay seamlessly through the app with secure payment options.'
        },
        {
            id: 4,
            title: 'See Your Impact',
            description: 'View your environmental impact, energy saved, and carbon footprint reduction over time.'
        }
    ];

    const handleStepClick = (stepId: number) => {
        setActiveStep(activeStep === stepId ? null : stepId);
    };

    return (
        <div className='my-5 px-2 md:px-32 lg:px-48'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <h1 className='text-center text-4xl bg-[linear-gradient(90.37deg,#0187D0_10.26%,#15978A_35.1%,#28A745_54.97%,#9FC421_79.81%,#FCDB05_99.68%)]
                        bg-clip-text text-transparent'>Why Choose FloW Seychelles?</h1>
                <p className={`${inter.className} text-xl text-center max-w-[550px] text-[#7D7D7D]`}>A sleek, intuitive platform built to make charging easier, smarter, and greener.</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mt-8">
                {/* Left Image */}
                <div className="flex-1 flex justify-center items-center">
                    <Image
                        src="/home/chargeEV.png"
                        alt="charge your ev"
                        width={300}
                        height={600}
                        className='h-1/2 md:h-full'
                    />
                </div>

                {/* Right Steps */}
                <div className="flex-1 px-10 flex justify-center items-center">
                    <div className="relative w-full max-w-md">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className="relative flex items-start gap-4 py-10 cursor-pointer"
                                onClick={() => handleStepClick(step.id)}
                            >
                                {/* Vertical Line */}
                                {index !== steps.length - 1 && (
                                    <div className="absolute top-10 left-2.5 w-0.5 h-full bg-gray-300"></div>
                                )}

                                {/* Circle */}
                                <div
                                    className={`relative z-10 shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${activeStep === step.id
                                        ? 'bg-green-500 shadow-lg scale-110'
                                        : 'bg-gray-300'
                                        }`}
                                ></div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3
                                        className={`text-lg -mt-1 font-semibold transition-colors duration-300 ${activeStep === step.id ? 'text-green-600' : 'text-gray-400'
                                            }`}
                                    >
                                        {step.title}
                                    </h3>

                                    <div
                                        className={` overflow-hidden transition-all duration-300 ease-in-out ${activeStep === step.id ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <p className={`${inter.className} text-[#7D7D7D] text-sm leading-relaxed`}>
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>


        </div>
    );
};

export default ChargingYourEv;