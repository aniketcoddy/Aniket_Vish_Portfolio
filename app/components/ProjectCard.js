import React from 'react'

function ProjectCard({image,git,launch,name,topic,description}) {
  return (
    <div className='flex m-1'>
      <div className=' p-2 xs:p-1 bg-[rgba(57,62,70,0.5)] backdrop-blur-sm '>
        <img src={image} className='w-36 xs:w-24 xxs:w-20'/>
        <div className='flex'>
       <a href={git}  className='flex justify-center items-center'><h1 className='text-sm xs:text-xs xxs:text-[9px] xs:m-1  xs:mt-3 font-[Roboto] text-[#000000] border-[#00ADB5] bg-[#00ADB5] m-2 border-2  px-1 rounded-lg font-semibold'>Git</h1></a>
       <a href={launch} target="_blank" className='flex justify-center items-center'><h1 className='text-sm xs:text-xs xxs:text-[9px] xs:m-1  xs:mt-3 font-[Roboto] text-[#000000] border-[#00ADB5] bg-[#00ADB5] m-2 border-2  px-1 rounded-lg font-semibold'>Launch</h1></a>
        </div>
      </div>

      <div className=' backdrop-blur-sm bg-[rgba(57,62,70,0.5)] p-2 xxs:p-1'>
         <h1 className='text-xl xs:text-lg xxs:text-base font-[Roboto] font-medium text-[#EEEEEE]'>{name}</h1>
         <h1 className='lg:text-[10px] xxs:text-[9px] text-xs  py-1 font-[Roboto] font-medium text-[#EEEEEE]'>{topic}</h1>
         <h1 className='lg:text-[10px] xxs:text-[9px] text-xs  w-56 font-[Roboto] font-medium text-[#EEEEEE]'>{description}</h1>
      </div>
    </div>
  )
}
export default ProjectCard
