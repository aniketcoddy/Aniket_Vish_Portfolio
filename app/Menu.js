import React from 'react'
import { Link} from 'react-scroll'

function Menu({menu}) {

    return (
        <div > 
           
            <div>
                <ul className={`flex flex-col fixed mr-96 z-10 ${menu ? '-top-96': 'top-[74px]'} transition-all duration-[1s] shadow-2xl shadow-[#00ADB5] bg-[#1b2129] w-full`}>
                <Link to="home" spy={true} smooth={true} offset={-40} duration={700}><div className='hover:bg-[#00ADB5] hover:cursor-pointer' ><li className='text-[#EEEEEE]  hover:text-[#1b2128] text-lg p-3 ml-7 w-11 font-[Poppins]'>Home</li></div></Link>
                <Link to="about" spy={true} smooth={true} offset={-40} duration={700}><div className='hover:bg-[#00ADB5] hover:cursor-pointer' ><li className='text-[#EEEEEE]  hover:text-[#1b2128] text-lg p-3 ml-7 font-[Poppins] w-11'>About</li></div></Link>
                <Link to="projects" spy={true} smooth={true} offset={-40} duration={700}><div className='hover:bg-[#00ADB5] hover:cursor-pointer' ><li className='text-[#EEEEEE]  hover:text-[#1b2128] text-lg p-3 ml-7 font-[Poppins] w-11'>Projects</li></div></Link>
                <Link to="contact" spy={true} smooth={true} offset={-200} duration={700}><div className='hover:bg-[#00ADB5] hover:cursor-pointer' ><li className='text-[#EEEEEE]  hover:text-[#1b2128] text-lg p-3 ml-7 font-[Poppins] w-11'>Contact</li></div></Link> 
                </ul>
            </div>
        </div>
    )
}

export default Menu
