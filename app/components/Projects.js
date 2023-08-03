'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard';

function Projects() {

    const [all, setAll] = useState(false)
    const [react, setReact] = useState(true)
    const [next, setNext] = useState(true)
    const [js, setJs] = useState(true)

    const myStyle = {
        backgroundImage: "url(Projects.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };
    const ref = useRef()
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();

    const handleAll = () => {
        setAll(false)
        setReact(true)
        setNext(true)
        setJs(true)

        ref.current.style.backgroundColor = 'black';
        ref1.current.style.backgroundColor = 'transparent';
        ref2.current.style.backgroundColor = 'transparent';
        ref3.current.style.backgroundColor = 'transparent';

    }
    const handleReact = () => {
        setAll(true)
        setReact(false)
        setNext(true)
        setJs(true)

        ref1.current.style.backgroundColor = 'black';
        ref.current.style.backgroundColor = 'transparent';
        ref2.current.style.backgroundColor = 'transparent';
        ref3.current.style.backgroundColor = 'transparent';
    }
    const handleNext = () => {
        setAll(true)
        setReact(true)
        setNext(false)
        setJs(true)

        ref2.current.style.backgroundColor = 'black';
        ref1.current.style.backgroundColor = 'transparent';
        ref.current.style.backgroundColor = 'transparent';
        ref3.current.style.backgroundColor = 'transparent';
    }
    const handleJs = () => {
        setAll(true)
        setReact(true)
        setNext(true)
        setJs(false)

        ref3.current.style.backgroundColor = 'black';
        ref1.current.style.backgroundColor = 'transparent';
        ref2.current.style.backgroundColor = 'transparent';
        ref.current.style.backgroundColor = 'transparent';
    }


    return (
        <div className=" flex flex-col h-fit mt-36 lg:mt-24 mb-24 pb-24" style={myStyle}>
            <div>
                <div className='flex gap-4 m-20 sm:m-16 lg:justify-center'>
                    <h1 className='text-6xl font-semibold text-[#EEEEEE] sm:text-4xl font-[Roboto]'>My</h1>
                    <h1 className='text-6xl font-semibold text-[#00ADB5] sm:text-4xl font-[Roboto]'>Projects</h1>
                </div>
                <div >
                    <ul className='flex gap-10 sm:gap-3 ml-24 lg:justify-center lg:ml-0'>
                        <li className='text-base font-medium px-5 p-1 shadow-inner shadow-[#00ADB5] font-[Roboto] text-[#EEEEEE] sm:text-xs xxs:text-[9px]
                         backdrop-blur-lg rounded-2xl hover:cursor-pointer bg-black' ref={ref} onClick={handleAll} >All</li>
                        <li className='text-base font-medium px-5 p-1 shadow-inner shadow-[#00ADB5] font-[Roboto] text-[#EEEEEE] sm:text-xs xxs:text-[9px] bg-[#393E46] backdrop-blur-lg rounded-2xl hover:cursor-pointer' ref={ref1} onClick={handleReact} >React Js</li>
                        <li className='text-base font-medium px-5 p-1 shadow-inner shadow-[#00ADB5] font-[Roboto] text-[#EEEEEE] sm:text-xs xxs:text-[9px] bg-[#393E46] backdrop-blur-lg rounded-2xl hover:cursor-pointer' ref={ref2} onClick={handleNext} >Next Js</li>
                        <li className='text-base font-medium px-5 p-1 shadow-inner shadow-[#00ADB5] font-[Roboto] text-[#EEEEEE] sm:text-xs xxs:text-[9px] bg-[#393E46] backdrop-blur-lg rounded-2xl hover:cursor-pointer' ref={ref3} onClick={handleJs} >Javascript</li>
                    </ul>
                </div>

                <div>
                    <div>
                        {all ? "" : (
                            <div className='flex flex-wrap mt-9 sm:ml-0 sm:justify-center ml-40'>
                                <ProjectCard image="/portfolio.png" git="" launch="" name="My Portfolio" topic="Website" description="You are now browsing my portfolio page, which contains all of my personal data.I utilised the Next js javascript framework, the Tailwind CSS framework, and basic html in my project." />
                                <ProjectCard image="/Hotel.png" git="https://github.com/aniketcoddy/Hotel_Booking.git" launch="https://anikethotelbooking.netlify.app/" name="Hotel Booking" topic="Booking" description="You may use this hotel website to add the room of your choice to the shopping cart and complete the transaction.I utilised the Reactjs ,Redux javascript libraries , the Tailwind CSS framework, and basic html in my project. " />
                                <ProjectCard image="/Weather.png" git="https://github.com/aniketcoddy/Weather_App_React.git" launch="https://weatherinfoappreact.netlify.app/" name="Weather Forcast" topic="Weather App" description="This weather app provides accurate global weather information, including temperature, humidity, wind speed, and other factors.I utilised the Reactjs javascript libraries , the Tailwind CSS framework, and open source API." />
                                <ProjectCard image="/countdown.png" git="https://github.com/aniketcoddy/countdownTimer.git" launch="https://aniketcountdowntimer.netlify.app/" name="Countdown Page" topic="Reverse Timer" description="This page simply serves as a landing page with a timer counting down until the course discount expires." />
                                <ProjectCard image="/NextTOdo.png" git="https://github.com/aniketcoddy/Aniket_Vsihnoi_TODO_NextJs.git" launch="https://aniket-todo-nextjs.netlify.app/" name="Task Organizer" topic="ToDo list" description="This advance task manager allows you to record your daily to-dos and delete or update them as soon as they are completed.I utilised the Next js javascript framework, the Tailwind CSS framework, and Local Storage" />
                                <ProjectCard image="/login.png" git="https://github.com/aniketcoddy/-Firebase_authentication.git" launch="https://aniketfirebaseauthen.netlify.app/" name="Authentication" topic="Firebase Authentication" description="We may register and log in using Google Firebase as our backend database in this login form.I utilised the ReactJs javascript library, the Tailwind CSS framework,and Google firebase" />
                                <ProjectCard image="/Login (2).png" git="https://github.com/aniketcoddy/Form-Validation-.git" launch="https://form-validationsite.netlify.app/" name="Login/Signup" topic="Authentication" description="This is a simple registration form that ensures accurate entering of information after being run using regular expression.Tech used is ES6 Javascript, vanila Css and HTML5" />
                                <ProjectCard image="/calc.png" git="https://github.com/aniketcoddy/Calculator_React.git" launch="https://calculatorbyaniket.netlify.app/" name="Calculator" topic="simple calculator" description="Simple calculator build just to sharpen my logical skills. Tech used React Js and tailwind css" />
                                <ProjectCard image="/Password.png" git="https://github.com/aniketcoddy/Password-Generator.git" launch="https://automatic-password-generator.netlify.app/" name="Password Generator" topic="generator" description="A generally used password generator that we used while working in login forms to generate a strong passwords" />
                            </div>
                        )}

                        {react ? "" : (
                            <div className='flex flex-wrap mt-9 sm:ml-0 sm:justify-center ml-40'>
                                <ProjectCard image="/Hotel.png" git="https://github.com/aniketcoddy/Hotel_Booking.git" launch="https://anikethotelbooking.netlify.app/" name="Hotel Booking" topic="Booking" description="You may use this hotel website to add the room of your choice to the shopping cart and complete the transaction.I utilised the Reactjs ,Redux javascript libraries , the Tailwind CSS framework, and basic html in my project. " />
                                <ProjectCard image="/Weather.png" git="https://github.com/aniketcoddy/Weather_App_React.git" launch="https://weatherinfoappreact.netlify.app/" name="Weather Forcast" topic="Weather App" description="This weather app provides accurate global weather information, including temperature, humidity, wind speed, and other factors.I utilised the Reactjs javascript libraries , the Tailwind CSS framework, and open source API." />
                                <ProjectCard image="/countdown.png" git="https://github.com/aniketcoddy/countdownTimer.git" launch="https://aniketcountdowntimer.netlify.app/" name="Countdown Page" topic="Reverse Timer" description="This page simply serves as a landing page with a timer counting down until the course discount expires." />
                                <ProjectCard image="/login.png" git="https://github.com/aniketcoddy/-Firebase_authentication.git" launch="https://aniketfirebaseauthen.netlify.app/" name="Authentication" topic="Firebase Authentication" description="We may register and log in using Google Firebase as our backend database in this login form.I utilised the ReactJs javascript library, the Tailwind CSS framework,and Google firebase" />
                            </div>
                        )}

                        {next ? "" : (
                            <div className='flex flex-wrap mt-9 sm:ml-0 sm:justify-center ml-40'>
                                <ProjectCard image="/portfolio.png" git="" launch="" name="My Portfolio" topic="Website" description="You are now browsing my portfolio page, which contains all of my personal data.I utilised the Next js javascript framework, the Tailwind CSS framework, and basic html in my project." />
                                <ProjectCard image="/NextTOdo.png" git="https://github.com/aniketcoddy/Aniket_Vsihnoi_TODO_NextJs.git" launch="https://aniket-todo-nextjs.netlify.app/" name="Task Organizer" topic="ToDo list" description="This advance task manager allows you to record your daily to-dos and delete or update them as soon as they are completed.I utilised the Next js javascript framework, the Tailwind CSS framework, and Local Storage" />
                            </div>
                        )}

                        {js ? "" : (
                            <div className='flex flex-wrap mt-9 sm:ml-0 sm:justify-center ml-40'>
                                <ProjectCard image="/login (2).png" git="https://github.com/aniketcoddy/Form-Validation-.git" launch="https://form-validationsite.netlify.app/" name="Login/Signup" topic="Authentication" description="This is a simple registration form that ensures accurate entering of information after being run using regular expression.Tech used is ES6 Javascript, vanila Css and HTML5" />
                                <ProjectCard image="/calc.png" git="https://github.com/aniketcoddy/Calculator_React.git" launch="https://calculatorbyaniket.netlify.app/" name="Calculator" topic="simple calculator" description="Simple calculator build just to sharpen my logical skills. Tech used React Js and tailwind css" />
                                <ProjectCard image="/Password.png" git="https://github.com/aniketcoddy/Password-Generator.git" launch="https://automatic-password-generator.netlify.app/" name="Password Generator" topic="generator" description="A generally used password generator that we used while working in login forms to generate a strong passwords" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
