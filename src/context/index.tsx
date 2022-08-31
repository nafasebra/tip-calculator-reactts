import { createContext, useState } from "react";

type propType = {
  children: JSX.Element[];
};

type contextType = {
  price: number;
  tip: number;
  numOfPeople: number;
  setPrice: (a: number) => void;
  setTip: (a: number) => void;
  setNumOfPeople: (a: number) => void;
};

export const tipContext = createContext<contextType>({
  price: 0,
  tip: 5,
  numOfPeople: 1,
  setPrice: () => {},
  setTip: () => {},
  setNumOfPeople: () => {},
});

export const tipProvider = ({ children }: propType) => {
  const [price, setPrice] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);
  const [numOfPeople, setNumOfPeople] = useState<number>(0);

  return (
    <tipContext.Provider
      value={{ price, setPrice, tip, setTip, numOfPeople, setNumOfPeople }}
    >
      {children}
    </tipContext.Provider>
  );
};
