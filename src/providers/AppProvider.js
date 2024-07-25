import React, { createContext, useEffect, useState } from "react";
import Storage from "../utils/Storage";

export const AppContext = createContext(undefined);

export const AppProvider = ({ children }) => {
  //Initiates context states
  const [categoriesData, setCategoriesData] = useState(null);
  const [transactionsData, setTransactionsData] = useState(null);
  const [colorMode, setColorMode] = useState("light");

  useEffect(() => {
    setStorageData();
  }, []);

  // Get and set storage data in context states
  const setStorageData = () => {
    const storedCategoriesData = localStorage.getItem("categoriesData");
    const storedTransactionsData = localStorage.getItem("transactionsData");

    if (!categoriesData && storedCategoriesData) {
      setCategoriesData(JSON.parse(storedCategoriesData).reverse());
    } else {
      localStorage.setItem("categoriesData", JSON.stringify([]));
      setCategoriesData([]);
    }

    if (!transactionsData && storedTransactionsData) {
      setTransactionsData(JSON.parse(storedTransactionsData).reverse());
    } else {
      localStorage.setItem("transactionsData", JSON.stringify([]));
      setTransactionsData([]);
    }
  };

  return (
    <div className={colorMode}>
      <AppContext.Provider
        value={{
          categoriesData,
          setCategoriesData,
          transactionsData,
          setTransactionsData,
          colorMode,
          setColorMode,
          categoryStorage: new Storage("categoriesData"),
          transactionStorage: new Storage("transactionsData"),
        }}
      >
        {children}
      </AppContext.Provider>
    </div>
  );
};
