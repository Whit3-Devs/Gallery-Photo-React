import React from "react";
import { NavTitleGallery } from "./components/NavTitleGallery.js";
import { GridLayoutResponsive } from "./container/GridLayoutResponsive.js";

export const App = () => {
  return (
    <>
      <NavTitleGallery />
      <GridLayoutResponsive />
    </>
  );
};
