'use client'
import React from 'react'

function Navbar() {


    return (
        <div className='flex justify-between m-0 border-b-2 border-[#00ADB5] p-5'>
            <div className='flex justify-center items-center'>
                <ul className='flex justify-center items-center'>
                    <li className='ml-5 text-[#EEEEEE] text-2xl font-[Poppins] font-semibold'>My Portfolio</li>
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
    )
}

export default Navbar
