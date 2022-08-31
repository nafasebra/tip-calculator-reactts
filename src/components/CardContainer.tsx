import { useContext } from "react";

import Input from "./Input";
import { TipContext } from "../context";

import userIcon from "../assets/user.svg";
import dollarIcon from "../assets/dollar.svg";

function CardContainer() {
  const TipUseContext = useContext(TipContext);

  return (
    <div className="bg-white w-[90%] lg:w-[800px] flex flex-col-reverse lg:flex-row justify-between items-stretch rounded-xl mx-auto p-7">
      <div className="w-full lg:w-[48%]">
        <div className="pb-2">
          <Input label="bill" icon={dollarIcon} value={String(TipUseContext.price)} onChangeFunc={(e: any) => TipUseContext.setPrice(e.target.value)}/>
        </div>
        <div className="py-5">
          <p className="pb-1 text-gray-600 text-sm">Select top %</p>
          <div className="gap-3 grid grid-cols-3 grid-rows-2">
            <div>
              <input
                type="radio"
                id="5"
                name="tax"
                value="5"
                className="hidden peer"
                required
              />
              <label
                htmlFor="5"
                className="flex justify-center items-center p-3 text-white bg-greenc-300 rounded-lg border cursor-pointer peer-checked:bg-greenc-200 font-bold hover:text-gray-600 hover:bg-greenc-100 text-xl"
              >
                5%
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="10"
                name="tax"
                value="10"
                className="hidden peer"
                required
              />
              <label
                htmlFor="10"
                className="flex justify-center items-center p-3 text-white bg-greenc-300 rounded-lg border cursor-pointer peer-checked:bg-greenc-200 font-bold hover:text-gray-600 hover:bg-greenc-100 text-xl"
              >
                10%
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="15"
                name="tax"
                value="15"
                className="hidden peer"
                required
              />
              <label
                htmlFor="15"
                className="flex justify-center items-center p-3 text-white bg-greenc-300 rounded-lg border cursor-pointer peer-checked:bg-greenc-200 font-bold hover:text-gray-600 hover:bg-greenc-100 text-xl"
              >
                15%
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="25"
                name="tax"
                value="25"
                className="hidden peer"
                required
              />
              <label
                htmlFor="25"
                className="flex justify-center items-center p-3 text-white bg-greenc-300 rounded-lg border cursor-pointer peer-checked:bg-greenc-200 font-bold hover:text-gray-600 hover:bg-greenc-100 text-xl"
              >
                25%
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="50"
                name="tax"
                value="50"
                className="hidden peer"
                required
              />
              <label
                htmlFor="50"
                className="flex justify-center items-center p-3 text-white bg-greenc-300 rounded-lg border cursor-pointer peer-checked:bg-greenc-200 font-bold hover:text-gray-600 hover:bg-greenc-100 text-xl"
              >
                50%
              </label>
            </div>
            <div>
              <input
                type="text"
                className="w-full py-3 outline-1 outline-green-200 px-5 font-semibold text-center rounded-lg bg-gray-100"
              />
            </div>
          </div>
        </div>
        <div className="pt-3">
          <Input label="bill" icon={dollarIcon} value={String(TipUseContext.numOfPeople)} onChangeFunc={(e: any) => TipUseContext.setNumOfPeople(e.target.value)}/>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full lg:w-[48%] bg-greenc-300 rounded-lg p-5">
        <div>
          <div className="flex items-center justify-between pb-7">
            <div className="text-light">
              <h4 className="pb-2 text-sm">Tip Amount</h4>
              <p className="opacity-70 text-xs">/ person</p>
            </div>
            <h2 className="font-bold text-greenc-200 text-5xl">$0.00</h2>
          </div>
          <div className="flex items-center justify-between pb-7">
            <div className="text-light">
              <h4 className="pb-2 text-sm">Total</h4>
              <p className="opacity-70 text-xs">/ person</p>
            </div>
            <h2 className="font-bold text-greenc-200 text-5xl">$0.00</h2>
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
