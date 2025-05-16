// BillingDetailsPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';

const currencies = [
  'Bitcoin',
  'Ethereum',
  'Ethereum USDT',
  'Ethereum USDC',
  'BNB',
  'BNB USDC',
  'BNB USDT',
  'TRON USDT',
  'Solana',
  'XRP',
];

export default function ConnectWalletPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (currency) => {
    setSelected(currency);
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
        <p className="text-white font-bold text-lg uppercase mb-6 mt-20 mr-96 -ml-96">One more Step</p>
        <h1 className="text-8xl text-rose-600 font-extrabold mb-6">CONNECT YOUR WALLET</h1>
      <div ref={containerRef} className=" w-64 mb-8">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="text-justify md:text-2x1 sm:text-2x1 mt-8 mr-52 -ml-96 font-bold bg-black text-white border-b-4 border-white rounded-none px-4 py-1 text-lg uppercase w-64 focus:outline-none"
        >
          <span className=''>{selected || 'SELECT CURRENCY'}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 h-5 transform transition-transform ${open ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && (
          <ul className="text-justify md:text-2x1 sm:text-2x1 mt-8 mr-52 -ml-96 font-bold bg-black text-white border-b-4 border-white rounded-none px-4 py-2 text-lg uppercase w-64 focus:outline-none">
            {currencies.map((curr) => (
              <li
                key={curr}
                onClick={() => handleSelect(curr)}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              >
                {curr}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        onClick={() => navigate('/orderpaymentcrypto')}
        disabled={!selected}
        className={`w-64 py-3 rounded-md font-semibold transition-colors
          ${
            selected
              ? 'bg-green-400 hover:bg-green-300 text-black'
              : 'bg-gray-700 text-gray-400 cursor-not-allowed'
          }`
        }
      >
        Next
      </button>
    </div>
  );
}