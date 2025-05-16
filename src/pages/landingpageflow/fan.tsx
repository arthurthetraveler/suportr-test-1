// FanTypeForm.jsx
import React, { useState } from 'react';
import TeamToFan from '../../components/button/teamtofan';
import { Navigate } from 'react-router';
import CreateAccount  from './createac';
import FanToAc from '../../components/button/fantoaccount';

const FanTypeForm = () => {
  const [fanType, setFanType] = useState(''); // State to track the selected fan type

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!fanType) {
      alert('Please select an option before proceeding.');
      return;
    }
    alert(`You selected: ${fanType}`);
    // Add logic here to move to the next step, e.g., navigate to the next page
    // You can use React Router's useNavigate for navigation if needed
  };

  return (
<main className="flex-1 flex flex-col justify-center items-center relative">
     
      <p className="text-white font-bold text-lg uppercase mb-6 mt-20 mr-96 -ml-96">Step 3/5</p>
        <h1 className="text-8xl text-rose-600 font-extrabold mb-6">WHAT IS YOUR FAN TYPE?</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex items-center gap-3 text-white text-2xl">
            <input
              type="radio"
              name="fan-type"
              value="die-hard-loyal"
              checked={fanType === 'die-hard-loyal'}
              onChange={(e) => setFanType(e.target.value)}
              className="w-6 h-6 text-white border-white"
            />
            DIE HARD LOYAL
          </label>
          <label className="flex items-center gap-3 text-white text-2xl">
            <input
              type="radio"
              name="fan-type"
              value="loyal"
              checked={fanType === 'loyal'}
              onChange={(e) => setFanType(e.target.value)}
              className="w-6 h-6 text-white border-white"
            />
            LOYAL
          </label>
          <label className="flex items-center gap-3 text-white text-2xl">
            <input
              type="radio"
              name="fan-type"
              value="casual"
              checked={fanType === 'casual'}
              onChange={(e) => setFanType(e.target.value)}
              className="w-6 h-6 text-white border-white"
            />
            CASUAL
          </label>
        </form>
        <FanToAc /> 
      
    </main>
  );
};

export default FanTypeForm;