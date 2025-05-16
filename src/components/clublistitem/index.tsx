import React from "react";

export interface ClubListItemProps {
  id: number;
  rank: number;
  clubName: string;
  fans: string;
  imageUrl: string;
}

const ClubListItem: React.FC<ClubListItemProps> = ({
  rank,
  clubName,
  fans,
  imageUrl,
}) => {
  return (
    <div className="flex md:gap-4 gap-2 md:p-4 p-2 items-start w-full ">
      <div className="flex flex-col gap-2 flex-nowrap">
        <p className="text-green-400 font-bold text-lg text-right">
          {rank.toString().padStart(2, "0")}
        </p>
        <p className="text-gray-300 text-smtext-white text-sm md:text-lg max-w-md">
          {fans} Fans
        </p>
      </div>
      <img
        src={imageUrl}
        alt={clubName}
        className="h-12 w-12 md:w-24 md:h-24 lg:w-24 lg:h-24 object-contain"
      />

      <h3
        className={`${
          rank === 1 ? "text-[#FA0459]" : "text-white"
        } uppercase text-[clamp(30px,5vw,60px)] leading-[clamp(25px,3vw,50px)] 
     max-w-sm font-[1000] md:font-extrabold w-[60%] md:w-full break-words md:break-keep lg:break-keep overflow-hidden`}
      >
        {clubName}
      </h3>
    </div>
  );
};

export default ClubListItem;
