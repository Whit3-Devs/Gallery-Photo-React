import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "../assets/css/CardsImage.css";
let directionImages = [
    "/images/Atarde-1.JPG",
    "./images/Natatu-3.JPG",
    "./assets/images/Ra-10.JPG",
    "./assets/images/resistencia.JPG",
    "./assets/images/sili-1.JPG",
    "./assets/images/sin título-3.JPG",
    "../assets/images/amanecer-4.JPG",
    "../assets/images/amanecer-1.JPG",
    "../assets/images/amanecer-7.JPG",
    "../assets/images/Atarde-5.JPG",
    "../assets/images/Ra-11.JPG",
    "../assets/images/Ra-6.JPG",
    "../assets/images/DSC01447.JPG",
    "../assets/images/Ra-12.JPG",
    "../assets/images/sili-6.JPG",
    "../assets/images/sin título-5.JPG",
    "../assets/images/amanecer-3.JPG",
    "../assets/images/Atarde-2.JPG",
    "../assets/images/DSC01518.JPG",
    "../assets/images/Ra-3.JPG",
    "../assets/images/amanecer-5.JPG",
    "../assets/images/Atarde-6.JPG",
    "../assets/images/amanecer-6.JPG",
    "../assets/images/DSC01544.JPG",
    "../assets/images/Ra-8.JPG",
    "../assets/images/Atarde-7.JPG",
    "../assets/images/sin título-8.JPG",
    "../assets/images/Atarde-9.JPG",
    "../assets/images/Ra-5.JPG",
    "../assets/images/Natatu-5.JPG",
    "../assets/images/amanecer-2.JPG",
    "../assets/images/DSC01538.JPG"
];


const ResponsiveGridLayout = WidthProvider(Responsive);
let contador = 0;
let contadorDeSecuencia = 0;
let contadorPosicionY = 0;
let contadorPosicionX = 0;

export const GridLayoutResponsive = () => {
  return (
    <ResponsiveGridLayout
      className="layout"
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >
    {directionImages.map((direction) => {
        contador += 1;
        if (contadorDeSecuencia === 4) {
          contadorDeSecuencia = 0;
          contadorPosicionY += 2;
          contadorPosicionX = 0;
        }

        if (contadorDeSecuencia !== 0) {
          contadorPosicionX += 3;
        }
        contadorDeSecuencia += 1;
    return (<div key={contador}
       className={`size${contador}`}
       data-grid={{ w: 3, h: 2, x: contadorPosicionX, y: contadorPosicionY}}
     ></div>)
    
    })}
    </ResponsiveGridLayout>
)
};

