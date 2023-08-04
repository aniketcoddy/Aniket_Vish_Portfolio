import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <div className='mt-36 xxs:mt-16 sm:mt-28 flex xl:flex-col xl:items-center gap-24' id='about'>
            <div className='flex flex-col gap-2 xl:items-center ml-32 xl:ml-0'>
                <div className='flex gap-4 mt-16'>
                    <h1 className='text-6xl sm:text-4xl font-semibold text-[#EEEEEE]  font-[Roboto]'>About</h1>
                    <h1 className='text-6xl sm:text-4xl  font-semibold text-[#00ADB5]  font-[Roboto]'>me</h1>
                    <Image src="/lightbulb.png" alt='bulb' width={60} height={100} className='sm:w-9' />
                </div>
                <div className=' flex flex-col xl:items-center gap-6 sm:gap-4'>
                    <p className="text-[white] font-[Poppins] text-sm xs:text-[10px] sm:text-xs xs:w-80 sm:w-96 w-[491px] font-normal">Hello, my name is Aniket Vishnoi, and I'm a front-end developer who will shortly transition to full-stack development.I recently earned a btech in computer science and plan to continue honing my development abilities through 2022.
                        To date, I have developed my skills in working with HTML, CSS, javascript, some open source libraries like Reactjs and Redux, some frameworks like Next.js, Tailwind CSS, and bootstrap, some development tools like vs code, and some design software like Figma.
                        with the hope of learning much more in the coming future.
                    </p>
                    <div className='hidden xl:block mt-7 sm:mt-4 sm:pb-9'>
                <Image src="/doodle.png" alt='bulb' width={350} height={100} className='sm:w-72' />
                <Image src="/Group.png" alt='bulb' width={250} height={100} className=' sm:w-56 sm:-mt-44 sm:ml-10 -mt-72 ml-20 absolute' />
            </div>
                    <div className=' flex flex-col xl:items-center gap-5'>
                        <div className='flex gap-2'>
                            <h1 className='text-3xl font-semibold text-[#EEEEEE]  font-[Roboto]'>My</h1>
                            <h1 className='text-3xl font-semibold text-[#00ADB5]  font-[Roboto]'>Skills</h1>
                        </div>
                        <div className="flex flex-row flex-wrap xs:justify-center gap-2">
                            <Image alt="icons" width={50} height={100} src="/html.png"  className='sm:w-8'/>
                            <Image alt="icons" width={50} height={100} src="/JS.png" className='sm:w-8'/>
                            <Image alt="icons" width={50} height={100} src="/typescript.png" className='sm:w-8' />
                            <Image alt="icons" width={50} height={100} src="/React.png" className='sm:w-8'/>
                            <Image alt="icons" width={50} height={100} src="/redux.png" className='sm:w-8'/>
                            <Image alt="icons" width={50} height={100} src="/nextjs.png" className='sm:w-8'/>
                            <Image alt="icons" width={50} height={100} src="/Tailwind.png" className='sm:w-8'/>
                            <Image alt="icons" width={50} height={100} src="/Git.png" className='sm:w-8'/>
                            <Image alt="icons" width={50} height={100} src="/Visual.png" className='sm:w-8'/>
                            <Image alt="icons" width={50} height={100} src="/ChatGpt.png" className='sm:w-8'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' xl:hidden mr-16 mt-14'>
                <Image src="/doodle.png" alt='bulb' width={450} height={100} />
                <Image src="/Group.png" alt='bulb' width={350} height={100} className='-mt-72 ml-20 absolute'/>
            </div>

        </div>
    )
}
