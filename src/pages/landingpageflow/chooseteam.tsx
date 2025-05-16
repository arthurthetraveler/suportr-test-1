import React from "react";
import TeamToFan from "../../components/button/teamtofan";
import Fan from "./fan";
import { Colors } from "../../components/Colors";
import { Navigate } from "react-router";
import { useNavigate } from "react-router";


function ChooseTeam() {
  return (
    <main className="flex-1 flex flex-col justify-center items-center relative">
      
      <p className="text-white font-bold text-lg uppercase mb-6 mt-20 mr-96 -ml-96">Step 2/5</p>

      <h1 
      className="text-justify text-rose-600 font-extrabold text-8xl md:text-2x1 sm:text-2x1 uppercase tracking-normal leading-normal">
        What Team Do You
        Support?
      </h1>

      <select
        className=" text-justify md:text-2x1 sm:text-2x1 mt-8 mr-52 -ml-96 font-bold bg-black text-white border-b-4 border-white rounded-none px-4 py-2 text-lg uppercase w-64 focus:outline-none"
        defaultValue=""
      >
        <option value="" disabled>
          Choose Your Team  
        </option>
        <option value="arsenal">Arsenal</option>
        <option value="chelsea">Chelsea</option>
        <option value="manchester-united">Manchester United</option>
        <option value="liverpool">Liverpool</option>
        <option value="wolverhampton-wanderers">Wolverhampton Wanderers</option>
        <option value="tottenham-hotspur">Tottenham Hotspur</option>
        <option value="brighton">Brighton and Hove Albion</option>
      </select>

     
     
      <TeamToFan/>
     
    </main>
  );
}

export default ChooseTeam;

{/* just a code model for the user flow landing page */}