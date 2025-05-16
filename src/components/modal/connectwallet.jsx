import { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';


export default function ConnectWalletModal({ isOpen, onClose }) {

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  
  if (!isOpen) return null;

  const wallets = [
    { name: 'WalletConnect', tag: 'QR CODE', icon: 'https://res.cloudinary.com/divh5admv/image/upload/v1746475744/walletconnect_dhxdlv.png' },
    { name: 'Crypto.com Onchain', tag: 'INSTALLED', icon: 'https://res.cloudinary.com/divh5admv/image/upload/v1746475719/crypto.com-logo_kjuozm.png' },
    { name: 'MetaMask', tag: 'INSTALLED', icon: 'https://res.cloudinary.com/divh5admv/image/upload/v1746475598/metamask_nc71ke.png' },
    { name: 'Coinbase', tag:'INSTALLED', icon: 'https://res.cloudinary.com/divh5admv/image/upload/v1746475673/coinbase-wallet-logo_c3lweh.png' },
    { name: 'All Wallets', tag: '490+', icon: 'https://res.cloudinary.com/divh5admv/image/upload/v1746476870/4dots_bbffwy.png' },
  ];

  const handleWalletClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/cryptosucess");
    }, 3000); // 3 second delay
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-gradient-to-b from-[#2e1243] to-[#12111e] w-96 rounded-xl shadow-xl overflow-hidden relative">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 text-white">
          <h2 className="text-lg font-semibold">Connect Wallet</h2>
          <button onClick={onClose}><X size={20} /></button>
        </div>
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-40">
            <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin mb-2"></div>
            <p className="text-sm">Connecting wallet...</p>
          </div>
        ) : (
          <ul className="divide-y divide-white/10">
          {wallets.map((wallet, index) => (
            <button
              key={index}
              className="w-full flex items-center justify-between px-4 py-3 text-white hover:bg-white/10 transition"
              onClick={handleWalletClick}
            >
               <div className="flex items-center space-x-3">
                <img src={wallet.icon} alt={wallet.name} className="w-6 h-6" />
                <span>{wallet.name}</span>
              </div>

              {wallet.tag && (
                <span className="text-xs bg-white/10 px-2 py-0.5 rounded-md text-white/80">
                  {wallet.tag}
                </span>
              )}
              {!wallet.tag && <ChevronRight className="text-white/40" size={16} />}

            </button>
          ))}
        </ul>
      )}
    </div>
  </div>
);
}