import React from "react";
import { useNavigate } from "react-router";
import BillingPopup from "../modal/billingpopup";
import { useState } from "react";
import ConnectWalletModal from "../modal/connectwallet";

export default function CheckoutPanel() {
    const [showModal, setShowModal] = useState(false);
    const [open,setOpen] = useState(false);

  return (
    <div className="bg-black p-3 rounded-3xl border-x-8 border-[#00ff9f] w-fit h-fit max-w-md mx-auto text-white shadow-xl sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
    <div className="bg-black p-2 rounded-3xl border-t-[1px] border-[#00ff9f] w-fit h-fit max-w-md mx-auto text-white shadow-xl sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
    <div className="bg-gradient-to-b from-fuchsia-700 to-black p-4 rounded-3xl border-b-[1px] border-[#00ff9f] w-fit h-fit max-w-md mx-auto text-white shadow-xl sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
      <div className="text-center text-2xl flex flex-wrap -mt-14 ml-8 text-red-500 font-bold mb-2">
        Expected Demand Price Crease: <img src="https://res.cloudinary.com/divh5admv/image/upload/v1746134425/imagem_2025-05-01_222021960_mduzln.png"className="w-[80px] h-[85px] -mt-[45px]"/> <span className="text-white text-3xl -ml-[65px] -mt-2">15%</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mb-6 mt-9">
        <div>
          <label className="text-xl font-bold block mb-1">SLP's Earned</label>
          <input
            type="text"
            value="5000"
            className="w-full px-2 py-1 font-bold rounded bg-transparent border border-white text-white"
            readOnly
          />
        </div>
        <div>
          <label className="text-xl font-bold block mb-1">Leader Board Ranking</label>
          <input
            type="text"
            value="4. Manchester U"
            className="w-full px-2 py-1 font-bold rounded bg-transparent border border-white text-white"
            readOnly
          />
          <div className="text-lg font-bold mt-3 -mb-5"> £750,000 / £1,200,000</div>
        </div>
      </div>

      <div className="relative h-5 w-full bg-gray-300 rounded-full overflow-hidden mb-5">
        <div className="absolute h-full w-2/4 bg-green-400 rounded-lg"/>
        <div className="h-full w-3/4 bg-rose-600 rounded-lg" />
        <div className="absolute right-[25%] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-white rounded-full blur-sm opacity-80 animate-halo-glow" />
        <div className="absolute right-[25%] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-white rounded-full blur-sm opacity-80 animate-soft-pulse" />
        <div className="absolute right-[25.7%] w-[18px] h-[18px] top-[1px] bg-white  rounded-full border border-white z-20" />
        <div className="absolute right-[25.13%] top-[-2.5px] z-30">🤑</div>
        <div className="absolute left-1/2 top-full text-xs text-center w-full mt-1 text-white">Amount Raised</div>
      </div>

      <div className="mb-5">
      <div className="flex flex-wrap gap-1">
        <div className="text-lg font-bold mt-2">BUY DIRECT</div>
          <button className="bg-fuchsia-950 border-2 text-white font-semibold px-3 rounded-lg flex items-center gap-1 ">
            <img src="https://res.cloudinary.com/divh5admv/image/upload/v1746135588/429716d3f3e5d155e34d569bd9155053668dff25_xzkobj.png" className="w-[30px] h-[30px]" />Pay
          </button>
          <BillingPopup/>
          <button className="bg-fuchsia-950 border-2 text-white font-semibold px-4 rounded-lg flex items-center gap-1 ml-[9px]">
          <img src='https://res.cloudinary.com/divh5admv/image/upload/v1746135646/imagem_2025-05-01_224043208_f8n02v.png' className='w-[30px] h-[30px]' />Pay
          </button>
        </div>
      </div>

      <div className="mb-6">
      <div className="flex flex-wrap gap-[12.9px]">
        <div className="text-lg font-bold mb-2">ETHEREUM</div>
        
          <button className="bg-fuchsia-950 border-2 text-white font-semibold px-3 py-1 rounded-lg flex items-center gap-2">
            <img src="https://res.cloudinary.com/divh5admv/image/upload/v1746048087/b0197315e84ea61496a007da53b30921ec3a7448_vi8cvc.png" className="h-6 w-6"/>ETH</button>
          <button className="bg-fuchsia-950 border-2 text-white font-semibold px-3 py-1 rounded-lg flex items-center gap-1 -ml-[2px]">
            <img src="https://res.cloudinary.com/divh5admv/image/upload/v1746048116/692fcee4f5407d9e96c2130eb034eaa222e92ce7_wdzgok.png" className="h-6 w-6"/>USDT</button>
          <button className="bg-fuchsia-950 border-2 text-white font-semibold px-3 py-1 rounded-lg flex items-center gap-1">
            <img src="https://res.cloudinary.com/divh5admv/image/upload/v1746048100/985a8c6ee9695609e4000f8e89c258405f9faa39_pwb6ol.png" className="h-6 w-6"/>USDC</button>
    
        </div>
      </div>

      <div className="mb-6">
      <div className="flex flex-wrap gap-[11px]">
        <div className="text-lg font-bold mb-2 -mr-[2px]">BNB CHAIN</div>
          <button className="bg-fuchsia-950 border-2 text-white font-semibold px-3 py-1 rounded-lg flex items-center gap-1">
            <img src="https://res.cloudinary.com/divh5admv/image/upload/v1746048108/7e09a82b3e5a6f18b1620f5ea4baa127eed04a71_n6xs70.png" className="h-6 w-6"/>BNB</button>
          <button className="bg-fuchsia-950 border-2 text-white font-semibold px-3 py-1 rounded-lg flex items-center gap-1 ml-[1px]">
            <img src="https://res.cloudinary.com/divh5admv/image/upload/v1746048116/692fcee4f5407d9e96c2130eb034eaa222e92ce7_wdzgok.png" className="h-6 w-6"/>USDT</button>
          <button className="bg-fuchsia-950 border-2 text-white font-semibold px-3 py-1 rounded-lg flex items-center gap-[6px]">
            <img src="https://res.cloudinary.com/divh5admv/image/upload/v1746048100/985a8c6ee9695609e4000f8e89c258405f9faa39_pwb6ol.png" className="h-6 w-6"/>USDC</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-xl font-bold block mb-1">Total</label>
          <input
            type="text"
            value="14 SC"
            className="w-full px-2 py-1 font-bold rounded bg-transparent border border-white text-white"
            readOnly
          />
        </div>
        <div>
          <label className="text-xl font-bold block mb-1">You Pay</label>
          <input
            type="text"
            placeholder=""
            className="w-full px-2 py-1 rounded bg-transparent border border-white text-white"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="text-[24px] font-bold block mb-1">Balance</label>
        <input
          type="text"
          value="0.00 SC"
          className="w-fit px-2 py-1 font-bold rounded bg-transparent border border-white text-white"
          readOnly
        />
      </div>

      <div className="text-center">
        <button
        onClick={() => setOpen(true)}
        className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-2 rounded-full font-bold text-white mb-2">
          CONNECT WALLET
        </button>
        <ConnectWalletModal isOpen={open} onClose={() => setOpen(false)} />
        <div className="text-xs text-green-400">Do not pay direct to the wallet address</div>
      </div>
    </div>
    </div>
    </div>
  );
}
