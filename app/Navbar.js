'use client'
import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import Image from 'next/image'
import { Link} from 'react-scroll'

function Navbar() {

    const [menu, setMenu] = useState(true)
    const [scroll, setScroll] = useState(true)

    const handleOnClick = () => {
        setMenu((prevState) => !prevState)
    }

    const changeBackground = () => {
        if (window.scrollY > 100) {
          setScroll(false);
        }  else {
            setScroll(true);
          }
      };

      useEffect(()=>{
        window.addEventListener("scroll", changeBackground);

        return () => {
            window.removeEventListener('scroll', changeBackground);
          };
      })
    

    return (
        <div>
            <div className={`flex justify-between w-full bg-[#222831] shadow-xl ${scroll ?"":"shadow-[#00ADB5]"} items-center left-0 top-0 m-0 border-b-2 z-20 fixed border-[#00ADB5] p-5`}>
                <div>
                    <h1 className='2xl:ml-5 ml-10 text-[#EEEEEE] 2xl:text-2xl text-4xl font-[Poppins] font-semibold'>My Portfolio</h1>
                </div>

                <div className=' flex lg:hidden'>
                    <div className='flex items-center'>
                        <ul className='flex'>
                            <li className='2xl:ml-16 5xl:ml-36 4xl:ml-16 ml-48 text-[#EEEEEE] 2xl:text-lg 5xl:text-3xl 4xl:text-xl text-4xl 2xl:hover:text-xl 4xl:hover:text-lg  hover:text-[#00ADB5] w-11 font-[Poppins] hover:cursor-pointer'><Link to="home" spy={true} smooth={true} offset={-70} duration={700}>Home</Link></li>
                            <li className='2xl:ml-16 5xl:ml-36 4xl:ml-16 ml-48 text-[#EEEEEE] 2xl:text-lg 5xl:text-3xl 4xl:text-xl text-4xl 2xl:hover:text-xl 4xl:hover:text-lg  hover:text-[#00ADB5] font-[Poppins] w-11 hover:cursor-pointer'><Link to="about" spy={true} smooth={true} offset={-100} duration={700}>About</Link></li>
                            <li className='2xl:ml-16 5xl:ml-36 4xl:ml-16 ml-48 text-[#EEEEEE] 2xl:text-lg 5xl:text-3xl 4xl:text-xl text-4xl 2xl:hover:text-xl 4xl:hover:text-lg  hover:text-[#00ADB5] font-[Poppins] w-11 hover:cursor-pointer'><Link to="projects" spy={true} smooth={true} offset={-70} duration={700}>Projects</Link></li>
                            <li className='2xl:ml-16 5xl:ml-36 4xl:ml-16 ml-48 text-[#EEEEEE] 2xl:text-lg 5xl:text-3xl 4xl:text-xl text-4xl 2xl:hover:text-xl 4xl:hover:text-lg  hover:text-[#00ADB5] font-[Poppins] w-11 hover:cursor-pointer'><Link to="contact" spy={true} smooth={true} offset={-150} duration={700}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className='flex hover:cursor-pointer'>
                        <Link  to="social" spy={true} smooth={true} offset={-10} duration={700} className='2xl:ml-16 5xl:ml-36 ml-48 4xl:ml-16 text-[#EEEEEE] 2xl:text-lg 5xl:text-3xl text-4xl 4xl:text-xl font-[Poppins] border-2 p-2 rounded-2xl bg-[#00ADB5]'>Lets Talk</Link>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <Image src="/menu-line.png" alt='My Photo' width="100" height="100" className='w-7' onClick={handleOnClick} />
                </div>
            </div>
            <div  className='hidden lg:block' >
                <Menu menu={menu} scroll={scroll} />
            </div>
        </div>
    )
}

export default Navbar
