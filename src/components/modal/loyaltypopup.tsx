// HomePage.jsx
import React, { useState, useEffect } from 'react';


const LoyaltyModal:React.FC = () => {
  const [show, setShow] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState('');
  const [loyaltyLevel, setLoyaltyLevel] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 5000); // Show after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-gray-800 via-purple-900 to-black p-8 rounded-3xl shadow-lg w-full max-w-lg text-white border border-white/20">
        <h2 className="text-center text-3xl font-extrabold mb-1">
          <span className="text-rose-600">WHAT</span>{' '}
          <span className="bg-gradient-to-r from-indigo-600 to-green-500 bg-clip-text text-transparent">PREMIER LEAGUE</span>{' '}
          <span className="text-rose-600">TEAM DO</span>{' '}
          <span className="text-rose-600">YOU SUPPORT?</span>
        </h2>
      

        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 mb-6 -mr-3 ml-10 -mr-10">
          {/* Team Selector */}
          <div className="w-full">
            <label className="block mb-2"></label>
            <select
              className="w-full form-select bg-purple-900 opacity-80 rounded-md border-b-2 font-bold text-white py-1 outline-none"
            >
              
              <option>CHOOSE YOUR TEAM</option>
              <option>Manchester United</option>
              <option>Chelsea</option>
              <option>Arsenal</option>
              <option>Liverpool</option>
              <option>Manchester City</option>
              <option>Tottenham Hotspur</option>
              <option>Wolverhampton Wanderers</option>
              <option>Everton</option>
              <option>Leicester City</option>  
              
              {/* Add more teams */}
            </select>
          </div>

          {/* Loyalty Options */}
          <div className="w-full mt-6 mb-6 sm:w-auto text-left">
            <label className="block mb-2 font-bold"></label>
            <div className="flex flex-col gap-2">
              <label className='gap-4 flex items-center'>
                <input
                  type="radio"
                  value="Die Hard Loyal"
                  checked={loyaltyLevel === 'Die Hard Loyal'}
                  onChange={(e) => setLoyaltyLevel(e.target.value)}
                  className="appearance-none w-5 h-5 border-2 border-white rounded-full checked:border-white checked:bg-rose-500 transition-colors duration-200"
                />
                <span className='min-w-48'>DIE HARD LOYAL</span>
              </label>
              <label className='gap-4 flex items-center'>
                <input
                  type="radio"
                  value="Loyal"
                  checked={loyaltyLevel === 'Loyal'}
                  onChange={(e) => setLoyaltyLevel(e.target.value)}
                  className="appearance-none h-5 w-5 border-2 border-white rounded-full checked:border-white checked:bg-rose-500 transition-colors duration-200"
                />
                LOYAL
              </label>
              <label className='gap-4 flex items-center'>
                <input
                  type="radio"
                  value="Casual"
                  checked={loyaltyLevel === 'Casual'}
                  onChange={(e) => setLoyaltyLevel(e.target.value)}
                  className="appearance-none h-5 w-5 border-2 border-white rounded-full checked:border-white checked:bg-rose-500 transition-colors duration-200"
                />
                CASUAL
              </label>
            </div>
          </div>
        </div>

        {/* Prove Loyalty Button */}
        <button
          className="w-64 flex flex-col items-center mx-20 bg-rose-600 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-rose-800 transition-all"
          onClick={() => setShow(false)} // you can add more logic here
        >
          PROVE LOYALTY
        </button>
      </div>
    </div>
  );
};

export default LoyaltyModal;
