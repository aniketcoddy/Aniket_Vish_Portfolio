'use client'
import React , {useState} from 'react'
import Menu from './Menu'
import Image from 'next/image'

function Navbar() {

    const [menu , setMenu] = useState(true)

    const handleOnClick=()=>{
        setMenu((prevState) => !prevState)
    }

    return (
        <div>
            <div className='flex justify-between items-center m-0 border-b-2 z-10 border-[#00ADB5] p-5'>
                <div>
                    <h1 className='ml-5 text-[#EEEEEE] text-2xl font-[Poppins] font-semibold'>My Portfolio</h1>
                </div>

                <div className=' flex lg:hidden'>
                    <div className='flex items-center'>
                        <ul className='flex'>
                            <li className='ml-16 text-[#EEEEEE] text-lg hover:text-xl w-11 font-[Poppins]'>Home</li>
                            <li className='ml-16 text-[#EEEEEE] text-lg hover:text-xl font-[Poppins] w-11'>About</li>
                            <li className='ml-16 text-[#EEEEEE] text-lg hover:text-xl font-[Poppins] w-11'>Projects</li>
                            <li className='ml-16 text-[#EEEEEE] text-lg hover:text-xl font-[Poppins] w-11'>Contact</li>
                        </ul>
                    </div>
                    <div className='flex'>
                        <a className='ml-16 text-[#EEEEEE] text-lg font-[Poppins] border-2 p-2 rounded-2xl bg-[#00ADB5]'>Lets Talk</a>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <Image src="/menu-line.png" alt='My Photo' width="100" height="100" className='w-7' onClick={handleOnClick} />
                </div>
            </div>
            <div>
                <Menu menu={menu}/>
            </div>
        </div>
    )
}

export default Navbar
