import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Home from '../home';
import HomeLayout from '../home/HomeLayout';

const OrderSuccessfulPage = () => {
    const navigate = useNavigate();
  
    const handleBackToHome = () => {
      navigate('/'); // Navigate back to the home page (index.tsx)
    };
  
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
        <p className="text-white font-bold text-lg uppercase mb-0 mt-[50px] mr-96 ml-1">YOU MADE IT!</p>
          <h1 className="text-8xl text-green-500 font-extrabold mb-2">
            ORDER SUCCESSFUL <br /> YOU NOW OWN
          </h1>
          <p className="text-8xl text-purple-500 font-bold">
            [00000014] SC
          </p>
          <button
            onClick={handleBackToHome}
            className="mt-6 bg-rose-600 text-white font-semibold py-2 px-6 rounded hover:bg-rose-600 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  };
  
  export default OrderSuccessfulPage;