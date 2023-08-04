'use client'
import React ,{useState} from 'react'
import Image from 'next/image';
function Social() {

    const [onhover, setOnHover] = useState(false)


    const handleMouseEnter = () => {
        setOnHover(true)
    }
    const handleMouseLeave = () => {
        setOnHover(false)
    }


    return (
        <div className=" flex flex-col items-center justify-center" id='social' >
            <div className="flex flex-row gap-5 " id="Social">
                <a href="https://wa.me/7302918014" target="_blank"><Image alt="Image" width={100} height={100}  src={onhover ? "/1753788.png" : "/wassapp.png"} className="w-11 h-11" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} /></a>
                <a href="https://www.linkedin.com/in/aniket-vishnoi-a19940221" target="_blank"><Image alt="Image" width={100} height={100}  src={onhover ? "/LinkedIn_icon_circle.svg.png" : "/linkid.png"} className="w-11 h-11" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} /></a>
                <a href="https://github.com/aniketcoddy" target="_blank"><Image alt="Image" width={100} height={100}  src={onhover ? "/GitHub-logo.png" : "/git11.png"} className={onhover ? "w-11 h-11" : "w-11 h-11"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} /></a>
                <a href="" target="_blank"><Image  alt="Image" width={100} height={100} src={onhover ? "/Symbol-Twitter.png" : "/twitter.png"} className="w-11 h-11" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} /></a>
            </div>
            <div className="flex flex-row justify-center sm:text-[10px] text-sm">
                <h1 className="font-[Poppins]  text-[Black] font-normal">© Copyright 2023 - Developed by Aniket Vishnoi. All right reserved.</h1>
            </div>
        </div>
    )
}

export default Social
