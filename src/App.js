import React, { useState } from "react";
import Categories from "./screens/Categories";
import Dashboard from "./screens/Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import useApp from "./hooks/useApp";

function App() {
  const { colorMode, setColorMode } = useApp();
  const [activeScreen, setActiveScreen] = useState("dashboard");

  const toggleColorMode = () => {
    colorMode === "light" ? setColorMode("dark") : setColorMode("light");
  };

  const tabColorClass = (screen) => {
    return activeScreen === screen
      ? "bg-brand-secondary text-white dark:bg-brand-action-deep"
      : "bg-[#F6F6F6] text-black dark:bg-slate-600 dark:text-slate-300";
  };

  return (
    <div className="bg-slate-300 dark:bg-slate-800 h-screen">
      <div className="container h-[100%]">
        <div className="pt-3 pb-3 flex justify-end">
          <div className="flex flex-wrap gap-3">
            <div
              className={`flex items-center justify-center 
              ${tabColorClass(
                "dashboard"
              )} p-3 cursor-pointer rounded-lg hover:bg-brand-secondary hover:text-white`}
              onClick={() => setActiveScreen("dashboard")}
            >
              <span>
                <FontAwesomeIcon icon={faChartBar} /> Dashboard
              </span>
            </div>
            <div
              className={`flex items-center justify-center 
              ${tabColorClass(
                "categories"
              )} p-3 cursor-pointer rounded-lg hover:bg-brand-secondary hover:text-white`}
              onClick={() => setActiveScreen("categories")}
            >
              <span>Categories</span>
            </div>
            <div
              className={`flex items-center justify-center 
              ${tabColorClass(
                "transactions"
              )} p-3 cursor-pointer rounded-lg hover:bg-brand-secondary hover:text-white`}
              onClick={() => setActiveScreen("transactions")}
            >
              <span>Transactions</span>
            </div>
            <button>
              <FontAwesomeIcon
                icon={faLightbulb}
                size="xl"
                className={`${
                  colorMode === "dark" ? "text-amber-400" : "text-black"
                }`}
                onClick={toggleColorMode}
              />
            </button>
          </div>
        </div>
        <div className="p-3 bg-white dark:bg-gray-700 rounded-lg h-[90vh]">
          {activeScreen === "dashboard" && (
            <div id="dashboard">
              <Dashboard />
            </div>
          )}
          {activeScreen === "categories" && (
            <div id="categories">
              <Categories />
            </div>
          )}
          {activeScreen === "transactions" && (
            <div id="dashboard">
              <p>Transactions</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
