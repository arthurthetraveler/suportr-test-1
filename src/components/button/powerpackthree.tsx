import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import CheckoutBar from './checkout'

const PowerPackThree: React.FC = () => {
    

 function CheckoutBar({ onCheckout }: { onCheckout: () => void }) {
    return (
      <div
        className="
          flex items-center
          overflow-hidden
          shadow-lg
          rounded-md
        "
      >
        {/* Left section: gradient and text */}
        <div
          className="
            bg-gradient-to-r from-green-500 to-indigo-500
            text-white
            py-3 px-5
            font-extrabold font-mono
          "
        >
          GET MORE, OR
        </div>
  
        {/* Right section: the clickable "Checkout" button */}
        <button
          onClick={onCheckout}
          className="
            bg-green-400
            text-black
            py-3 px-6 
            font-mono font-extrabold
            hover:bg-green-300
          "
        >
          CHECKOUT
        </button>
      </div>
    );
  }


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
 
 return (
<div className="flex flex-col items-center">
<img
              src="https://res.cloudinary.com/divh5admv/image/upload/v1744747649/imagem_2025-04-15_210727003_hrp6z4.png"
              alt="Power Pack x5"
              className="w-[150px] h-[200px] z-20"
            />
            
            <div className="flex flex-col items-center">
            <h2 className="text-3xl text-white font-bold text-center uppercase mt-2">
              4 SC
              </h2>
              </div>

              <div className="flex flex-col items-center p-4 md:p-6 shadow-xl rounded-lg w-52 h-24 max-w-xs
                      transition-all duration-500 ease-in-out mt-5 mb-10">
        <div className="flex items-center space-x-4 mb-8 -mt-2 transition-all duration-500 ease-in-out">
          <button
            onClick={()=>decrement(0)}
            className="text-white text-6xl px-3 font-bold hover:scale-110 hover:text-purple-500 transition-all duration-300"
          >
            −
          </button>
          <div className="w-14 h-14 rounded-md bg-gradient-to-b from-purple-600 via-indigo-500 to-green-400 text-white flex items-center 
          justify-center font-bold text-2xl shadow-md transition-all duration-300 ${animatePulse[p.id]? 'animate-ping':''}">
                        <span className="text-2xl font-bold">{quantities}</span>

          </div>
          <button
            onClick={()=>increment(0)}
            className="text-white text-6xl px-3 font-bold hover:scale-110 hover:text-green-400 transition-all duration-300"
          >
            +
          </button>
        </div>

        <div className="text-white font-extrabold text-[19.1px] tracking-wide uppercase text-center transition-all duration-500">
          Choose Quantity
        </div>
      </div>

              <div className="flex flex-col items-center">
                <p className="text-3xl font-bold text-center uppercase mt-2">
              <button 
               onClick={handleBuyClick}
              className="text.black w-20 bg-green-400 font-extrabold p-1 mt-4 rounded-lg hover:bg-green-500 transition duration-300 ease-in-out">
                BUY
              </button>
              </p>
            </div>

           <div className="relative p-0.5 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg mx-auto w-[280px] mt-2">
          <div className="bg-black p-2 rounded-lg">
          <h2
              className="text-2xl text-white font-bold text-center uppercase"
            
            >
              YOU SAVE: 16.49 SC
            </h2>
          </div>
        </div>

        <div className="relative p-0.5 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg mx-auto w-[280px] mt-2">
          <div className="bg-black p-2 rounded-lg">
            <h2
              className="text-2xl text-white font-bold text-center uppercase"
            
            >
              POTENTIAL GAIN: £20.99 IN SLP VALUE
            </h2>
          </div>
        </div>

        <div className="relative p-0.5 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg mx-auto w-[280px] mt-2">
          <div className="bg-black p-2 rounded-lg">
            <h2
              className="text-2xl text-white font-bold text-center uppercase"
            
            >
              5.25 X YOUR SPEND
            </h2>
          </div>
        </div>

        <div

className={
`
fixed right-4 bottom-8 z-50
transform transition-transform duration-300 will-change-transform
${showCheckoutBar ? 'translate-x-0' : 'translate-x-full'}
`
}
>
<CheckoutBar onCheckout={handleCheckoutClick} />
</div>

        <div className="relative p-0.5 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg mx-auto w-[280px] mt-2">
          <div className="bg-black p-2 rounded-lg">
            <h2
              className="text-2xl text-white font-bold text-center uppercase"
            
            >
             EARN: 
            </h2>
            
            <p className="text-4xl text-green-500 font-extrabold text-center uppercase">
              5,000 SLP
            </p>
            
            <p className="text-2xl text-white font-bold text-center uppercase">
              with this purchase
            </p>
          </div>
        </div>
          </div>
 )};
export default PowerPackThree;