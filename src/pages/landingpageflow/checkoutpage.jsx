import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import CheckoutPanel from '../../components/panel/checkoutpanel';

function CheckoutPage() {
  const navigate = useNavigate();

  // pack costs (in SC) per unit
  const PACKS = [
    { id: 1, img: 'https://res.cloudinary.com/divh5admv/image/upload/v1744747607/imagem_2025-04-15_210644706_xmkxei.png', unitCost: 2 },
    { id: 2, img: 'https://res.cloudinary.com/divh5admv/image/upload/v1744747623/imagem_2025-04-15_210701307_rsyl5k.png', unitCost: 3 },
    { id: 3, img: 'https://res.cloudinary.com/divh5admv/image/upload/v1744747649/imagem_2025-04-15_210727003_hrp6z4.png', unitCost: 4 },
    { id: 4, img: 'https://res.cloudinary.com/divh5admv/image/upload/v1744747665/imagem_2025-04-15_210743695_gfo87j.png', unitCost: 5 },
  ];

  // state for quantities
  const initialQty = PACKS.reduce((acc, p) => ({ ...acc, [p.id]: 0 }), {});
  const [qty, setQty] = useState(initialQty);

  const inc = id => setQty(q => ({ ...q, [id]: q[id] + 1 }));
  const dec = id => setQty(q => ({ ...q, [id]: Math.max(0, q[id] - 1) }));

  // compute totals
  const lineTotals = useMemo(
    () => PACKS.map(p => ({ 
      ...p, 
      quantity: qty[p.id], 
      totalSC: qty[p.id] * p.unitCost 
    })),
    [qty]
  );
  const totalSC = lineTotals.reduce((sum, p) => sum + p.totalSC, 0);
  const totalGBP = totalSC; // adjust conversion if needed

  // animate pulse effect
  const [animatePulse, setAnimatePulse] = React.useState({});

  return (
    <div className="min-h-screen bg-black text-white px-8 py-10">
      <h1 className="text-rose-600 text-8xl font-extrabold mb-12 mt-8">CHECKOUT</h1>
     <div className='flex flex-col lg:flex-row gap-8'>
     <div className="space-y-12 mb-10">
  {lineTotals.map(p => (
    <div
      key={p.id}
      className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-8 md:gap-12
                 transition-all duration-500 ease-in-out"
    >
      <img
        src={p.img}
        alt=""
        className="w-[160px] h-[160px] md:w-[160px] md:h-[160px] object-contain transition-all duration-500 ease-in-out"
      />

      <div className="flex flex-col items-center bg-zinc-800 p-4 md:p-6 shadow-xl rounded-lg w-52 h-24 max-w-xs
                      transition-all duration-500 ease-in-out mt-5">
        <div className="flex items-center space-x-4 mb-8 -mt-2 transition-all duration-500 ease-in-out">
          <button
            onClick={() => dec(p.id)}
            className="text-white text-6xl px-3 font-bold hover:scale-110 hover:text-purple-500 transition-all duration-300"
          >
            −
          </button>
          <div className="w-14 h-14 rounded-md bg-gradient-to-b from-purple-600 via-indigo-500 to-green-400 text-white flex items-center 
          justify-center font-bold text-2xl shadow-md transition-all duration-300 ${animatePulse[p.id]? 'animate-ping':''}">
            {qty[p.id]}
          </div>
          <button
            onClick={() => inc(p.id)}
            className="text-white text-6xl px-3 font-bold hover:scale-110 hover:text-green-400 transition-all duration-300"
          >
            +
          </button>
        </div>

        <div className="text-white font-extrabold text-[19.1px] tracking-wide uppercase text-center transition-all duration-500">
          Choose Quantity
        </div>
      </div>

      <div className="text-5xl font-bold text-white mt-4 md:mt-12 transition-all duration-500">
        {p.totalSC} SC
      </div>
    </div>
  ))}
</div>


      {/* Totals */}
      
        <CheckoutPanel/>
      </div>
      <div className="mt-12 space-y-4 space-x-8">
        <div className="flex text-5xl font-bold ml-8 gap-24">
          <span>TOTAL (SC)</span>
          <span>{totalSC} SC</span>
        </div>

        <div className="flex text-5xl font-bold gap-10">
          <span>TOTAL £</span>
          <div className="border-2 border-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-green-400 rounded font-semibold">
            <div className='bg-black rounded '>
           <div className='ml-28'> {totalGBP.toFixed(2)} </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate('/ordersuccessfulpage')}
          disabled={totalSC < 2}
          className="bg-rose-600 hover:bg-rose-800 text-white font-bold py-3 px-8 rounded">
          Next
        </button>
        </div>
    </div>
  );
}

export default CheckoutPage
