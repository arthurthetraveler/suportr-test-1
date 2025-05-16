import React, { useState } from 'react';
import { useNavigate } from 'react-router'; 


function CheckOut() {
  const [showCheckoutBar, setShowCheckoutBar] = useState(false); 
  const navigate = useNavigate();
  const handleBuyClick = () => {
    setShowCheckoutBar(true);

  };

  const handleCheckoutClick = () => {
    navigate('/createac'); // Navigate to the choose team page
  }


  return (
    <>
      {showCheckoutBar && (
        <div
          className="
            fixed
            right-4 bottom-8
            flex
            items-center
            overflow-hidden
            shadow-lg
            rounded-md
          "
        >
            {/* Left side: 'GET MORE, OR' */}
          <div
            className="
              bg-gradient-to-r from-green-500 to-indigo-500
              text-white
              py-3 px-4
              font-semibold
            "
          >
            GET MORE, OR
          </div>

   {/* Right side: 'CHECKOUT' button */}
          <button
            onClick={handleCheckoutClick}
            className="
              bg-green-300
              text-black
              py-3 px-5
              font-semibold
              hover:bg-green-400
            "
          >
            CHECKOUT
          </button>
        </div>
      )}
    </>
  );
}

export default CheckOut;