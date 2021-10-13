import React from "react";
import "../assets/css/CardsImage.css";

export const CardsImage = ({ i, dataGrid }) => {
  return <div className="size" key={i} data-grid={dataGrid}></div>;
};

