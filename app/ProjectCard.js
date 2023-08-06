import Image from 'next/image'
import React from 'react'

function ProjectCard({ image, git, launch, name, topic, description }) {
  return (
    <div className='flex m-1'>
      <div className=' 3xl:p-2 p-6 xs:p-1 bg-[rgba(57,62,70,0.5)] backdrop-blur-sm '>
        <Image
          alt='project'
          width={320}
          height={100}
          src={image} className='xs:w-24 3xl:w-36 4xl:w-72 xxs:w-20' />
        <div className='flex mt-2'>
          <a href={git} className='flex justify-center items-center'><h1 className='3xl:text-sm text-3xl  xs:text-xs xxs:text-[9px] xs:m-1  xs:mt-3 font-[Roboto] text-[#000000] border-[#00ADB5] bg-[#00ADB5] m-2 border-2  px-1 rounded-lg font-semibold'>Git</h1></a>
          <a href={launch} target="_blank" className='flex justify-center items-center'><h1 className='3xl:text-sm text-3xl  xs:text-xs xxs:text-[9px] xs:m-1  xs:mt-3 font-[Roboto] text-[#000000] border-[#00ADB5] bg-[#00ADB5] m-2 border-2  px-1 rounded-lg font-semibold'>Launch</h1></a>
        </div>
      </div>

      <div className=' backdrop-blur-sm bg-[rgba(57,62,70,0.5)] p-2 xxs:p-1'>
        <h1 className='3xl:text-xl text-4xl xs:text-lg xxs:text-base font-[Roboto] font-medium text-[#EEEEEE]'>{name}</h1>
        <h1 className='lg:text-[10px] xxs:text-[9px] 3xl:text-xs text-2xl  py-1 font-[Roboto] font-medium text-[#EEEEEE]'>{topic}</h1>
        <h1 className='lg:text-[10px] xxs:text-[9px] 3xl:text-xs  text-xl  3xl:w-56  w-96 font-[Roboto] font-medium text-[#EEEEEE]'>{description}</h1>
      </div>
    </div>
  )
}
export default ProjectCard
