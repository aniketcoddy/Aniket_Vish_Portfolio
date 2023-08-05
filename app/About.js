import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <div className='2xl:mt-36 3xl:mt-48 mt-56 xxs:mt-16 sm:mt-28 flex xl:flex-col xl:items-center justify-between' id='about'>
            <div className='flex flex-col gap-2 xl:items-center 2xl:ml-32 3xl:ml-28  ml-44 xl:ml-0'>
                <div className='flex gap-4 mt-16'>
                    <h1 className='2xl:text-6xl 5xl:text-7xl 3xl:text-6xl text-8xl sm:text-4xl font-semibold text-[#EEEEEE]  font-[Roboto]'>About</h1>
                    <h1 className='2xl:text-6xl 5xl:text-7xl 3xl:text-6xl text-8xl sm:text-4xl  font-semibold text-[#00ADB5]  font-[Roboto]'>me</h1>
                    <Image src="/lightbulb.png" alt='bulb' width={90} height={100} className='5xl:w-20 3xl:w-14 sm:w-9' />
                </div>
                <div className=' flex flex-col xl:items-center gap-6 sm:gap-4'>
                    <p className="text-[white] font-[Poppins] text-xl 2xl:text-sm 3xl:text-base 3xl:w-[550px] xs:text-[10px] sm:text-xs xs:w-80 sm:w-96 2xl:w-[491px] 4xl:w-[640px] w-[707px] font-normal">Hello, my name is Aniket Vishnoi, and I am a front-end developer who will shortly transition to full-stack development.I recently earned a btech in computer science and plan to continue honing my development abilities through 2022.
                        To date, I have developed my skills in working with HTML, CSS, javascript, some open source libraries like Reactjs and Redux, some frameworks like Next.js, Tailwind CSS, and bootstrap, some development tools like vs code, and some design software like Figma.
                        with the hope of learning much more in the coming future.
                    </p>
                    <div className='hidden xl:block mt-7 sm:mt-4 sm:pb-9'>
                        <Image src="/doodle.png" alt='bulb' width={350} height={100} className='sm:w-72' />
                        <Image src="/Group.png" alt='bulb' width={250} height={100} className=' sm:w-56 sm:-mt-44 sm:ml-10 -mt-72 ml-20 absolute' />
                    </div>
                    <div className=' flex flex-col xl:items-center 5xl:gap-7 gap-9'>
                        <div className='flex gap-2'>
                            <h1 className='2xl:text-3xl 3xl:text-3xl text-5xl font-semibold text-[#EEEEEE]  font-[Roboto]'>My</h1>
                            <h1 className='2xl:text-3xl 3xl:text-3xl text-5xl font-semibold text-[#00ADB5]  font-[Roboto]'>Skills</h1>
                        </div>
                        <div className="flex flex-row flex-wrap xs:justify-center gap-2">
                            <Image alt="icons" width={80} height={100} src="/html.png" className='5xl:w-16 4xl:w-14 3xl:w-12  sm:w-8' />
                            <Image alt="icons" width={80} height={100} src="/JS.png" className='5xl:w-16  4xl:w-14 3xl:w-12 sm:w-8' />
                            <Image alt="icons" width={80} height={100} src="/typescript.png" className='5xl:w-16 4xl:w-14 3xl:w-12  sm:w-8' />
                            <Image alt="icons" width={80} height={100} src="/React.png" className='5xl:w-16 4xl:w-14 3xl:w-12  sm:w-8' />
                            <Image alt="icons" width={80} height={100} src="/redux.png" className='5xl:w-16  4xl:w-14 3xl:w-12 sm:w-8' />
                            <Image alt="icons" width={80} height={100} src="/nextjs.png" className='5xl:w-16 4xl:w-14 3xl:w-12  sm:w-8' />
                            <Image alt="icons" width={80} height={100} src="/Tailwind.png" className='5xl:w-16 4xl:w-14 3xl:w-12  sm:w-8' />
                            <Image alt="icons" width={80} height={100} src="/Git.png" className='5xl:w-16 4xl:w-14 3xl:w-12  sm:w-8' />
                            <Image alt="icons" width={80} height={100} src="/Visual.png" className='5xl:w-16  4xl:w-14 3xl:w-12 sm:w-8' />
                            <Image alt="icons" width={80} height={100} src="/ChatGpt.png" className='5xl:w-16  4xl:w-14 3xl:w-12 sm:w-8' />
                        </div>
                    </div>
                </div>
            </div>    

            <div className=' xl:hidden 2xl:mr-16 mr-24 mt-14'>
                <Image src="/doodle.png" alt='bulb' width={850} height={100} className='5xl:w-[725px] 3xl:w-[500px]' />
                <Image src="/Group.png" alt='bulb' width={700} height={100} className='2xl:-mt-72 5xl:w-[573px] 3xl:w-96 3xl:-mt-72 4xl:w-[500px] 4xl:-mt-[370px] 5xl:-mt-[434px] -mt-[534px] ml-20 absolute' />
            </div>

        </div>
    )
}
