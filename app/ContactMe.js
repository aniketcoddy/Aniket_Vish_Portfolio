'use client'
import Image from 'next/image'
import React,{useRef} from 'react'

function ContactMe() {


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
        <div className='mb-20'>
            <div className='flex gap-2 lg:justify-center lg:ml-0 ml-20'>
                <h1 className='text-6xl font-semibold text-[#EEEEEE] lg:text-5xl xs:text-4xl  font-[Roboto]'>Contact</h1>
                <h1 className='text-6xl font-semibold text-[#00ADB5] lg:text-5xl xs:text-4xl  font-[Roboto]'>Me</h1>
            </div>

            <div className='flex  justify-center gap-60'>
                <div className='flex mt-28 gap-4 lg:hidden '>
                    <Image src="/point.png"
                        alt="arrow"
                        width={100}
                        height={100}
                        className='transform rotate-180 h-32 w-32 mt-32'
                    />

                    <Image src="/step.png"
                        alt="growth"
                        width={300}
                        height={0}
                        className='h-96 lg:h-72 '
                    />
                </div>

                <div className='flex flex-col -mt-14 lg:mt-20 xxs:mt-14 lg:mr-0 lg:justify-center  mr-14' id='contact'>
                    <div className=' flex flex-col gap-10'>
                        <Image src="/keyboard.png"
                            alt="growth"
                            width={100}
                            height={100}
                            className='lg:hidden'
                        />

                        <form ref={form} onSubmit={sendEmail}>
                            <div className='flex sm:flex-col'>
                                <div className='mr-4'>
                                    <h1 className='text-base font-[Poppins] font-semibold text-[#EEEEEE] pb-2'>Your name</h1>
                                    <input required
                                        type="text"
                                        name="to_name"
                                        placeholder="Name"
                                        className="text-[#EEEEEE] sm:w-96 xs:w-80   p-3 bg-[rgba(57,62,70,0.5)] rounded-xl self-stretch" />
                                </div>
                                <div>
                                    <h1 className='text-base font-[Poppins] font-semibold text-[#EEEEEE] pb-2'>Your Email</h1>
                                    <input required
                                        type="text"
                                        name="to_name"
                                        placeholder="Email"
                                        className="text-[#EEEEEE]  sm:w-96 xs:w-80  p-3 bg-[rgba(57,62,70,0.5)] rounded-xl self-stretch" />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h1 className='text-base font-[Poppins] font-semibold text-[#EEEEEE] pb-2'>Message</h1>
                                <textarea
                                    required
                                    placeholder="Write down here..."
                                    name="message"
                                    className="block w-[430px] h-56 sm:w-96 xs:w-80  text-[#EEEEEE] bg-[rgba(57,62,70,0.5)] rounded-xl resize-none p-4"
                                ></textarea>
                            </div>
                        </form>
                    </div>
                    <div>
                        <div className='mt-3'>
                            <div className='flex' >
                                <input type="submit" value="send" className="flex text-[#EEEEEE] font-medium font-[Poppins] justify-start items-start shadow-md shadow-black  text-lg p-2 pr-10 bg-[#00ADB5] rounded-2xl hover:bg-[#3b7477] cursor-pointer "
                                />
                                <Image src="/send.png" alt='send' width="100" height="100" className='w-8 h-8 ml-14 mt-2 absolute' />
                            </div>
                            <div className="flex flex-col  gap-3  mt-5 ">
                                <div className="flex gap-2">
                                    <Image src="/telephone.png" alt='telephone' width="20" height="20" />
                                    <a className="text-[#EEEEEE]">(91)-7302918014</a>
                                </div>
                                <div className="flex gap-2">
                                    <Image src="/mail.png" alt='telephone' width="20" height="20" />
                                    <a href="/" className="text-[#EEEEEE]">
                                        vishnoianiket903@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactMe
