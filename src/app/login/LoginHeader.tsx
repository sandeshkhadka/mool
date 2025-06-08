import Link from "next/link"
const LoginHeader:React.FC=()=>{
    return(
         <header id="home" className="flex fixed w-full mb-8 items-center justify-between max-h-16 whitespace-nowrap border-b-2 bg-[#f3f3f3] border-black px-10 py-3">
      <Link href="/">
      <div  className="flex cursor-pointer items-center gap-4 text-[#181411]">
        <div className="size-4">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-[#181411] text-lg font-bold leading-tight tracking-[-0.015em]">
          Mool
        </h2>
      </div>
      </Link>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9 ">
          <Link
            href="/#shop"
            className="text-[#181411] text-sm font-medium hover:text-[#eb7f13] leading-normal"
          >
            Shop
          </Link>
          <Link
            href="/#experience"
            className="text-[#181411] text-sm hover:text-[#eb7f13] font-medium leading-normal"
          >
            Experiences
          </Link>
          <Link
            href="/#stories"
            className="text-[#181411] text-sm hover:text-[#eb7f13] font-medium leading-normal"
          >
            Stories
          </Link>
          <Link
            href="/#impact"
            className="text-[#181411] text-sm hover:text-[#eb7f13] font-medium leading-normal"
          >
            Impact
          </Link>
        </div>
       
         

          <Link href="/signup" className="min-w-[84px] max-w-[480px]">
            <button
              className="flex w-full transform-gpu will-change-transform hover:scale-105 transition-transform duration-300 
                 items-center justify-center overflow-hidden rounded-xl h-10 px-4 
                 bg-[#eb7f13] hover:bg-[#ad5700] text-white text-sm font-bold tracking-[0.015em]"
            >
              <span className="truncate">Sign up</span>
            </button>
          </Link>
        </div>
     
      </header>
    )
}
export default LoginHeader;