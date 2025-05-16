import React, { useState } from "react";
import TeamToFan from "../../components/button/teamtofan";
import Fan from "./fan";
import { Colors } from "../../components/Colors";
import { Navigate } from "react-router";
import { useNavigate } from "react-router";


  
    const CreateAccount: React.FC = () => {
      const navigate = useNavigate();
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
          if (!email || !password) {
           alert('Please fill all fields');
      return;
    }
           alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <main className="flex-1 flex flex-col justify-center items-center relative">
      
      <p className="text-white font-bold text-lg uppercase mb-6 mt-20 mr-96 -ml-96">Step 4/5</p>

      <h1 
      className="text-justify text-rose-600 font-extrabold text-8xl md:text-2x1 sm:text-2x1 uppercase tracking-normal leading-normal">
       LET'S CREATE YOUR ACCOUNT
      </h1>

      <div className="flex gap-4 mt-6">
            <label className="text-white text-lg">
              YOUR EMAIL *
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full border-b border-white bg-transparent text-white focus:outline-none mt-2"
                required
              />
            </label>
            <label className="text-white text-lg">
              PASSWORD *
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full border-b border-white bg-transparent text-white focus:outline-none mt-2"
                required
              />
            </label>
          </div>

          <button
          onClick={() => navigate('/checkoutpage')}
          className="mt-6 bg-green-400 hover:bg-green-300 text-black font-bold py-3 px-8 rounded"
        >
          Next
        </button>
     
      
    </main>
  );
}

export default CreateAccount;
