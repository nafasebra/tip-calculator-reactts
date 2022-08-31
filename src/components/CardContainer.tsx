import { useContext, useState } from "react";

import Input from "./Input";
import { TipContext } from "../context";

import userIcon from "../assets/user.svg";
import dollarIcon from "../assets/dollar.svg";
import TipCheckboxes from "./TipCheckboxes";

function CardContainer() {
  const [tipAmount, setTipAmount] = useState<number>(0.00);
  const [total, setTotal] = useState<number>(0.00);

  const TipUseContext = useContext(TipContext);

  return (
    <div className="bg-white w-[90%] lg:w-[800px] flex flex-col-reverse lg:flex-row justify-between items-stretch rounded-xl mx-auto p-7">
      <div className="w-full lg:w-[48%]">
        <div className="pb-2">
          <Input label="bill" icon={dollarIcon} value={String(TipUseContext.price)} onChangeFunc={(e: any) => TipUseContext.setPrice(e.target.value)}/>
        </div>
        <div className="py-5">
          <TipCheckboxes />
        </div>
        <div className="pt-3">
          <Input label="bill" icon={dollarIcon} value={String(TipUseContext.numOfPeople)} onChangeFunc={(e: any) => TipUseContext.setNumOfPeople(e.target.value)}/>
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
              {`$${tipAmount}`}
            </h2>
          </div>
        </div>
        <button className="uppercase block py-3 bg-greenc-200 text-black rounded-lg hover:bg-greenc-100">
          RESET
        </button>
      </div>
    </div>
  );
}

export default CardContainer;
