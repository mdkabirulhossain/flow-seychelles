import { inter } from '@/app/font';
import Image from 'next/image'

const Hero = () => {
    return (
        <div className="flex justify-between px-2 mt-20 md:px-32 lg:px-48">
            <div className='flex flex-col justify-center'>
                <div className='flex flex-col gap-6'>
                    <h1 className={`${inter.className} text-xs text-[#28A745]`}><span className='bg-[#28A7451F] py-2 px-5 rounded-4xl'>#1 EV Charging Station Locator App</span></h1>
                    <h1 className='text-4xl text[#1E1E1E] max-w-[716px]'>Smarter EV Charging, Right at <br />Your Fingertips.</h1>
                    <p className={`${inter.className} text-[#7D7D7D] max-w-[716px]`}>Locate charging stations in real time, pay securely, and track your eco impact, all<br /> in one app designed for Seashells.</p>
                    <div className='flex gap-4'>
                        <button className={`${inter.className} bg-linear-to-r from-[#0187D0] via-[#28A745] to-[#FCDB05] text-white px-6 py-2 rounded-full font-semibold`}>
                            Download Now
                        </button>
                        <button className={`${inter.className} border-2 border-[#1E1E1E]  text-[#1E1E1E] px-6 py-2 rounded-full font-semibold`}>
                            Explore Features
                        </button>
                    </div>

                </div>
                <div className='flex items-center gap-5 mt-8'>
                    <div className='flex items-center gap-1'>
                        <Image 
                            src={'/home/user.png'}
                            alt='users'
                            width={100}
                            height={80}
                        />
                        <div>
                            <h1 className='text-xl'>20,547+</h1>
                            <p className={`${inter.className} text-[#A3A3A3]`}>Active Users</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl'>4.9/5</h1>
                            <div className='flex'>
                                <Image 
                            src={'/home/rating.png'}
                            alt='users'
                            width={100}
                            height={100}
                        />
                        <p className={`${inter.className} text-[#A3A3A3]`}>Rating</p>
                            </div>
                    </div>

                </div>


            </div>
            <div>
                <Image
                    src={"/home/hero.png"}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                />
            </div>

        </div>
    );
};

export default Hero;