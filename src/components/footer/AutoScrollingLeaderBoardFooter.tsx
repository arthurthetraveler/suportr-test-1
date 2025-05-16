import React, { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import Logo from "../../assets/images/logo.png";

interface ClubListItemProps {
  id: number;
  clubName: string;
  fans: string;
  imageUrl: string;
  rank: number;
}

const leaderBoard: ClubListItemProps[] = [
  {
    id: 1,
    clubName: "Manchester United",
    fans: "1.2M",
    imageUrl:
      "https://res.cloudinary.com/dxnoztssb/image/upload/v1739196042/suppotr-league/Manchester_U_1_savcxw.png",
    rank: 1,
  },
  {
    id: 2,
    clubName: "Arsenal",
    fans: "1.2M",
    imageUrl:
      "https://res.cloudinary.com/dxnoztssb/image/upload/v1739196034/suppotr-league/Manchester_U_1_1_qu72nt.png",
    rank: 2,
  },
  {
    id: 3,
    clubName: "Wolverhampton Wanderers",
    fans: "1.2M",
    imageUrl:
      "https://res.cloudinary.com/dxnoztssb/image/upload/v1739196028/suppotr-league/Manchester_U_1_2_tbcnak.png",
    rank: 3,
  },
  {
    id: 4,
    clubName: "Tottenham Hotspur",
    fans: "1.2M",
    imageUrl:
      "https://res.cloudinary.com/dxnoztssb/image/upload/v1739196015/suppotr-league/Manchester_U_1_3_qsvrlf.png",
    rank: 4,
  },
  {
    id: 5,
    clubName: "Brighton and Hove Albion",
    fans: "1.2M",
    imageUrl:
      "https://res.cloudinary.com/dxnoztssb/image/upload/v1739196012/suppotr-league/Manchester_U_1_4_hhtszp.png",
    rank: 5,
  },
  
];

const AutoScrollingLeaderboard: React.FC = () => {
  return (
    <div className="bg-[#000000] py-2 overflow-hidden w-lvw">
      <Marquee>
        <div
          className="flex whitespace-nowrap gap-8 animate-scroll"
          style={{ width: "max-content" }}
        >
          {leaderBoard.map((club) => (
            <div key={club.id} className="flex items-center gap-2 text-white">
              <span className="text-sm text-[#000449]">
                {club.rank.toString().padStart(2, "0")}
              </span>
              <img
                src={club.imageUrl}
                alt={club.clubName}
                className="h-8 w-8 object-contain"
              />
              <span className="text-lg font-bold">
                {club.clubName.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default AutoScrollingLeaderboard;
