import { useContext, useEffect, useState } from "react";

import Input from "./Input";
import { TipContext } from "../context";

import userIcon from "../assets/user.svg";
import dollarIcon from "../assets/dollar.svg";
import TipCheckboxes from "./TipCheckboxes";

function CardContainer() {
  const [tipAmount, setTipAmount] = useState<number>(0.0);
  const [total, setTotal] = useState<number>(0.0);

  const TipUseContext = useContext(TipContext);

  const ResetData = () => {
    TipUseContext.setPrice(0);
    TipUseContext.setTip(5);
    TipUseContext.setNumOfPeople(1);
  };

  useEffect(() => {
    const {price, numOfPeople, tip} = TipUseContext;

    if(price > 0 && numOfPeople >= 1) {
      setTipAmount((price * tip / 100) / numOfPeople);
      setTotal((price / numOfPeople) + tipAmount);
      console.log('tipamount: ' + tipAmount + ' total: ' + total);
    }
  }, [TipUseContext.price, TipUseContext.numOfPeople, TipUseContext.tip])

  return (
    <div className="bg-white w-[90%] lg:w-[800px] flex flex-col-reverse lg:flex-row justify-between items-stretch rounded-xl mx-auto p-7">
      <div className="w-full lg:w-[48%]">
        <div className="pb-2">
          <Input
            label="bill"
            icon={dollarIcon}
            value={String(TipUseContext.price)}
            onChangeFunc={(e: any) => TipUseContext.setPrice(e.target.value)}
          />
        </div>
        <div className="py-5">
          <TipCheckboxes />
        </div>
        <div className="pt-3">
          <Input
            label="bill"
            icon={dollarIcon}
            value={String(TipUseContext.numOfPeople)}
            onChangeFunc={(e: any) =>
              TipUseContext.setNumOfPeople(e.target.value)
            }
          />
        </div>
      </div>
      <div className="flex flex-col justify-between w-full lg:w-[48%] bg-greenc-300 rounded-lg p-6">
        <div>
          <div className="flex items-center justify-between pb-8">
            <div className="text-light">
              <h4 className="pb-2 text-sm">Tip Amount</h4>
              <p className="opacity-60 text-xs">/ person</p>
            </div>
            <h2 className="font-bold text-greenc-200 text-4xl">
              {`$${tipAmount}`}
            </h2>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-light">
              <h4 className="pb-2 text-sm">Total</h4>
              <p className="opacity-60 text-xs">/ person</p>
            </div>
            <h2 className="font-bold text-greenc-200 text-4xl">
              {`$${total}`}
            </h2>
          </div>
        </div>
        <button
          onClick={ResetData}
          className="uppercase block py-3 bg-greenc-200 text-black rounded-lg hover:bg-greenc-100"
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default CardContainer;
