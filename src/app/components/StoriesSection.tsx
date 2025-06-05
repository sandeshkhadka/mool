import React from 'react';

const StoriesSection: React.FC = () => {
  return (
    <>
      <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Stories from the Soil</h2>
      <div className="p-4">
        <div className="flex items-stretch justify-between gap-4 rounded-xl">
          <div className="flex flex-[2_2_0px] flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-[#181411] text-base font-bold leading-tight">Empowering Women Through Craft</p>
              <p className="text-[#897561] text-sm font-normal leading-normal">Meet the artisans behind our handmade crafts and learn about their journey.</p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#f4f2f0] text-[#181411] text-sm font-medium leading-normal w-fit">
              <span className="truncate">Read More</span>
            </button>
          </div>
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
            style={{ backgroundImage: `url("/images/story-bg.jpg")` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default StoriesSection;