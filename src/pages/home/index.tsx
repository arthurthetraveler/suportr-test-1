import React, { useEffect, useState, useMemo } from "react";
import HeroVid from "../../assets/videos/heroBG.mp4";
import Button from "../../components/button";
import { Colors } from "../../components/Colors";
import RaisedImg from "../../assets/images/raised.png";
import TargetImg from "../../assets/images/target.png";
import ProgressBar from "../../components/ProgressBar";
import DarkBgImg from "../../assets/images/darkBg.png";
import ClubListItem, { ClubListItemProps } from "../../components/clublistitem";
import AutoScrollingLeaderboard from "../../components/clublistitem/AutoScrollingLeaderBoard";
import CurrencyInput from "../../components/input/CurrencyInput";
import { formatNumber } from "../../utils";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router";
import CountdownTimer from "../../components/countdown/bodytimer";
import '../home/index.css';
import { useNavigate } from "react-router";
import CheckOut from "../../components/button/checkout";
import LoyaltyModal from "../../components/modal/loyaltypopup";
import PowerPackOne from "../../components/button/powerpackone";
import PowerPackTwo from "../../components/button/powerpacktwo";
import PowerPackThree from "../../components/button/powerpackthree";
import PowerPackFour from "../../components/button/powerpackfour";
import PasswordGate from "./passwordat";

type FAQ = {
  id: number;
  category: string;
  question: string;
  answer: string | string[];
  isOpen: boolean;
};
type HIW = {
  id: number;
  question: string;
  answer: string | string[];
  isOpen: boolean;
};
const initialFaqs: FAQ[] = [
  {
    id: 1,
    category: "Frequently Asked Questions (FAQ)",
    question: "What is Suportr League?",
    answer:
      "Suportr League is a gamified sports fan engagement platform that combines play-to-earn (P2E) gaming, interactive community features, and blockchain technology. It allows fans to compete, earn rewards, and support their favorite teams while playing games.",
    isOpen: true,
  },
  {
    id: 2,
    category: "Frequently Asked Questions (FAQ)",
    question: "How does Suportr League work?",
    answer:
      "Suportr League enables fans to participate in a variety of games where they can earn Suportr League Loyalty Points (SLP). These points can be used for rewards, competitive rankings, and in-game enhancements.",
    isOpen: false,
  },
  {
    id: 3,
    category: "Frequently Asked Questions (FAQ)",
    question: "Who is Suportr League for?",
    answer:
      "The platform is designed for sports fans, particularly Premier League football supporters, who enjoy gaming, competition, and community-driven experiences.",
    isOpen: false,
  },
  {
    id: 4,
    category: "Frequently Asked Questions (FAQ)",
    question: "When will Suportr League launch?",
    answer:
      "The first version of Suportr League is scheduled for release in Q4 2025, coinciding with the start of the 2025/26 Premier League season.",
    isOpen: false,
  },
  {
    id: 5,
    category: "Presale and Tokenomics",
    question: "What is the purpose of the Suportr League presale?",
    answer:
      "The presale allows early supporters to purchase Suportr Coins at a discounted rate before the public launch. It helps fund platform development, marketing, security, and expansion.",
    isOpen: false,
  },
  {
    id: 6,
    category: "Presale and Tokenomics",
    question: "What is Suportr Coin (SC)?",
    answer:
      "Suportr Coin is the in-platform currency that players can buy and use for in-game benefits. Suportr Loyalty Points (SLP) are earned through participation and can be redeemed for rewards.",
    isOpen: false,
  },
  {
    id: 7,
    category: "Presale and Tokenomics",
    question: "How can I join the presale?",
    answer:
      "You can join the presale by purchasing Suportr Coins through the official Suportr League landing page. You will need to connect a crypto wallet (e.g., MetaMask, WalletConnect) or use the 'Buy Direct' option for fiat transactions.",
    isOpen: false,
  },
  {
    id: 8,
    category: "Presale and Tokenomics",
    question: "What are the benefits of joining the presale?",
    answer: [
      "Exclusive Pricing Advantage – Buy Suportr Coins at the lowest price before the public launch.",
      "Early Access Perks – Gain access to exclusive platform features before other users.",
      "Higher Staking Benefits – Early adopters receive better staking terms in the Vault system.",
      "Limited Token Supply – Only 0.6% (3 million tokens) are allocated for presale.",
      "Exclusive Rewards – Special in-game collectibles and boosts for presale participants.",
    ],
    isOpen: false,
  },
  {
    id: 9,
    category: "Presale and Tokenomics",
    question: "What happens after I purchase Suportr Coins?",
    answer:
      "Your Suportr Coins will be stored in your connected wallet or a platform-managed wallet. Once the platform launches, you can use them to participate in games and earn additional rewards.",
    isOpen: false,
  },
  {
    id: 10,
    category: "Gaming and Community Features",
    question: "What types of games will be available on Suportr League?",
    answer:
      "Suportr League offers a mix of hyper-casual games, hybrid open-world P2E experiences, and interactive team-based competitions where players can earn rewards and improve their team’s standing.",
    isOpen: false,
  },
  {
    id: 11,
    category: "Gaming and Community Features",
    question: "How do I earn Suportr League Loyalty Points (SLP)?",
    answer: [
      "Playing games – Earn SLP by winning or ranking high in competitions.",
      "Community participation – Engage with discussions, contribute to forums, and interact with team members.",
      "Staking Suportr Coins – Store your coins in the Vault, where they generate additional rewards.",
    ],
    isOpen: false,
  },
  {
    id: 12,
    category: "Gaming and Community Features",
    question: "Can I redeem SLP for cash or other rewards?",
    answer:
      "Yes, SLP can be redeemed for real-world rewards, collectibles, and cash. However, using SLP affects your team’s ranking, so balancing spending and saving is key.",
    isOpen: false,
  },
  {
    id: 13,
    category: "Security and Regulations",
    question: "Is Suportr League regulated?",
    answer:
      "Yes, Suportr League complies with FCA (UK) crypto regulations and is structured as a utility token, not an investment. The platform also follows AML (Anti-Money Laundering) and KYC (Know Your Customer) requirements for security.",
    isOpen: false,
  },
  {
    id: 14,
    category: "Security and Regulations",
    question: "How is Suportr League different from gambling?",
    answer:
      "Suportr League is not a gambling platform. Earnings are based on skill, engagement, and strategy, not chance. This aligns with UK gambling laws, ensuring a meritocratic system.",
    isOpen: false,
  },
  {
    id: 15,
    category: "Security and Regulations",
    question: "How secure is the platform?",
    answer:
      "The platform uses TON blockchain technology, AI-driven fraud detection, end-to-end encryption, and multi-factor authentication (MFA) to ensure the security of user data and transactions.",
    isOpen: false,
  },
  {
    id: 16,
    category: "Technology and Integration",
    question: "What blockchain does Suportr League use?",
    answer:
      "The platform is built on the TON (Telegram Open Network) blockchain, chosen for its scalability, transaction speed, and Telegram integration.",
    isOpen: false,
  },
  {
    id: 17,
    category: "Technology and Integration",
    question: "How does Telegram integrate with Suportr League?",
    answer:
      "Telegram bots allow users to check balances, redeem rewards, transfer SLP, and engage with the community. A TON wallet enables easy storage and transactions within the Telegram ecosystem.",
    isOpen: false,
  },
  {
    id: 18,
    category: "Getting Started",
    question: "How do I sign up for Suportr League?",
    answer:
      "You can sign up by registering on the official website, creating a wallet, and choosing a Premier League team to support.",
    isOpen: false,
  },
  {
    id: 19,
    category: "Getting Started",
    question: "What do I need to participate in the presale?",
    answer:
      "You need a crypto wallet (MetaMask, WalletConnect) or fiat payment method, an email, and a mobile number.",
    isOpen: false,
  },
  {
    id: 20,
    category: "Getting Started",
    question: "Is there a community where I can connect with other fans?",
    answer:
      "Yes! Suportr League has active communities on Discord, Telegram, Twitter, and Instagram, where fans can discuss strategies and earn exclusive perks.",
    isOpen: false,
  },
];
const initialHIW: HIW[] = [
  {
    id: 1,
    question: "Sign Up & Verify",
    answer:
      "To join the presale, start by creating an account and completing a quick verification process. This ensures a secure experience and confirms your eligibility for the exclusive presale perks. Once verified, you’ll be ready to dive into the next step and choose your package.",
    isOpen: true,
  },
  {
    id: 2,
    question: "Choose Your Package",
    answer:
      "Suportr League is an interactive gaming platform where fans can actively support and compete for their favorite teams, earning rewards along the way. It combines community-driven gameplay with the excitement of competitive leagues, giving you a chance to be part of a dedicated fanbase, participate in challenges, and earn exclusive rewards.",
    isOpen: false,
  },
  {
    id: 3,
    question: "Get Ready to Play",
    answer:
      "Suportr League is an interactive gaming platform where fans can actively support and compete for their favorite teams, earning rewards along the way. It combines community-driven gameplay with the excitement of competitive leagues, giving you a chance to be part of a dedicated fanbase, participate in challenges, and earn exclusive rewards.",
    isOpen: false,
  },
];

export default function Home() {
  const [paymentAmount, setPaymentAmount] = useState("");
  const [receivingAmount, setRecievingAmount] = useState("");
  const [faqs, setFaqs] = useState<FAQ[]>(initialFaqs);
  const [hIW, setHiw] = useState<HIW[]>(initialHIW);
  const location = useLocation();

  // Function to toggle `isOpen`
  const toggleFAQ = (id: number) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq) =>
        faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };
  const toggleHIW = (id: number) => {
    setHiw((prevHiw) =>
      prevHiw.map((faq) =>
        faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };
  const [fundAllocation, setFundAllocation] = useState([
    {
      id: 1,
      title: "Platform Development",
      allocation: 30,
      amount: "£750,000",
      subtitle:
        "Platform Development supports new features, scalability, and user experience enhancements.",
      bgColor: Colors.primaryBlack
    },
    {
      id: 2,
      title: "Marketing and Community Building",
      allocation: 25,
      amount: "£625,000",
      subtitle:
        "Funds allocated to marketing, PR campaigns, influencer partnerships, and community engagement efforts to drive adoption and growth.",
      bgColor: Colors.primaryBlack,
    },
    {
      id: 3,
      title: "Partnerships and Ecosystem Expansion",
      allocation: 15,
      amount: "£375,000",
      subtitle:
        "Supports partnerships with sports teams, gaming communities, and third-party vendors to integrate new features and offer exclusive perks.",
      bgColor: Colors.primaryBlack,
    },
    {
      id: 4,
      title: "Legal and Compliance",
      allocation: 10,
      amount: "£250,000",
      subtitle:
        "Ensures adherence to regulatory requirements, including KYC (Know Your Customer), AML (Anti-Money Laundering), and GDPR compliance.",
      bgColor: Colors.primaryBlack,
    },
    {
      id: 5,
      title: "Security Infrastructure",
      allocation: 10,
      amount: "£250,000",
      subtitle:
        "Funds allocated for end-to-end encryption, multi-factor authentication, fraud detection, and ongoing security audits.",
      bgColor: Colors.primaryBlack,
    },
    {
      id: 6,
      title: "Operational Costs",
      allocation: 5,
      amount: "£125,000",
      subtitle:
        "Covers day-to-day operational expenses, including server hosting, administrative fees, and platform maintenance.",
      bgColor: Colors.primaryBlack,
    },
    {
      id: 7,
      title: "Liquidity Provision and Token Stability",
      allocation: 5,
      amount: "£125,000",
      subtitle:
        "Supports liquidity pools and reserves to ensure stable token transactions and prevent market volatility.",
      bgColor: Colors.primaryBlack,
    },
  ]);
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
  const whyJoinUs = [
    {
      id: 1,
      title: "Exclusive Rewards",
      description:
        "As a presale member, you'll have access to special perks that are not available to the general public. These could include early access to new features, unique in-game items, or limited-edition collectibles that showcase your early involvement and commitment. It's our way of saying thank you for being an early supporter!",
    },
    {
      id: 2,
      title: "Play & Earn",
      description:
        "Get the chance to not only rep your team but also earn in-game rewards while doing so. By participating and supporting your team, you’ll unlock opportunities to earn rewards that enhance your experience and allow you to benefit from discounts and offers from us and our trusted partners.",
    },
    {
      id: 3,
      title: "Community-Driven",
      description:
        "Football is more than just a game —it’s a community of fans who share your passion. You’ll have the chance to engage with other fans in exclusive chats, participate in special events, and shape the direction of the community. We value your input and want you to feel a sense of belonging and ownership.",
    },
    {
      id: 4,
      title: "Early Growth Opportunity",
      description:
        "By joining early, you’ll be positioned to benefit from the community’s growth. As the fan base expands, there will be rewards and advantages available to those who were there from the start. Being an early member means you're first in line for potential VIP experiences and community bonuses.",
    },
  ];

   useEffect(() => {
     if (location.hash) {
       const element = document.querySelector(location.hash);
       if (element) {
         element.scrollIntoView({ behavior: "smooth" });
       }
     }
   }, [location]);

  
  
   const [showCheckoutBar, setShowCheckoutBar] = useState(false);
  const navigate = useNavigate();

  // Called when "Buy" button is clicked
  const handleBuyClick = () => {
    setShowCheckoutBar(true);
  };

  // Called when "Checkout" is clicked
  const handleCheckoutClick = () => {
    navigate('/createac');
  };

  
  const [quantities, setQuantities] = useState([0]);
  const increment = (index: number) => { setQuantities(prev => {
    const updated = [...prev];
    updated[index] += 1;
    return updated;
  });
};
  
const decrement = (index: number) => {
  setQuantities(prev => {
    const updated = [...prev];
    updated[index] = Math.max(0, updated[index] - 1);
    return updated;
  });
};

  // animate pulse effect
  const [animatePulse, setAnimatePulse] = React.useState({});

  

  return (
    <>
    
    <LoyaltyModal/>
      {/* First Section */}
      <div className="bg-black flex" />
      <div className="w-full overflow-hidden relative -mt-8 h-[400px] md:h-[650px]"> 
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className=" absolute top-0 left-0 w-full h-[400px] md:h-[650px] object-cover"
          src={HeroVid}
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
        {/* Dark Overlay at the Bottom */}
        {/* Content Over Video */}
        <main className="relative w-full h-full flex flex-col z-10 max-w-screen-xl mx-auto px-5 md:px-0 mt-10 md:mt-28">
          <div className=" flex flex-col justify-center gap-3 md:gap-3">
            <h1 className=" gradient-text-outline uppercase text-[clamp(40px,8vw,180px)] leading-[clamp(40px,1vw,180px)] md:leading-[clamp(100px,1vw,120px)] font-[1000] md:font-extrabold w-[60%] md:w-full">
              Redefine UK Football for Fans!
            </h1>
            <p className="text-white text-lg md:text-4xl max-w-lg font-[800]">
            Suportr League is a new gamified community built for loyal UK football fans by football fans.
            </p>
            
            <div className="inline-flex gap-2">
             <p className="
              text-base md:text-6xl min-w-fit font-[800]"> <span className="text-yellow-400">Official Launch: </span>
               <span className="text-white"> Premier League Football season start, August 2025.</span>
               </p>
             </div> 
          </div>
          <div className="h-[42px]" />

        </main>
      </div>

      {/* Second Section */}
      <div 
      style={{ backgroundImage: `url(https://res.cloudinary.com/divh5admv/image/upload/v1744496753/imagem_2025-04-12_232551432_qservc.png)` }}
      className=" flex flex-col justify-between px-6 md:px-20 w-full md:items-center z-10 bg-contain md:bg-cover md:pt-10 -mb-1">
                  <img src="https://res.cloudinary.com/divh5admv/image/upload/v1746553715/Star-dust-set-up_mkgp7r.gif" alt="Stardust" className="absolute insent-0 w-max h-max object cover opacity-40 mt-10" />

         <div className="mx-auto max-w-screen-xl flex-col-reverse md:flex-row items-center inline-flex justify-between w-full md:mt-24">
         <div className="mt-10 md:mt-40 flex flex-col justify-center gap-6 md:gap-1 flex-1 md:text-left ">
        <div className="sm:text-4xl md:text-5xl relative flex -center ml-24 -mt-40 gap-40 h-40 w-96">
         <h2 className="font-[900] text-white uppercase text-[clamp(40px,5vw,80px)] leading-[clamp(40px,4vw,60px)] max-w-lg -ml-1">
             <span>
             "WELCOME!"
              </span>
              <br></br>
              <span> 
                OUR CHIEF COMMERCIAL OFFICER
              </span>
            </h2>
            
            <img src="https://res.cloudinary.com/divh5admv/image/upload/v1744552983/imagem_2025-04-13_150301195_ot5ser.png" alt="Logo"/>
            </div>

            <div className="relative ml-24 mb-48 mt-20 flex gap-8">
        <img
          src="https://res.cloudinary.com/divh5admv/image/upload/v1744558258/imagem_2025-04-13_163055551_vq82ds.png" // 
          alt="Stephen Hobin"
          className="w-auto h-96 object-cover rounded-lg"
        />
           

      {/* Description and Quote */} 
      <div className="max-w-sm sm:max-w-md text-white text-left md:text-left font-[800] mt-14">
        <p className="text-3xl sm:text-lg mb-4">
          With commercial ties to the Premier football League, Stephen Hobin has lived football from the inside—he’s run the commercial game at Norwich City FC.
        </p>
        <p className="text-3xl sm:text-lg mb-4">
          Now he’s joined Suportr League to help flip the script: putting power back into fans’ hands, where it belongs.
        </p>
        <blockquote className="text-3xl sm:text-lg italic">
          “This isn’t about crypto hype. It’s about giving football fans real value.” – Stephen Hobin, CCO
        </blockquote>
      </div>
      </div> 
          </div>
          </div>
        
        </div>    
    
    
      {/* Third Section */}
      <div
        style={{ backgroundImage: `url(https://res.cloudinary.com/divh5admv/image/upload/v1744496406/imagem_2025-04-12_232004168_klx2ai.png)` }}
        className=" flex flex-col justify-between px-6 md:px-20 w-full md:items-center z-10 bg-contain md:bg-cover md:pt-5"
      >
                          <img src="https://res.cloudinary.com/divh5admv/image/upload/v1746553715/Star-dust-set-up_mkgp7r.gif" alt="Stardust" className="absolute insent-0 w-max h-max object cover opacity-40 mt-10" />

        
        <div className="mx-auto max-w-screen-xl flex flex-col-reverse md:flex-row items-center justify-between w-full md:mt-1">
          <div className="mt-10 md:mt-40 flex flex-col justify-center gap-6 md:gap-10 flex-1 md:text-left">
            <h2 className="font-[900] text-white uppercase text-[clamp(40px,5vw,80px)] leading-[clamp(35px,4vw,60px)] max-w-lg">
              REPRESENT YOUR CLUB + BATTLE RIVAL TEAM FANS 
            </h2>
            <p className="font-[900] text-white uppercase text-[clamp(50px,5vw,90px)] leading-[clamp(40px,4vw,80px)] max-w-lg">
              EARN SLP -
            </p>
            <p className="font-[800] uppercase bg-gradient-to-r from-green-500 to-purple-500 bg-clip-text text-transparent text-[clamp(40px,5vw,80px)] leading-[clamp(35px,4vw,60px)] max-w-lg">
              SUPORTR LOYALTY POINTS
              </p>
          </div>

          <div className="flex flex-col gap-10 mt-10">
            <div className="flex flex-col gap-5  items-start">
              <img
                className="w-[50%] md:w-[30%]"
                src={RaisedImg}
                alt="Amount raised"
              />
              <h2 className="font-[900] uppercase text-[clamp(40px,6vw,80px)] leading-[clamp(35px,5vw,78px)] w-full bg-gradient-to-r from-[#19FB9B] to-[#8C01FA] bg-clip-text text-transparent">
                £120.000
              </h2>
              <ProgressBar progress={10} />
            </div>

            <div className="flex flex-col md:items-start">
              <img
                className="w-[30%] md:w-[16%]"
                src={TargetImg}
                alt="Target amount"
              />
              <h2 className="font-[900] uppercase text-[clamp(40px,6vw,80px)] leading-[clamp(35px,5vw,75px)] w-full bg-gradient-to-r from-[#19FB9B] to-[#8C01FA] bg-clip-text text-transparent">
                £2.500.000
              </h2>
            </div>
          </div>
        </div>

        <div className="h-[200px] md:h-[250px] w-16" />
        {/* <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black via-transparent to-transparent" /> */}
      </div>

      {/* Fourth Section */}
      <div className="bg-black py-6 sm:py-10 flex flex-col items-center justify-center gap-6 px-4 sm:px-6 lg:px-8">
      <img src="https://res.cloudinary.com/divh5admv/image/upload/v1746553715/Star-dust-set-up_mkgp7r.gif" alt="Stardust" className="absolute insent-0 w-max h-max object cover opacity-40 mt-20" />
    
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-left leading-tight ml-10">
        REDEEM <span className="text-green-500">SLP</span> FOR OFFERS & DISCOUNTS FROM US AND TRUSTED PARTNERS FOR THE THINGS YOU LOVE + MORE:
      </h2>

      {/* Images */}
      
      <div className="flex flex-wrap justify-center items-center gap-14 sm:gap-16 md:gap-20 mt-6">
        
        <img
          src="https://res.cloudinary.com/divh5admv/image/upload/v1744564819/imagem_2025-04-13_182015414_cdxs8d.png" 
          alt="Beer"
          className="w-20 sm:w-24 md:w-28 h-auto"
        />
        <img
          src="https://res.cloudinary.com/divh5admv/image/upload/v1744564857/imagem_2025-04-13_182038759_iwd6pk.png" 
          alt="Pizza"
          className="w-32 sm:w-40 md:w-48 h-auto"
        />
        <img
          src="https://res.cloudinary.com/divh5admv/image/upload/v1744564878/imagem_2025-04-13_182102087_uow8m6.png"
          alt="Shoes"
          className="w-32 sm:w-40 md:w-48 h-auto"
        />
        <img
          src="https://res.cloudinary.com/divh5admv/image/upload/v1744564889/imagem_2025-04-13_182126709_ifvuwr.png"
          alt="Tickets"
          className="w-32 sm:w-40 md:w-48 h-auto"
        />
      </div>

      {/* Subheading */}
      <p className="text-5xl sm:text-5xl md:text-6xl font-bold text-white text-left leading-tight ml-10">
        DON’T LET RIVAL <span className="text-red-600">FC</span> FANS OUTSHINE YOU—GET AN <span className="bg-gradient-to-r from-[#19FB9B] to-[#8C01FA] bg-clip-text text-transparent">SLP POWER PACK</span> IN OUR PRE-LAUNCH SALE AND PROVE YOUR LOYALTY.
      </p>
    </div>
    

    <div className="bg-black text-white p-8">
      {/* HOW IT WORKS Section */}
      <section className="mb-12">
        {/* Title with Neon Border */}
        <div className="relative p-0.5 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg mx-auto w-[400px]">
          <div className="bg-black p-2 rounded-lg">
            <h2
              className="text-5xl font-bold text-center uppercase"
            
            >
              How It Works
            </h2>
          </div>
        </div>

        {/* Flow Diagram */}
        <div className="flex flex-row md:flex-row items-center gap-12 mt-8 ">
        <img src="https://res.cloudinary.com/divh5admv/image/upload/v1746553715/Star-dust-set-up_mkgp7r.gif" alt="Stardust" className="absolute insent-0 w-max h-max object cover opacity-40 mt-10" />

          {/* Stage 1: You Buy Suportr Coin */}
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/divh5admv/image/upload/v1744578292/imagem_2025-04-13_220432064_kcreof.png"
              alt="Suportr Coin"
              className="w-[150px] h-[150px]"
            />
            
           <div className="relative p-0.5 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg mx-auto w-[280px] mt-2">
          <div className="bg-black p-2 rounded-lg">
            <h2
              className="text-2xl font-bold text-center uppercase"
            
            >
              YOU BUY SUPORTR COIN
            </h2>
          </div>
        </div>
        
          </div>
           {/* Stage 2: Unlock Power Packs */}
         
          <div className="flex flex-col items-center">
          <img
              src="https://res.cloudinary.com/divh5admv/image/upload/v1744578303/imagem_2025-04-13_220455896_tah6uq.png"
              alt="Power Packs" 
              className="w-[150px] h-[150px]"
            />
           <div className="relative p-0.5 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg mx-auto w-[260px] mt-2">
          <div className="bg-black p-2 rounded-lg">
            <h2
              className="text-2xl font-bold text-center uppercase"
            
            >
              UNLOCK POWER PACKS
            </h2>
          </div>
        </div>
          </div>
          

          {/* Stage 3: Launch August 2025 */}
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/divh5admv/image/upload/v1744578317/imagem_2025-04-13_220508719_udastc.png"
              alt="Smartphone"
              className="w-[150px] h-[150px]"
            />
           <div className="relative p-0.5 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg mx-auto w-[260px] mt-2">
          <div className="bg-black p-2 rounded-lg">
            <h2
              className="text-2xl font-bold text-center uppercase"
            
            >
              LAUNCH AUGUST 2025
            </h2>
          </div>
        </div>
          </div>
         

          {/* Stage 4: Discounts & Offers */}
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/divh5admv/image/upload/v1744578326/imagem_2025-04-13_220524171_wk6lnc.png"
              alt="Redeem Items"
              className="w-[150px] h-[150px]"
            />
           <div className="relative p-0.5 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg mx-auto w-[260px] mt-2">
          <div className="bg-black p-2 rounded-lg">
            <h2
              className="text-2xl font-bold text-center uppercase"
            
            >
              Discounts & Offers
            </h2>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* WHAT IS SUPORTR COIN (SC)? Section */}
      <section>
        {/* Title with Neon Border */}
        <div className="relative p-0.5 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg mx-auto w-[630px]">
          <div className="bg-black p-2 rounded-lg">
            <h2
              className="text-5xl font-bold text-center uppercase bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text text-transparent"
         
            >
              What is Suportr Coin (SC)?
            </h2>
          </div>
        </div>
        </section>
        <img src="https://res.cloudinary.com/divh5admv/image/upload/v1746553715/Star-dust-set-up_mkgp7r.gif" alt="Stardust" className="absolute insent-0 w-max h-max object cover opacity-40 mt-10" />

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-[800] uppercase text-white text-left leading-tight mt-10 ml-10">
        Suportr coin is the official  community DIGITAL currency for use in the suportr league marketplace.
      </h2>
      <div className="relative p-0.5 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg mx-auto w-[630px] mt-12">
        
          <div className="bg-black p-2 rounded-lg">
            
            <h2
              className="text-5xl font-bold text-center uppercase bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text text-transparent"
         
            >
              £1 = 1 Suportr Coin (SC)
            </h2>
          </div>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-[800] uppercase text-white text-left leading-tight mt-10 ml-10">
        BUYING AND USING SUPORTR COIN GETS YOU HEFTY   DISCOUNTS OF UP TO 50% ON IN-GAME ENHANCEMENTS.
      </h2>
        </div>

        <div className="relative p-0.5 flex ml-14 w-[630px] mt-12">
          <div className="bg-black p-2  rounded-lg">
          <img src="https://res.cloudinary.com/divh5admv/image/upload/v1746553715/Star-dust-set-up_mkgp7r.gif" alt="Stardust" className="absolute insent-0 w-max h-max object cover opacity-40 mt-10" />

            <h2
              className="text-8xl font-[800] text-left md:text-left bg-gradient-to-r from-green-400 via-cyan-400 to-purple-700 bg-clip-text text-transparent"
         
            >
              SLP Rewards Explained
            </h2>
          </div>
        </div>

        <div className="relative p-0.5 bg-gradient-to-r  from-green-500 to-purple-500 rounded-lg mx-auto w-[1150px] mt-14">
          <div className="bg-black p-2 rounded-lg">
            <h2
              className="text-5xl text-white font-bold"
            >
              Suportr Loyalty Points (SLP) are earned by engaging in the community or performing in games.
              
              
              <p className="text-5x1 text-white font-bold mt-10 p-4"> 
                Average 2 SLP earned per community interaction
                </p>

                <p className="text-5x1 text-white font-bold mt-5 p-4">
                Average 5 SLP earned per in-game performance point
                </p>
            </h2>
          </div>
        </div>

        <div className="relative p-0.5 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg mx-auto w-[1150px] mt-14">
          <div className="bg-black p-2 rounded-lg">
          <img src="https://res.cloudinary.com/divh5admv/image/upload/v1746553715/Star-dust-set-up_mkgp7r.gif" alt="Stardust" className="absolute insent-0 w-max h-max object cover opacity-40 mt-10" />

            <h2
              className="text-5xl text-white font-bold"
            >
              ⚡Power Packs = Booster Multipliers
              
              
              <p className="text-5x1 text-white font-bold mt-10 p-4"> 
              Activate Power Packs to multiply your SLP earnings per  interaction or in-game point scored
                </p>

                <p className="text-5x1 text-white font-bold mt-5 p-4">
                Each tier offers a higher multiplier to supercharge your progress.
                </p>
            </h2>
          </div>
        </div>

        <div className="relative p-0.5 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg mx-auto w-[1150px] mt-14 mb-10">
          <div className="bg-black p-2 rounded-lg">
          <img src="https://res.cloudinary.com/divh5admv/image/upload/v1746553715/Star-dust-set-up_mkgp7r.gif" alt="Stardust" className="absolute insent-0 w-max h-max object cover opacity-40 mt-10" />

            <h2
              className="text-5xl text-white font-bold p-4"
            >
              🎁Redeem for Real Rewards
              
              
              <p className="text-5x1 text-white font-bold mt-10 p-4"> 
              SLP can be redeemed with Suportr League and our trusted partners for exclusive goods, services, and experiences.
                </p>

                <p className="text-5x1 text-white font-bold mt-5 p-4">
                The more you engage, the more you earn—and the more you unlock.
                </p>
            </h2>
          </div>
        </div>

{/*Join pre sale section*/}
    <div 
    id="presale"
      style={{ backgroundImage: `url(https://res.cloudinary.com/divh5admv/image/upload/v1744659243/imagem_2025-04-14_203358408_s3yjau.png)` }}
      className=" flex flex-col justify-between px-6 md:px-20 w-full md:items-center z-10 bg-contain md:bg-cover md:pt-10 top-0 left-0 h-full bg-black opacity-80">
      
       <img src="https://res.cloudinary.com/divh5admv/image/upload/v1746553715/Star-dust-set-up_mkgp7r.gif" alt="Stardust" className="absolute insent-0 w-max h-max object cover opacity-40 mt-10" />
        
        <div className="relative p-0.5 w-[630px] mx-auto mt-10">

          <div className="">
            
            <h2
              className="text-8xl font-[800] relative md:text-center bg-gradient-to-r from-green-400 via-cyan-400 to-purple-700 bg-clip-text text-transparent"
         
            >
              JOIN THE PRE LAUNCH SALE NOW
            </h2>
          </div>
          
         
        </div>
        <p className="sm:text-4xl md:text-5xl font-[800] uppercase w-[1050px] text-white text-left mt-6 mb-10">
          Stack <span className="bg-gradient-to-r from-purple-600 via-cyan-400 to-green-500 bg-clip-text text-transparent">Suportr Loyalty Points</span> and show your team—and every rival—what real loyalty looks like.
          </p>
      
        </div>
           
            {/* Power Packs */}
      
        <div className="flex flex-row md:flex-row items-center gap-3 mt-16 ml-16 ">
          {/* 1st Power Pack */}
          <CheckOut/>

         <PowerPackOne/>
               {/* 2nd Power Pack */}
            <PowerPackTwo/>
          {/* 3rd Power Pack */}
          <PowerPackThree/>
          {/* 4th Power Pack */}
          <PowerPackFour/>
          </div>


        <div className="relative p-0.5 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg mx-auto  w-[1150px] mt-14 mb-10">
          <div className="bg-black p-2 rounded-lg">
          <img src="https://res.cloudinary.com/divh5admv/image/upload/v1746553715/Star-dust-set-up_mkgp7r.gif" alt="Stardust" className="absolute insent-0 w-max h-max object cover opacity-40 mt-10" />

            <h2
              className="text-4xl text-white font-bold p-4"
            >
              💸You Save = (Retail SC Price - Presale Price)              
              
              <p className="text-4x1 text-white font-bold mt-10 p-4"> 
              🚀Potential Gain = SLP Earned (SC Purchase) × £ Value (1,000 SLP = £1 → 1 SLP = £0.001)
               </p>

               
            </h2>
          </div>
        </div>

        <div className="relative p-0.5 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg mx-auto w-[1150px] mt-14 mb-10">
          <div className="bg-black p-2 rounded-lg">
            
            <h2
              className="text-5xl font-extrabold uppercase bg-gradient-to-r from-purple-500 via-cyan-300 to-green-500 bg-clip-text text-transparent p-4"
            >
                Potential Gain = Suportr Loyalty Point rewards, equivalent in £ sterling value, redeemable for discounts and offers.    
            </h2>
          </div>
        </div>
    
    {/*What's Happen Next section*/}
 
    <div className="relative p-0.5 flex ml-14 w-[700px] mt-12">
          <div className="bg-black p-2  rounded-lg">
            <h2
              className="text-8xl font-[800] text-left md:text-left text-white p-4"
         
            >
             WHAT HAPPENS NEXT?
            </h2>
          </div>
        </div>

        <div className="relative p-0.5 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg mx-auto w-[1150px] mt-14 mb-10">
          <div className="bg-black p-2 rounded-lg">
            <h2
              className="text-5xl text-white font-bold p-4"
            >
              After joining the Suportr League pre-launch sale:              
              <p className="text-5x1 text-white font-bold mt-10 p-4"> 
              Keep an eye on your inbox — you’ll get a confirmation email with your account setup details from Suportr League.
               </p>

               
            </h2>
          </div>
        </div>

        <div className="relative p-0.5 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg mx-auto w-[1150px] mt-14 mb-10">
          <div className="bg-black p-2 rounded-lg">
            <h2
              className="text-5xl text-white font-bold p-4"
            >
            Once you’re logged in, you’ll unlock exclusive behind-the-scenes access to our development journey as we gear up for the big launch on August 17th, 2025 — just in time for the Premier football 25/26 season.                 
            </h2>
          </div>
        </div>

        <div className="relative p-0.5 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg mx-auto w-[1150px] mt-14 mb-10">
          <div className="bg-black p-2 rounded-lg">
            <h2
              className="text-5xl text-white font-bold p-4"
            >

             This is your front-row seat to the future of fan-powered gaming. Let’s get it!⚽🔥              
            </h2>
          </div>
        </div>


      {/* Fifth Section */}
      <div
        style={{ backgroundColor: Colors.primaryBlack }}
        className=" flex flex-col justify-between py-10 md:px-20 w-full md:items-center z-10  md:pt-10"
      >
        <div className="mx-auto max-w-screen-xl flex gap-3 flex-col md:flex-row md:items-center justify-between w-full md:mt-16">
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col gap-4 px-6 md:px-0">
              {leaderBoard.map((item, index) => (
                <ClubListItem {...item} key={item.id} />
              ))}
            </div>
            <div className="flex md:hidden lg:hidden w-full max-w-screen-xl">
              <AutoScrollingLeaderboard />
            </div>
          </div>

          <div className="flex flex-col gap-3 px-6 md:px-0">
            <p className="text-white text-md md:text-xl max-w-lg">
              Rally with other fans to keep your team at the top—every
              interaction counts! Sign up today to support your favorite team,
              track their progress, and see how your contributions impact their
              standings. Join the excitement and lead your team to victory!
            </p>
            <Button
              className="text-black w-[11rem]"
              text="Join the Presale Now"
              style={{ backgroundColor: Colors.primaryRed }}
            />
            <img src="https://res.cloudinary.com/divh5admv/image/upload/v1744916739/imagem_2025-04-17_200525425_yolcth.png" alt="Player" className="w-96 h-auto" />
          </div>
        </div>
        <div className="hidden md:flex lg:flex">
          <AutoScrollingLeaderboard />
        </div>
      </div>

{/*PreLunchExplanationSection*/}

<div className="relative p-0.5 mx-auto w-[1150px] mt-14 mb-10">
          <div className="bg-black p-2 rounded-lg">
            <h2
              className="text-5xl text-white font-bold p-4"
            >
              🏆Why are we doing a Pre-Launch Sale?          
              <p className="text-5x1 text-white font-bold mt-10 p-4"> 
              We’re raising funds to unite UK football supporters and build a die-hard fan-powered platform where your voice matters and your experience comes first.
               </p>

               
            </h2>
          </div>
        </div>
    


      {/* Fourth Section */}

      {/* Fifth Section */}
      <div
        style={{ backgroundColor: Colors.primaryBlack }}
        className=" flex flex-col justify-between px-5 md:px-20 w-full md:items-center z-10 py-10"
      >
        <div className="mx-auto max-w-screen-xl flex gap-3 flex-col md:items-start justify-between w-full md:mt-16">
          <div className=" flex flex-col justify-center gap-4 md:gap-4 flex-1 md:text-left">
            <p className="text-white font-bold text-lg md:text-3xl max-w-lg">Pre-Sale</p>
            <h2 className="font-[900] text-white uppercase text-[clamp(80px,5vw,80px)] leading-[clamp(35px,4vw,60px)] max-w-lg">
              Fund Allocation
            </h2>
          </div>

          <section className=" md:items-start md:flex-row md:flex-wrap md:justify-start gap-5 flex-1 mt-6 grid grid-cols-1 md:grid-cols-3">
            {fundAllocation.map((item, i) => {
              return (
                <div
                  key={item.id}
                  style={{backgroundColor: item.bgColor }}
                  className="rounded-lg p-5 bg-gradient-to-b from-purple-500 via-black to-[#006773] border border-white space-y-3 md:flex-1  flex flex-col justify-between h-full "
                >
                  <p
                    className="text-lg md:text-3xl max-w-lg"
                    style={{ color: Colors.primaryWhite }}
                  >
                    {item.title}
                  </p>
                  <h3
                    className="font-[1000] uppercase text-[clamp(40px,5vw,80px)] leading-[clamp(35px,4vw,60px)] max-w-lg"
                    style={{ color: Colors.primaryWhite }}
                  >
                    {item.allocation}%
                  </h3>
                  <h3
                    className="font-[1000] uppercase text-[clamp(40px,5vw,80px)] leading-[clamp(35px,4vw,60px)] max-w-lg"
                    style={{ color: Colors.primaryWhite }}
                  >
                    {item.amount}
                  </h3>
                  <p
                    className="text-lg md:text-3xl max-w-lg"
                    style={{ color: Colors.primaryWhite }}
                  >
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </section>
        </div>
      </div>

      {/* Sixth Section */}
      <div
        style={{ backgroundColor: Colors.primaryPurple }}
        className="flex flex-col px-5 md:px-20 w-full py-10 "
      >
        {/* Title */}
        <div className="max-w-screen-xl mx-auto">
          <h2
            style={{ color: Colors.primaryBlue }}
            className="font-extrabold uppercase text-[clamp(40px,5vw,80px)] leading-[clamp(35px,4vw,60px)] w-[8em]"
          >
            Why Join Suportr League?
          </h2>
          {/* Content Sections */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyJoinUs?.map((reason) => (
              <div key={reason.id} className="flex items-start gap-4">
                {/* Number */}
                <p
                  style={{ color: Colors.primaryBlue }}
                  className="text-lg md:text-2xl font-bold"
                >
                  0{reason.id}
                </p>

                {/* Text Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-extrabold text-white uppercase text-[clamp(30px,2vw,40px)] leading-[clamp(30px,1.5vw,50px)]">
                    {reason.title}
                  </h3>
                  <p className="text-white text-lg md:text-2xl">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

{/* Tokenomics Section */}

<div className="relative p-0.5 flex ml-14 w-[630px] mt-12">
          <div className="bg-black p-2  rounded-lg">
            <h2
              className="text-8xl font-[800] text-left md:text-left bg-gradient-to-r from-green-400 via-cyan-400 to-purple-700 bg-clip-text text-transparent"
         
            >
              TOKENOMICS
            </h2>
          </div>
        </div>
        <div className="text-center text-6x1 text-white font-bold mb-7 p-4">
        <p className="text-center text-6xl font-bold">Total Token Allocation</p>
        <p className="text-center text-6xl font-bold">Token: ERC20 Smart Contract</p>
        </div>

        <div className="relative p-1 bg-gradient-to-r  from-green-500 to-purple-500 rounded-xl mx-auto w-[920px] mt-14">
          <div className="bg-black p-2 rounded-lg">
            <h2
              className="text-5xl text-center text-white font-bold"
            >
            Pre-Sale 0.50% 2.5 million/£1 per SC = £2.5m              
            
            </h2>
          </div>
        </div>

        <div className="relative p-1 bg-gradient-to-r from-green-500 to-purple-500 rounded-xl mx-auto w-[920px] mt-14">
          <div className="bg-black p-2 rounded-lg">
            <h2
              className="text-5xl text-center text-white font-bold"
            >
             ICO Offering 49.40% 247 million
              
            </h2>
          </div>
        </div>

        <div className="relative p-1 bg-gradient-to-r from-green-500 to-purple-500 rounded-xl mx-auto w-[920px] mt-14 mb-10">
          <div className="bg-black p-2 rounded-lg">
            <h2
              className="text-5xl text-center text-white font-bold"
            >
             Team and Advisors 20% 100 million
            
            </h2>
          </div>
        </div>

        <div className="relative p-1 bg-gradient-to-r from-green-500 to-purple-500 rounded-xl mx-auto w-[920px] mt-14 mb-10">
          <div className="bg-black p-2 rounded-lg">
            <h2
              className="text-5xl text-center text-white font-bold"
            >
           Ecosystem and Partnerships 15% 75 million
            
            </h2>
          </div>
        </div>

        <div className="relative p-1 bg-gradient-to-r from-green-500 to-purple-500 rounded-xl mx-auto w-[920px] mt-14 mb-10">
          <div className="bg-black p-2 rounded-lg">
            <h2
              className="text-5xl text-center text-white font-bold"
            >
             Reserves and Operations 10% 50 million
            
            </h2>
          </div>
        </div>

        <div className="relative p-1 bg-gradient-to-r from-green-500 to-purple-500 rounded-xl mx-auto w-[920px] mt-14 mb-10">
          <div className="bg-black p-2 rounded-lg">
            <h2
              className="text-5xl text-center text-white font-bold"
            >
             Additional Reserves 5% 25 million
            
            </h2>
          </div>
        </div>

        <div className="text-center text-6x1 text-white font-bold mb-7 p-4">
        <p className="text-center text-6xl font-bold">Total Token Supply: 500 M</p>
        </div>

      {/* Total Token Supply */}
      
    

    <div 
      style={{ backgroundImage: `url(https://res.cloudinary.com/divh5admv/image/upload/v1744662217/imagem_2025-04-14_212332362_qxzckg.png)` }}
      className=" flex flex-col justify-between px-6 md:px-20 w-full md:items-center z-10 bg-contain md:bg-cover md:pt-10 top-0 left-0 h-full bg-black opacity-80">
        <div className="relative p-0.5 w-[630px] mx-auto mt-10">
          <div className="">
            <h2
              className="text-8xl font-[800] relative md:text-center bg-gradient-to-r from-green-400 via-cyan-400 to-purple-700 bg-clip-text text-transparent"
         
            >
              What's coming post launch:
            </h2>
          </div>
        </div>
        <p className="sm:text-3xl md:text-4xl font-[800] uppercase w-[1100x] text-white text-left mt-6">
        We’ve already laid the foundation. The infrastructure is built.
          </p>
          <p className="sm:text-3xl md:text-4xl font-[800] uppercase w-[1100px] text-white text-left mt-6">
          We’re raising funds to accelerate the rollout of our integrated game suite — a next-gen series of competitive hybrid mobile-first and  PC games built to scale across regions, rivalries, and fanbases. Here are the first few scheduled for production:
          </p>
        
          <div className="flex flex-row md:flex-row items-center gap-12 mt-8 mb-10 ">
          <div className="flex flex-row md:flex-row items-center gap-12 mt-8 ">
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/divh5admv/image/upload/v1744662258/imagem_2025-04-14_212415035_adlnuv.png"
              alt="Open World Tatics"
              className="w-[200px] h-[200px]"
            />
            </div>
        </div>

        <div className="flex flex-row md:flex-row items-center gap-12 mt-8 ">
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/divh5admv/image/upload/v1744662306/imagem_2025-04-14_212446744_otkktr.png"
              alt="SLOTS"
              className="w-[200px] h-[200px]"
            />
            </div>
        </div>

        <div className="flex flex-row md:flex-row items-center gap-12 mt-8 ">
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/divh5admv/image/upload/v1744662332/imagem_2025-04-14_212516946_lcg6tk.png"
              alt="Action based Skill"
              className="w-[200px] h-[200px]"
            />
            </div>
        </div>

        <div className="flex flex-row md:flex-row items-center gap-12 mt-8 ">
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/divh5admv/image/upload/v1744662358/imagem_2025-04-14_212544900_nqjtld.png"
              alt="Daily Football Strategy"
              className="w-[200px] h-[200px]"
            />
            </div>
        </div>

        <div className="flex flex-row md:flex-row items-center gap-12 mt-8 ">
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/divh5admv/image/upload/v1744663476/imagem_2025-04-14_214432131_haqtck.png"
              alt="SycoRef"
              className="w-[200px] h-[200px]"
            />
            </div>
        </div>
      </div>
    </div>  
      {/* Seventh Section */}
      <div
      id="faq"
        style={{ backgroundColor: Colors.primaryBlack }}
        className=" flex flex-col justify-between px-5 md:px-20 w-full md:items-center z-10 py-10"
      >
        <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row justify-between ">
          <div className="flex gap-10 flex-col flex-1">
            <h2 className="text-white font-extrabold uppercase text-[clamp(40px,5vw,80px)] leading-[clamp(35px,4vw,60px)] w-[8em]">
              FAQ'S
            </h2>

            {faqs?.map((faq) => (
              <div
                key={faq.id}
                onClick={() => toggleFAQ(faq.id)}
                className="flex flex-col items-start gap-4"
              >
                {/* Number */}
                <div className="flex cursor-pointer flex-row gap-4">
                  <p className="text-lg md:text-2xl font-bold text-white">
                    0{faq.id}
                  </p>
                  <h3 className="font-extrabold text-white uppercase text-[clamp(30px,2vw,40px)] leading-[clamp(30px,1.5vw,50px)]">
                    {faq.question}
                  </h3>
                  {faq.isOpen ? (
                    <Icon
                      icon="mingcute:up-fill"
                      color={Colors.primaryWhite}
                      width={20}
                      height={30}
                    />
                  ) : (
                    <Icon
                      icon="mingcute:down-fill"
                      color={Colors.primaryWhite}
                      width={20}
                      height={30}
                    />
                  )}
                </div>

                {/* Text Content */}
                {faq?.isOpen && (
                  <div className="flex flex-col gap-2">
                    <p className="text-white text-lg md:text-2xl">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <img
            className=" md:h-[500px]"
            src="https://res.cloudinary.com/dxnoztssb/image/upload/v1741936339/suppotr-league/image_5_rzhqdg.png"
            alt="FAQPhoto"
          />
        </div>
      </div>

      {/* Eight Section */}
      <div className="flex flex-col  w-full">
        <img
          src="https://res.cloudinary.com/dxnoztssb/image/upload/v1741936347/suppotr-league/joshua-hanson-8JRhpMIu13c-unsplash_1_popbaz.png"
          alt="Fans"
        />
      </div>

      {/* Ninth Section */}
      <div
        id="community"
        style={{ backgroundColor: Colors.secondaryYellow }}
        className=" flex flex-col justify-between px-5 md:px-20 w-full md:items-center z-10 py-10 text-center"
      >
        <p className="text-white text-lg md:text-2xl max-w-lg">
          Join Our Community
        </p>
        <h2
          color={Colors.primaryBlue}
          className="font-[900] uppercase text-[clamp(40px,5vw,80px)] leading-[clamp(35px,4vw,60px)] w-[9em]"
        >
          Connect with fans on{" "}
          <a
            style={{ color: Colors.primaryPurple }}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
          ,{" "}
          <a
            style={{ color: Colors.secondaryBlue }}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
          ,{" "}
          <a
            className="text-white"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            TWITTER
          </a>{" "}
          &{" "}
          <a
            style={{ color: Colors.primaryRed}}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTAGRAM
          </a>
        </h2>
      </div>

      {/* TENTH SECTION */}
      <div
        style={{ backgroundColor: Colors.primaryBlack }}
        className=" flex flex-col justify-between px-5 md:px-20 w-full md:items-center z-10 py-10"
      >
        <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row justify-between">
          <div className="flex gap-10 flex-col ">
            <h2 className="text-white font-extrabold uppercase text-[clamp(40px,5vw,80px)] leading-[clamp(35px,4vw,60px)] w-[8em]">
              How It Works
            </h2>

            {hIW?.map((faq) => (
              <div
                key={faq.id}
                onClick={() => toggleHIW(faq.id)}
                className="flex flex-col items-start gap-4"
              >
                {/* Number */}
                <div className="flex cursor-pointer flex-row gap-4">
                  <p className="text-lg md:text-2xl font-bold text-white">
                    0{faq.id}
                  </p>
                  <h3 className="font-extrabold text-white uppercase text-[clamp(30px,2vw,40px)] leading-[clamp(30px,1.5vw,50px)]">
                    {faq.question}
                  </h3>
                  {faq.isOpen ? (
                    <Icon
                      icon="mingcute:up-fill"
                      color={Colors.primaryWhite}
                      width={20}
                      height={30}
                    />
                  ) : (
                    <Icon
                      icon="mingcute:down-fill"
                      color={Colors.primaryWhite}
                      width={20}
                      height={30}
                    />
                  )}
                </div>

                {/* Text Content */}
                {faq?.isOpen && (
                  <div className="flex flex-col gap-2">
                    <p className="text-white text-lg md:text-2xl">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="w-[40%]"></div>
          <img
            className=" md:h-[500px]"
            src="https://res.cloudinary.com/dxnoztssb/image/upload/v1741936339/suppotr-league/image_5_rzhqdg.png"
            alt="FAQPhoto"
          />
        </div>
      </div>

      {/* ELEVENTH SECTION */}
      <div
        style={{ backgroundColor: Colors.secondaryBlue }}
        className=" flex flex-col justify-between px-5 md:px-20 w-full md:items-center z-10 py-10 text-center"
      >
        <p color={Colors.primaryBlue} className=" text-lg md:text-2xl max-w-lg">
          Join Suportr League
        </p>
        <h2
          color={Colors.primaryBlue}
          className="font-[900] uppercase text-[clamp(40px,5vw,80px)] leading-[clamp(35px,4vw,60px)] w-[9em] md:w-[8em]"
        >
          let’s build the new era of fandom together. 
        </h2>
        <Button
              className="text-black w-[11rem] mt-10"
              text="Join the Presale Now"
              style={{ backgroundColor: Colors.primaryRed }}
            />
      </div>
    
    </>
  );
};

