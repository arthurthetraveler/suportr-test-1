import React, { useState, useEffect } from 'react';

export default function OrderPaymentPage() {
  const PACKS = [
    { id: 1, img: 'https://res.cloudinary.com/divh5admv/image/upload/v1744747607/imagem_2025-04-15_210644706_xmkxei.png', unitCost: 2 },
    { id: 2, img: 'https://res.cloudinary.com/divh5admv/image/upload/v1744747623/imagem_2025-04-15_210701307_rsyl5k.png', unitCost: 3 },
  ];
  const CONVERSION_RATE = 0.00084; // 1 SC to ETH
  const WALLET_ADDRESS = '0XF716368F2B31CA0FDD1FE439BB0EEFAF6B1258CD9';

  // Quantities state
  const [qty, setQty] = useState({ 1: 1, 2: 4 });
  const inc = (id) => setQty(q => ({ ...q, [id]: q[id] + 1 }));
  const dec = (id) => setQty(q => ({ ...q, [id]: Math.max(1, q[id] - 1) }));

  // Totals
  const lineTotals = PACKS.map(p => ({
    ...p,
    totalSC: p.unitCost * qty[p.id]
  }));
  const totalSC = lineTotals.reduce((sum, p) => sum + p.totalSC, 0);
  const totalETH = (totalSC * CONVERSION_RATE).toFixed(6);

  // Countdown timer
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = secs => {
    const h = String(Math.floor(secs / 3600)).padStart(2, '0');
    const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  // Order ID
  const [orderId] = useState('O56120493');

  // Copy to clipboard
  const copyAddress = () => {
    navigator.clipboard.writeText(WALLET_ADDRESS);
    alert('Address copied!');
  };

  return (
    <div className="min-h-screen bg-black text-white px-8 py-10">
      {/* Countdown */}
      <div className="mb-8">
      <p className="text-white font-bold text-lg uppercase mb-6 mt-14 mr-96 -ml-96">One more Step</p>
      <h1 className="text-8xl text-rose-600 font-extrabold mb-6">TRANSACTION PROGRESS</h1>
        <p className="text-sm uppercase">COMPLETION COUNTDOWN</p>
        <p className="text-4xl font-bold">{formatTime(timeLeft)}</p>
      </div>

      {/* Items */}
      <div className="space-y-12 mb-8">
        {lineTotals.map(p => (
          <div key={p.id} className="flex items-center justify-between">
            <img src={p.img} alt="" className="w-20 h-20 object-contain" />
            <div className="flex items-center space-x-4">
              <button onClick={() => dec(p.id)} className="text-white text-2xl px-2">−</button>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-green-400 text-white flex items-center justify-center font-bold text-xl">
                {qty[p.id]}
              </div>
              <button onClick={() => inc(p.id)} className="text-white text-2xl px-2">+</button>
            </div>
            <div className="text-2xl font-semibold">{p.totalSC} SC</div>
          </div>
        ))}
      </div>

      {/* Conversion and totals */}
      <div className="mb-8 space-y-4">
        <p className="text-lg">CONVERSION: 1 SC = {CONVERSION_RATE} ETH</p>
        <div className="flex items-center space-x-4">
          <span className="uppercase font-bold">TOTAL:</span>
          <span className="uppercase">ETH</span>
          <div className="border-2 border-green-400 rounded px-4 py-1 font-semibold">
            {totalETH}
          </div>
        </div>
        <p className="text-lg uppercase">order ID: {orderId}</p>
      </div>

      {/* Wallet address */}
      <div className="space-y-2">
        <p className="text-sm uppercase">make payment to supportr league wallet address:</p>
        <div className="flex items-center space-x-2">
          <code className="bg-gray-900 p-2 rounded font-mono break-all">{WALLET_ADDRESS}</code>
          <button onClick={copyAddress} className="text-green-400 hover:text-green-300">
            📋
          </button>
        </div>
      </div>
    </div>
  );
}
