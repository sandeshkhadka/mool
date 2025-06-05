import React from 'react';
import ExperienceCard from './ExperienceCard';

const ExperienceMarketplaceSection: React.FC = () => {
  return (
    <>
      <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Experience Marketplace</h2>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          <ExperienceCard
            imageUrl="/images/experience-1.jpg"
            title="Himalayan Trekking Adventure"
            description="Explore the breathtaking landscapes of the Himalayas."
          />
          <ExperienceCard
            imageUrl="/images/experience-2.jpg"
            title="Authentic Nepali Cooking Class"
            description="Learn to cook traditional Nepali dishes with local chefs."
          />
          <ExperienceCard
            imageUrl="/images/experience-3.jpg"
            title="Traditional Pottery Workshop"
            description="Create your own pottery with skilled artisans."
          />
          <ExperienceCard
            imageUrl="/images/experience-4.jpg"
            title="Serene Meditation Retreat"
            description="Find inner peace with a guided meditation retreat."
          />
        </div>
      </div>
    </>
  );
};

export default ExperienceMarketplaceSection;