import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode; // Can be an SVG or an Image component
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-1 gap-3 rounded-lg border border-[#e6e0db] bg-white p-4 items-center">
      <div className="text-[#181411]">
        {icon}
      </div>
      <h2 className="text-[#181411] text-base font-bold leading-tight">{title}</h2>
    </div>
  );
};

export default FeatureCard;