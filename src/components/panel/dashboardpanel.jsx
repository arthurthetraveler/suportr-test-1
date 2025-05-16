
import React from 'react';
import { useNavigate } from 'react-router';

const DashboardPanel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="h-full bg-gradient-to-b from-purple-800 to-purple-900 p-6 rounded-2xl border-2 border-green-400 shadow-2xl w-96">
       <div className='w-full h-full'>
        <div className="flex justify-between items-center mb-4">
          <span className="text-white text-sm">Expected Demand Price Crease:</span>
          <span className="bg-green-500 text-black font-bold px-2 py-1 text-xs rounded">15%</span>
        </div>

        <div className="mb-4">
          <label className="block text-pink-200 text-sm mb-1">SLP's Earned</label>
          <input
            type="text"
            value="5000"
            readOnly
            className="w-full bg-black border border-pink-500 text-center text-white font-bold rounded-md p-2 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-pink-200 text-sm mb-1">Leader Board Ranking</label>
          <input
            type="text"
            value="⚽ Manchester U"
            readOnly
            className="w-full bg-black border border-pink-500 text-center text-white font-bold rounded-md p-2 focus:outline-none"
          />
        </div>

        <div className="relative mb-4">
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-green-400" style={{ width: '75%' }}></div>
          </div>
          <span className="absolute left-1/2 transform -translate-x-1/2 -top-5 text-xs text-white">Token SLP Earnings</span>
          <div className="absolute right-0 -top-5 text-pink-500 font-bold text-lg">⚠️</div>
        </div>

        <div className="mb-4">
          <h3 className="text-white font-bold text-sm mb-2">BUY DIRECT</h3>
          <div className="flex justify-center gap-2 mb-3">
            <button className="bg-green-500 text-black font-bold py-1 px-3 rounded">G Pay</button>
            <button className="bg-white text-black font-bold py-1 px-3 rounded">Card</button>
            <button className="bg-pink-500 text-white font-bold py-1 px-3 rounded"> 🍎Pay</button>
          </div>

          <h3 className="text-white font-bold text-sm mb-2">ETHEREUM</h3>
          <div className="flex justify-center gap-2 mb-3">
            <button className="bg-gray-800 text-white py-1 px-3 rounded">ETH</button>
            <button className="bg-gray-800 text-white py-1 px-3 rounded">USDT</button>
            <button className="bg-gray-800 text-white py-1 px-3 rounded">USDC</button>
          </div>

          <h3 className="text-white font-bold text-sm mb-2">BNB CHAIN</h3>
          <div className="flex justify-center gap-2 mb-4">
            <button className="bg-yellow-400 text-black py-1 px-3 rounded">BNB</button>
            <button className="bg-gray-800 text-white py-1 px-3 rounded">USDT</button>
            <button className="bg-gray-800 text-white py-1 px-3 rounded">USDC</button>
          </div>
        </div>

        <div className="flex justify-between text-white text-sm font-bold mb-2">
          <div>
            <p>Total</p>
            <input
              type="text"
              value="14 SC"
              readOnly
              className="w-32 bg-black border border-pink-500 text-center text-white rounded-md p-1 mt-1"
            />
          </div>
          <div>
            <p>You Pay</p>
            <input
              type="text"
              value="0.00"
              readOnly
              className="bg-black border border-pink-500 text-center text-white rounded-md p-1 mt-1"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm mb-1 font-bold">Balance</label>
          <input
            type="text"
            value="0.00 SC"
            readOnly
            className="w-32 bg-black border border-pink-500 text-center text-white rounded-md p-1 focus:outline-none"
          />
        </div>

        <button className="w-full bg-purple-700 text-white font-bold py-2 rounded-xl shadow-md hover:from-pink-500 hover:to-purple-500 transition-all">
          CONNECT WALLET
        </button>

        <input
          type="text"
          value="asdflgjd948603jnslkengn3"
          readOnly
          className="w-full h-5 flex justify-center uppercase bg-black border border-pink-500 text-center text-white rounded-md p-2 mt-4 focus:outline-none"
        />

        <p className="text-green-400 text-sm mb-1 font-bold mt-2 ml-16">Do not pay direct to the wallet address</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPanel;
