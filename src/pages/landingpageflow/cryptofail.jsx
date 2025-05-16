import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Home from '../home';
import HomeLayout from '../home/HomeLayout';
import { Link } from "react-router";

const CryptoFailPage = () => {
    const navigate = useNavigate();
  
    const handleBackToCheckout = () => {
      navigate('checkoutpage'); // Navigate back to the checkout page (checkout.jsx)
    };
  
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
        <p className="text-white font-bold text-xl uppercase text-left mt-20">SOMETHING WENT WRONG</p>
          <h1 className="text-8xl text-rose-600 font-black text-left mb-10">
          FAIL
          </h1>
          <p className="text-5xl text-white font-bold mb-16">
            YOUR PURCHASE WAS UNSUCCESSFUL
          </p>

            <p className="text-5xl text-white font-bold mt-4 mb-16">
                CONTACT US VIA THE CHAT
            </p>

            <p className="text-5xl text-purple-500 font-bold mt-4 mb-16">
                OR EMAIL US:
            </p>

            <p className="text-3xl text-white font-bold mt-4">
                PRESALE@SUPORTR.COM
            </p>
     <div className="flex justify-center mt-1">
           <Link 
           onClick={handleBackToCheckout}
           className="mt-10 bg-rose-600 text-white text-xl font-semibold py-2 px-6 rounded hover:bg-rose-600 transition " to="/checkoutpage">
                   TRY AGAIN
                    </Link>
                    </div>
        </div>
      </div>
    );
  };
  
  export default CryptoFailPage;