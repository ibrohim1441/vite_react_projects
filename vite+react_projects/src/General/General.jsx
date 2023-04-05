import React from "react";
import Home from "../Components/home/homePart/Home";
import Header from "../Components/home/header/Header";

const General = () => {
  return (
    <div className="flex">
      <Header />
      <Home />
    </div>
  );
};

export default General;