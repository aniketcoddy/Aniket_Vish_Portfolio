'use client'

export default function Home() {

  return (
    <div  className="flex lg:flex-col justify-between lg:justify-center lg:items-center" >
      <div className="mt-40 lg:mt-20 ml-44 xl:ml-32 lg:ml-0 lg:justify-center lg:items-center">
        <div className="lg:flex-col lg:flex lg:justify-center lg:items-center">
          <h1 class="text-[#EEEEEE] font-[Poppins] font-bold lg:text-5xl text-7xl xl:text-6xl xs:text-4xl  pb-5">
            Hello, I'm Aniket,
          </h1>
          <h2 class="text-[#00ADB5] text-5xl  xs:text-2xl xl:text-4xl lg:text-4xl font-[Poppins] font-bold pb-3">
            FrontEnd Developer
          </h2>
        </div>
        <div className=" hidden lg:flex lg:justify-center lg:items-center">
        <img
          alt=""
          src="me.png.jpg"
          class="rounded-xl lg:w-64 xs:w-52 m-4 w-80" style={{boxShadow:"rgb(0, 173, 181) 0px 1px 17px 8px"}}
        />
      </div>
      <div className="lg:flex lg:flex-col lg:justify-center lg:items-center" >
        <div>
          <p class="text-[white] font-[Poppins]  text-base xl:text-sm xl:w-96 xs:w-72 lg:mt-3 lg:text-base w-[560px] xs:text-sm font-normal pb-4">
          A driven and self-taught web developer looking to use my organisational skills and abilities at your business so that I can advance professionally,
          </p>
        </div>
        <div className="flex mt-2">
          <a
            href="/"
            class="flex items-center p-2 px-4 rounded-3xl mr-2 bg-[#00ADB5] hover:bg-[#3b7477]"
          >
            <h1 class="text-[#FFFFFF] font-[Poppins] font-normal text-base drop-shadow-md">
              Hire Me
            </h1>
          </a>
          <a
          href="Aniket_Vishnoi_CV.jpg"
          download
            class="flex items-center px-4 p-2 rounded-3xl mr-2 bg-[#393E46] hover:bg-[#101b2f]"
          >
            <h1 class="text-[#FFFFFF] font-[Poppins] font-normal text-base drop-shadow-md">
              Download CV
            </h1>
            <img
              alt=""
              src="download (1).png"
              class="ml-1 w-6 drop-shadow-md"
            />
          </a>
        </div>
        </div>
      </div>

      <div className="lg:hidden">
        <img
          alt=""
          src="me.png.jpg"
          class="rounded-xl mr-44 xl:mr-16 mt-24 xl:w-72 w-80 " style={{boxShadow:"rgb(0, 173, 181) 0px 1px 17px 8px"}}
        />
      </div>
    </div>
  )
}
