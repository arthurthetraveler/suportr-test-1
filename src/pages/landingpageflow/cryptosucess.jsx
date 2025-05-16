import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Home from '../home';
import HomeLayout from '../home/HomeLayout';
import { Link } from "react-router";

const CryptoSucessPage = () => {
    const navigate = useNavigate();
  
    const handleBackToHome = () => {
      navigate('/'); // Navigate back to the home page (index.tsx)
    };
  
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
        <p className="text-white font-bold text-xl uppercase text-left mt-20">YOU MADE IT!</p>
          <h1 className="text-8xl text-rose-600 font-black text-left mb-10">
          SUCCESS
          </h1>
          <p className="text-5xl text-white font-bold mb-16">
            YOUR PURCHASE WAS SUCCESSFUL
          </p>

            <p className="text-5xl text-white font-bold mt-4 mb-16">
                CHECK YOUR EMAIL FOR CONFIRMATION
            </p>

            <p className="text-5xl text-purple-500 font-bold mt-4 mb-16">
                CRYPTO TRANSACTION HASH:
            </p>

            <p className="text-3xl text-white font-bold mt-4">
                0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
            </p>
     <div className="flex justify-center mt-1">
           <Link className="mt-10 bg-rose-600 text-white text-xl font-semibold py-2 px-6 rounded hover:bg-rose-600 transition" to="/">
                   Back to Home
                    </Link>
                    </div>
        </div>
      </div>
    );
  };
  
  export default CryptoSucessPage;