'use client'
import Image from "next/image"
import Link from "next/link"

export default function Home() {

  return (
    <div className="flex lg:flex-col lg:mt-16 mt-24  justify-between lg:justify-center lg:items-center" id="home">
      <div className=" mt-56 4xl:mt-44 2xl:mt-40 lg:mt-20 ml-64 4xl:ml-40 2xl:ml-44 xl:ml-32 lg:ml-0 lg:justify-center lg:items-center">
        <div className="lg:flex-col lg:flex lg:justify-center lg:items-center">
          <h1 className="text-[#EEEEEE] font-[Poppins] font-bold text-9xl 3xl:text-7xl 4xl:text-8xl 5xl:text-8xl lg:text-5xl 2xl:text-5xl xl:text-6xl xs:text-4xl 4xl:pb-4 2xl:pb-5 pb-10">
            Hello, I&lsquo;m Aniket,
          </h1>
          <h2 className="text-[#00ADB5] text-7xl 3xl:text-4xl 4xl:text-6xl 5xl:text-6xl  2xl:text-3xl  xs:text-2xl xl:text-4xl lg:text-4xl font-[Poppins] font-bold 4xl:pb-4 2xl:pb-3 pb-8">
            FrontEnd Developer
          </h2>
        </div>
        <div className=" hidden lg:flex lg:justify-center lg:items-center">
          <Image
            alt="me"
            width={320}
            height={100}
            src="/me.png"
            className="rounded-xl lg:w-64 xs:w-52 m-4" style={{ boxShadow: "rgb(0, 173, 181) 0px 1px 17px 8px" }}
          />
        </div>
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-center" >
          <div>
            <p className="text-[white] font-[Poppins] text-2xl 3xl:text-base 4xl:text-xl 2xl:text-base xl:text-sm xl:w-96 xs:w-72 4xl:w-[614px] lg:mt-3 lg:text-base 2xl:w-[560px] w-[755px] xs:text-sm font-normal 2xl:pb-4 4xl:pb-3 pb-6">
              A driven and self-taught web developer looking to use my organisational skills and abilities at your business so that I can advance professionally,
            </p>
          </div>
          <div className="flex mt-2">
            <a
              href="/"
              className="flex items-center 2xl:p-2 2xl:px-4 4xl:p-2 4xl:px-4 5xl:p-2 5xl:px-6 px-10 p-4 rounded-3xl 2xl:mr-2 mr-7 bg-[#00ADB5] hover:bg-[#3b7477]"
            >
              <h1 className="text-[#FFFFFF] font-[Poppins] font-normal 2xl:text-base 4xl:text-2xl text-3xl drop-shadow-md">
                Hire Me
              </h1>
            </a>

            <Link href="/Aniket_Vishnoi_CV.pdf" target="_blank"
                className="flex items-center 2xl:px-4 2xl:p-2 5xl:p-2 5xl:px-6 4xl:px-4 px-10 p-4 rounded-3xl mr-2 bg-[#393E46] hover:bg-[#101b2f]">
              
                <h1 className="text-[#FFFFFF] font-[Poppins] font-normal 2xl:text-base 4xl:text-2xl text-3xl drop-shadow-md">
                  Download CV
                </h1>
                <Image
                  alt="download icon"
                  width={24}
                  height={100}
                  src="/download.png"
                  className="ml-1 w-10 drop-shadow-md"
                />
             
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <Image
          alt="me"
          width={550}
          height={100}
          src="/me.png"
          className="rounded-xl 2xl:mr-60 4xl:mr-48 mr-60 xl:mr-16 2xl:w-64 3xl:w-80 4xl:w-[426px] 5xl:w-[474px]  mt-24 xl:w-72" style={{ boxShadow: "rgb(0, 173, 181) 0px 1px 17px 8px" }}
        />
      </div>
    </div>
  )
}
