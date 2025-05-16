import React from "react";
import { Navigate }from "react-router";
import { text } from "stream/consumers";


function FanToAc() {
    const[gotoac, setGotoAc] = React.useState(false);
    
    if (gotoac) { 
        return <Navigate to="/createac" />;
    }
  
  return (
   <div>
    <button
      onClick={() => setGotoAc(true)} // Set state to true when clicked //
      style={{ position: "relative", top: "20px", left: "-300px" }} // Apply inline styles
    className={`bg-pink-700 text-white font-bold text-md px-4 py-3 rounded-lg shadow-md hover:bg-pink-700 transition-all }`}
    >
        Next Step
        
    </button>
</div>
  );
};

export default FanToAc;
