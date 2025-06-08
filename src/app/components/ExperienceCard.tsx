import React from 'react';

interface ExperienceCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="flex h-full border-black border-1 flex-1 flex-col gap-4 rounded-lg min-w-60">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      ></div>
      <div>
        <p className="text-[#181411] text-base font-medium leading-normal">{title}</p>
        <p className="text-[#897561] text-sm font-normal leading-normal">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;