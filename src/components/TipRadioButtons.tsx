import { ChangeEvent, FormEvent, useContext } from "react";
import { TipContext } from "../context";

function TipRadioButtons() {
  const TipUseContext = useContext(TipContext);

  const onChangeCustomTip = (e: ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.currentTarget.value);
    if (value > 0) TipUseContext.setTip(Number(value));
    else TipUseContext.setTip(5); // default value
  };

  return (
    <>
      <p className="pb-1 text-gray-600 text-sm">Select top %</p>
      <div className="gap-3 grid grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2">
        <div>
          <input
            onChange={(e) => TipUseContext.setTip(Number(e.target.value))}
            type="radio"
            id="tip5"
            name="tip"
            value="5"
            className="hidden peer"
            checked={TipUseContext.tip === 5}
          />
          <label
            htmlFor="tip5"
            className="flex justify-center items-center p-3 text-white bg-greenc-300 rounded-lg border cursor-pointer peer-checked:bg-greenc-200 font-bold hover:text-gray-600 hover:bg-greenc-100 text-xl select-none"
          >
            5%
          </label>
        </div>
        <div>
          <input
            onChange={(e) => TipUseContext.setTip(Number(e.target.value))}
            type="radio"
            id="tip10"
            name="tip"
            value="10"
            className="hidden peer"
            checked={TipUseContext.tip === 10}
          />
          <label
            htmlFor="tip10"
            className="flex justify-center items-center p-3 text-white bg-greenc-300 rounded-lg border cursor-pointer peer-checked:bg-greenc-200 font-bold hover:text-gray-600 hover:bg-greenc-100 text-xl select-none"
          >
            10%
          </label>
        </div>
        <div>
          <input
            onChange={(e) => TipUseContext.setTip(Number(e.target.value))}
            type="radio"
            id="tip15"
            name="tip"
            value="15"
            className="hidden peer"
            checked={TipUseContext.tip === 15}
          />
          <label
            htmlFor="tip15"
            className="flex justify-center items-center p-3 text-white bg-greenc-300 rounded-lg border cursor-pointer peer-checked:bg-greenc-200 font-bold hover:text-gray-600 hover:bg-greenc-100 text-xl select-none"
          >
            15%
          </label>
        </div>
        <div>
          <input
            onChange={(e) => TipUseContext.setTip(Number(e.target.value))}
            type="radio"
            id="tip25"
            name="tip"
            value="25"
            className="hidden peer"
            checked={TipUseContext.tip === 25}
          />
          <label
            htmlFor="tip25"
            className="flex justify-center items-center p-3 text-white bg-greenc-300 rounded-lg border cursor-pointer peer-checked:bg-greenc-200 font-bold hover:text-gray-600 hover:bg-greenc-100 text-xl select-none"
          >
            25%
          </label>
        </div>
        <div>
          <input
            onChange={(e) => TipUseContext.setTip(Number(e.target.value))}
            type="radio"
            id="tip50"
            name="tip"
            value="50"
            className="hidden peer"
            checked={TipUseContext.tip === 50}
          />
          <label
            htmlFor="tip50"
            className="flex justify-center items-center p-3 text-white bg-greenc-300 rounded-lg border cursor-pointer peer-checked:bg-greenc-200 font-bold hover:text-gray-600 hover:bg-greenc-100 text-xl select-none"
          >
            50%
          </label>
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => onChangeCustomTip(e)}
            placeholder="custom"
            className="w-full h-full py-3 outline-1 outline-greenc-200 px-5 font-semibold text-xl text-center rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </>
  );
}

export default TipRadioButtons;
