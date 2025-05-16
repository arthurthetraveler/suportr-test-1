import { Icon } from "@iconify/react";
import React from "react";
import { Colors } from "../Colors";

interface CurrencyInputProps {
  label?: string;
  value: string;
  onChange: (val: string) => void;
  currency: string;
  onCurrencyPress?: () => void;
  showSelectIcon?: boolean;
  currencyFlagUrl?: string;
  isDisabled?: boolean
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  label = "You pay",
  value,
  onChange,
  currency,
  onCurrencyPress,
  showSelectIcon = true,
  currencyFlagUrl = "https://flagcdn.com/w40/gb.png",
  isDisabled = false
}) => {
  const formatNumber = (val: string) => {
    return val.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };


  return (
    <div className="flex flex-col gap-1">
      <label className=" font-semibold text-black text-lg">{label}</label>
      <div className="flex items-center  bg-white rounded-xl px-4 py-3">
        <input
          type="text"
          className="flex-1 text-2xl font-bold text-black outline-none bg-transparent pr-2"
          value={value}
          onChange={(e) => onChange(formatNumber(e.target.value))}
          placeholder="0.00"
          disabled={isDisabled}
        />
        <button
          className="flex items-center gap-2 text-lg font-bold text-black cursor-pointer"
          onClick={() => onCurrencyPress && onCurrencyPress()}
        >
          <img
            src={currencyFlagUrl} // Example flag URL
            alt="flag"
            className="w-6 md:w-8 h-6 md:h-8 rounded-[50px]"
          />
          <span>{currency}</span>
          {showSelectIcon ? (
            <Icon icon="mdi-light:chevron-down" color={Colors.primaryBlack} />
          ) : (
            <div className="w-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default CurrencyInput;
