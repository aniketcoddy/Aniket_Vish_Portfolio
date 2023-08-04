'use client'
import { useRef } from "react";
import React from 'react'

function Contact() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();



        emailjs.sendForm('service_anucc9h', 'template_78l2ilq', form.current, 'h0rUXr_2VL7LxGlBW')
            .then((result) => {
                console.log(result.text);
                console.log(
                    "successfully send"
                )
            }, (error) => {
                console.log(error.text);
                console.log(
                    "not send"
                )
            });
    };

    return (
        <div>
            <div className="flex h-fit ml-24">
                <div className="flex flex-col j">
                    <div className="flex flex-row gap-4" id="contacts" >
                        <h1 className="font-[Poppins]  text-6xl text-[#EEEEEE] font-bold">
                            Contact
                        </h1>
                        <h1 className="font-[Poppins]  text-6xl  text-[#00ADB5] font-bold">
                            Me
                        </h1>
                    </div>
                    <div className="flex">
                        <div className="flex">
                            <img src="point.png"
                                className=""
                            />
                            <img src="step.png"
                                className=""
                            />
                        </div>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className=" flex flex-col">
                                <div className="flex flex-col  gap-[20px] ">
                                    <div className="gap-[10px] flex flex-col">
                                        <h1 className="font-[Poppins] font-normal text-[15px]  text-[#EEEEEE]">
                                            Your name
                                        </h1>
                                        <input
                                            required
                                            type="text"
                                            name="to_name"
                                            placeholder="Name"
                                            className="flex flex-row items-start pl-4 gap-[10px] text-[#EEEEEE] w-[288px] h-[59px] bg-[rgba(57,62,70,0.5)] rounded-[16px] self-stretch"
                                        />
                                    </div>
                                    <div className="gap-[10px] flex flex-col">
                                        <h1 className="w-[101px] h-[27px] font-[Poppins] font-normal text-[15px] text-[#EEEEEE]">
                                            Your email
                                        </h1>
                                        <input
                                            required
                                            type="email"
                                            name="from_email"
                                            placeholder="Email"
                                            className="flex flex-row items-start pl-4 gap-[10px] text-[#EEEEEE] w-[288px] h-[59px] bg-[rgba(57,62,70,0.5)] rounded-[16px] self-stretch"
                                        />
                                    </div>
                                </div>

                                <div className="gap-[10px] flex flex-col">
                                    <h1 className="w-[131px] h-[27px] font-[Poppins] font-normal text-[15px] leading-[27px] text-[#EEEEEE]">
                                        Your Message
                                    </h1>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Message"
                                        name="message"
                                        className="flex flex-row items-start  pt-[5px] pr-[256px] pb-[222px] pl-[30px]  gap-[10px] text-[#EEEEEE] w-[286px]  h-[227px] bg-[rgba(57,62,70,0.5)] rounded-[16px] self-stretch"
                                    />
                                </div>

                                <div>
                                    <input type="submit" value="send" className=" w-[107px] text-[#EEEEEE] font-medium font-[Poppins] shadow-[0px 4px 4px] drop-shadow-[rgba(0 0 0 0.5)] text-[18px] h-[42px] flex flex-col items-center pt-[8px] bg-[#00ADB5] rounded-[24px] pr-[31px]  gap-[10px] hover:bg-[#3b7477] cursor-pointer "
                                    />
                                    <img
                                        src="send.png"
                                        className="mt-[-33px] ml-[63px]"
                                    />

                                    <div className="flex flex-col  gap-[20px]  mt-[34px] ">
                                        <div className="flex gap-[10px]">
                                            <img src="telephone.png" />
                                            <a className="text-[#EEEEEE]">(91)-7302918014</a>
                                        </div>
                                        <div className="flex gap-[10px]">
                                            <img src="mail.png" />
                                            <a href="/" className="text-[#EEEEEE]">
                                                vishnoianiket903@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
