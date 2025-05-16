import React from 'react';

// Data for the powerpacks
const powerpacks = [
  {
    multiplier: '5X',
    boosters: '30 Boosters',
    cost: '2 SC',
    savings: '1.09 SC',
    gain: '£7.39 IN SLP VALUE',
    spendMultiplier: '3.39 X YOUR SPEND',
    earn: '3,000 SLP',
    gradient: 'from-green-400 to-purple-500',
    borderColor: 'border-green-500',
    earnBorderColor: 'border-purple-500',
  },
  {
    multiplier: '10X',
    boosters: '80 Boosters',
    cost: '3 SC',
    savings: '3.74 SC',
    gain: '£13.40 IN SLP VALUE',
    spendMultiplier: '4.50 X YOUR SPEND',
    earn: '5,000 SLP',
    gradient: 'from-purple-500 to-blue-500',
    borderColor: 'border-green-500',
    earnBorderColor: 'border-purple-500',
  },
  {
    multiplier: '20X',
    boosters: '20 Boosters',
    cost: '4 SC',
    savings: '6.49 SC',
    gain: '£20.59 IN SLP VALUE',
    spendMultiplier: '5.15 X YOUR SPEND',
    earn: '10,000 SLP',
    gradient: 'from-pink-500 to-purple-500',
    borderColor: 'border-green-500',
    earnBorderColor: 'border-purple-500',
  },
  {
    multiplier: '50X',
    boosters: '20 Boosters',
    cost: '5 SC',
    savings: '8.09 SC',
    gain: '£27.39 IN SLP VALUE',
    spendMultiplier: '5.50 X YOUR SPEND',
    earn: '15,000 SLP',
    gradient: 'from-pink-500 to-green-500',
    borderColor: 'border-green-500',
    earnBorderColor: 'border-purple-500',
  },
];

// PowerpackCard Component
const PowerpackCard = ({ powerpack }) => {
  return (
    <div className={`p-1 bg-gradient-to-r ${powerpack.gradient} rounded-lg`}>
      <div className="bg-black p-6 rounded-lg text-white">
        {/* Multiplier and Boosters */}
        <div className="text-center">
          <h3 className="text-3xl font-bold">SLP Multiplier {powerpack.multiplier}</h3>
          <p className="text-lg mt-2">{powerpack.boosters}</p>
        </div>

        {/* Cost */}
        <div className="mt-4 text-center">
          <p className="text-2xl font-bold">{powerpack.cost}</p>
        </div>

        {/* Buy Button */}
        <div className="mt-4 flex justify-center">
          <button
            className="bg-green-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-600"
            onClick={() => console.log(`Buying Powerpack ${powerpack.multiplier}`)}
          >
            BUY
          </button>
        </div>

        {/* Descriptions */}
        <div className="mt-6 space-y-4">
          {/* Savings and Potential Gain */}
          <div className={`p-4 border-2 ${powerpack.borderColor} rounded-lg`}>
            <p className="text-sm">YOU SAVE: {powerpack.savings}</p>
            <p className="text-sm">POTENTIAL GAIN: {powerpack.gain}</p>
            <p className="text-xs mt-1">{powerpack.spendMultiplier}</p>
          </div>

          {/* Earn Section */}
          <div className={`p-4 border-2 ${powerpack.earnBorderColor} rounded-lg`}>
            <p className="text-sm font-bold">EARN: {powerpack.earn} with this purchase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// PowerpackSection Component
const PowerpackSection = () => {
  return (
    <div className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Powerpacks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {powerpacks.map((powerpack, index) => (
            <PowerpackCard key={index} powerpack={powerpack} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PowerpackSection;