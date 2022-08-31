import { useState } from "react";

import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";

import { TipProvider } from "./context";


function App() {
  return (
    <>
      <TipProvider>
        <div className="relative flex items-center justify-center overflow-hidden w-full py-4 min-h-[calc(100vh-50px)]">
          <CardContainer />
        </div>
      </TipProvider>
      <Footer />
    </>
  );
}

export default App;
