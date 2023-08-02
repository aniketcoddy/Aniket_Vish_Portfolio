import React from 'react'

function Menu({menu}) {
    return (
        <div >
            
            <div>
            
                <ul className={`flex flex-col absolute mr-96 ${menu ? '-top-96': 'top-[74px]'} transition-all duration-[1s] shadow-2xl shadow-[#00ADB5] bg-[#1b2129]  w-full`}>
                   <a className='hover:bg-[#00ADB5] hover:cursor-pointer'><li className='text-[#EEEEEE]  hover:text-[#1b2128] text-lg p-3 ml-7 w-11 font-[Poppins]'>Home</li></a>
                   <a className='hover:bg-[#00ADB5] hover:cursor-pointer'><li className='text-[#EEEEEE]  hover:text-[#1b2128] text-lg p-3 ml-7 font-[Poppins] w-11'>About</li></a>
                   <a className='hover:bg-[#00ADB5] hover:cursor-pointer'><li className='text-[#EEEEEE]  hover:text-[#1b2128] text-lg p-3 ml-7 font-[Poppins] w-11'>Projects</li></a>
                   <a className='hover:bg-[#00ADB5] hover:cursor-pointer'><li className='text-[#EEEEEE]  hover:text-[#1b2128] text-lg p-3 ml-7 font-[Poppins] w-11'>Contact</li></a>
                </ul>

            </div>
            
        </div>
    )
}

export default Menu
