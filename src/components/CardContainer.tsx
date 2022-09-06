import { useContext, useEffect, useState } from "react";

import Input from "./Input";
import { TipContext } from "../context";

import userIcon from "../assets/user.svg";
import dollarIcon from "../assets/dollar.svg";
import TipRadioButtons from "./TipRadioButtons";

function CardContainer() {
  const [tipAmount, setTipAmount] = useState<number>(0.0);
  const [total, setTotal] = useState<number>(0.0);
  const [disableButton, setDisableButton] = useState<boolean>(true);

  const TipUseContext = useContext(TipContext);

  const numRegex = /^[0-9]*$/;

  const ResetData = () => {
    setTipAmount(0);
    setTotal(0);
    TipUseContext.setPrice(0);
    TipUseContext.setTip(5);
    TipUseContext.setNumOfPeople(1);
    setDisableButton(true);
  };

  useEffect(() => {
    const { price, numOfPeople, tip } = TipUseContext;

    if (price > 0 && numOfPeople >= 1) {
      setDisableButton(false);
      let amount = (price * tip) / 100 / numOfPeople;
      let total = price / numOfPeople + amount;
      setTipAmount(parseFloat(amount.toFixed(2)));
      setTotal(parseFloat(total.toFixed(2)));
    }
  }, [TipUseContext.price, TipUseContext.numOfPeople, TipUseContext.tip]);

  return (
    <div className="bg-white w-[90%] md:w-[750px] flex flex-col-reverse md:flex-row justify-between items-stretch rounded-xl mx-auto p-7">
      <div className="w-full md:w-[48%]">
        <div className="pb-2">
          <Input
            label="bill"
            icon={dollarIcon}
            value={String(TipUseContext.price)}
            onChangeFunc={(e: any) => {
              let value = e.target.value;
              if(value.match(numRegex)) TipUseContext.setPrice(value)
            }}
          />
        </div>
        <div className="py-5">
          <TipRadioButtons />
        </div>
        <div className="pt-3">
          <Input
            label="Number of people"
            icon={userIcon}
            value={String(TipUseContext.numOfPeople)}
            onChangeFunc={(e: any) => {
              let value = e.target.value;
              if(value.match(numRegex)) TipUseContext.setNumOfPeople(value)
            }}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between w-full md:w-[48%] bg-greenc-300 rounded-lg p-6">
        <div className="pt-3 pb-8">
          <div className="flex items-center justify-between pb-8">
            <div className="text-light">
              <h4 className="pb-2 text-sm">Tip Amount</h4>
              <p className="opacity-60 text-xs">/ person</p>
            </div>
            <h2 className="font-bold text-greenc-200 text-4xl">
              {`$${tipAmount === 0 ? tipAmount + ".00" : tipAmount}`}
            </h2>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-light">
              <h4 className="pb-2 text-sm">Total</h4>
              <p className="opacity-60 text-xs">/ person</p>
            </div>
            <h2 className="font-bold text-greenc-200 text-4xl">
              {`$${total === 0 ? total + ".00" : total}`}
            </h2>
          </div>
        </div>
        <button
          onClick={ResetData}
          disabled={disableButton}
          className={`uppercase block py-3 bg-greenc-200 text-black rounded-lg hover:bg-greenc-100 ${
            disableButton ? "opacity-50" : "opacity-100"
          }`}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default CardContainer;
