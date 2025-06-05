import React from 'react';
import Link from 'next/link'; // Use Link for internal navigation

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4f2f0] px-10 py-3">
      <div className="flex items-center gap-4 text-[#181411]">
        <div className="size-4">
          {/* Logo SVG */}
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-[#181411] text-lg font-bold leading-tight tracking-[-0.015em]">Mato</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link href="#" className="text-[#181411] text-sm font-medium leading-normal">
            Shop
          </Link>
          <Link href="#" className="text-[#181411] text-sm font-medium leading-normal">
            Experiences
          </Link>
          <Link href="#" className="text-[#181411] text-sm font-medium leading-normal">
            Stories
          </Link>
          <Link href="#" className="text-[#181411] text-sm font-medium leading-normal">
            Impact
          </Link>
        </div>
        <div className="flex gap-2">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#eb7f13] text-[#181411] text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Sign up</span>
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f4f2f0] text-[#181411] text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Log in</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;