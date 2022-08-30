function CardContainer() {
  return (
    <div className="bg-white w-[90%] lg:w-[800px] flex flex-col-reverse lg:flex-row justify-between items-stretch rounded-xl mx-auto p-7">
      <div className="w-full lg:w-[48%]">
        <div className="pb-2">
          <label className="block pb-1 text-gray-600 text-sm" htmlFor="txtBill">bill</label>
          <div className="relative">
            <input
              type="text"
              className="w-full py-3 outline-1 outline-green-200 pl-10 pr-5 font-semibold text-right rounded-lg bg-gray-100"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 absolute top-3 left-2 text-gray-400"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
              <path d="M12 3v3m0 12v3" />
            </svg>
          </div>
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
                className="flex justify-center items-center p-3 text-white bg-greenc-300 rounded-lg border cursor-pointer peer-checked:bg-greenc-200 font-bold hover:text-gray-600 hover:bg-gray-100"
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
                className="flex justify-center items-center p-3 text-white bg-greenc-300 rounded-lg border cursor-pointer peer-checked:bg-greenc-200 font-bold hover:text-gray-600 hover:bg-gray-100"
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
                className="flex justify-center items-center p-3 text-white bg-greenc-300 rounded-lg border cursor-pointer peer-checked:bg-greenc-200 font-bold hover:text-gray-600 hover:bg-gray-100"
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
                className="flex justify-center items-center p-3 text-white bg-greenc-300 rounded-lg border cursor-pointer peer-checked:bg-greenc-200 font-bold hover:text-gray-600 hover:bg-gray-100"
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
                className="flex justify-center items-center p-3 text-white bg-greenc-300 rounded-lg border cursor-pointer peer-checked:bg-greenc-200 font-bold hover:text-gray-600 hover:bg-gray-100"
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
          <label className="block pb-1 text-gray-600 text-sm" htmlFor="txtBill">Number of people</label>
          <div className="relative">
            <input
              type="text"
              className="w-full py-3 outline-1 outline-green-200 pl-10 pr-5 font-semibold text-right rounded-lg bg-gray-100"
            />
            <svg className="w-6 h-6 text-gray-400 absolute top-3 left-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
          </div>
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
