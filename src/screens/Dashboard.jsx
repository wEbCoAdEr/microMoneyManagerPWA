import React from "react";
import useApp from "../hooks/useApp";

function Dashboard() {
  const { categoriesData } = useApp();
  return (
    <div>
      {/* {categoriesData.map((category) => (
        <div key={category.id}>{category.name}</div>
      ))} */}
    </div>
  );
}

export default Dashboard;
