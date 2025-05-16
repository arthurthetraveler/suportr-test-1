import React from "react";

interface ProgressBarProps {
  progress: number; // Progress percentage (0 - 100)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full h-[50px] rounded-md bg-gradient-to-r from-[#03FE87] to-[#8C01FA] p-[2px]">
      <div
        className="h-full bg-[#FA0459] rounded-md transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
