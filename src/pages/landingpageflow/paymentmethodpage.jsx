// PaymentMethodPage.jsx (Updated)
import React, { useState } from 'react';
import { useNavigate } from 'react-router';


const PaymentMethodPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const navigate = useNavigate();
  const handleSelectMethod = (method) => {
    setSelectedMethod(method);
    alert(`Selected payment method: ${method}`);
    navigate('');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
      <p className="text-white font-bold text-lg uppercase mb-0 mt-10 mr-96 -ml-96">Step 5/5</p>
      <h1 
      className="text-justify text-rose-600 font-extrabold text-8xl md:text-2x1 sm:text-2x1 uppercase tracking-normal leading-normal">
       CHOOSE PAYMENT METHOD
      </h1>
        <div className="flex-col flex justify-center text-3xl gap-4 ml-80 mr-80">
          <button
            onClick={() => navigate('/billingdetailspage')}
            className="relative bg-gradient-to-r from-green-500 to-purple-500 p-[2px] rounded-lg"
          >
            <div className="bg-black text-white font-extrabold py-3 px-6 rounded-lg hover:bg-gray-800 transition">
              PAY BY CARD
            </div>
          </button>
          <button
            onClick={() => handleSelectMethod('GPay')}
            className="relative bg-gradient-to-r from-green-500 to-purple-500 p-[2px] rounded-lg"
          >
            <div className="bg-black text-white font-extrabold py-3 px-6 rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2">
             <img src='https://res.cloudinary.com/divh5admv/image/upload/v1744313539/imagem_2025-04-10_203218791_mrn98d.png' className="w-25 h-8" /> 
            </div>
          </button>
          <button
            onClick={() => handleSelectMethod('Apple Pay')}
            className="relative bg-gradient-to-r from-green-500 to-purple-500 p-[2px] rounded-lg"
          >
            <div className="bg-black text-white font-extrabold py-3 px-6 rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2">
              <img src='https://res.cloudinary.com/divh5admv/image/upload/v1744313520/imagem_2025-04-10_203158667_foseut.png' className='w-25 h-9' />
            </div>
          </button>
          <button
            onClick={() => navigate('/connectwallet')}
            className="justify bg-gradient-to-r from-green-500 to-purple-500 p-[2px] rounded-lg"
          >
            <div className="bg-black text-white font-extrabold py-3 px-6 rounded-lg hover:bg-gray-800 transition">
              PAY BY CRYPTO
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodPage;