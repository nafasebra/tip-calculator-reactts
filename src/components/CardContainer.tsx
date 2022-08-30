function CardContainer() {
  return (
    <div className="bg-white w-[90%] lg:w-[800px] flex flex-col-reverse lg:flex-row justify-center rounded-xl mx-auto p-8">
      <div className="w-full lg:w-[50%] mx-auto p-5">
        
      </div>
      <div className="flex flex-col justify-between h-full w-full lg:w-[50%] mx-auto bg-greenc-300 rounded-lg p-5">
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
