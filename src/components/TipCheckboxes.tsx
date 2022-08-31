import {useContext} from "react";
import { TipContext } from "../context";

function TipCheckboxes() {
   const TipUseContext = useContext(TipContext);

  return (
    <>
      <p className="pb-1 text-gray-600 text-sm">Select top %</p>
      <div className="gap-3 grid grid-cols-3 grid-rows-2">
        <div>
          <input
            type="radio"
            id="5"
            name="tax"
            value="5"
            onChange={(e) => TipUseContext.setTip(Number(e.target.value))}
            className="hidden peer"
            required
            checked
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
            onChange={(e) => TipUseContext.setTip(Number(e.target.value))}
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
            onChange={(e) => TipUseContext.setTip(Number(e.target.value))}
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
            onChange={(e) => TipUseContext.setTip(Number(e.target.value))}
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
            onChange={(e) => TipUseContext.setTip(Number(e.target.value))}
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
    </>
  );
}

export default TipCheckboxes;
