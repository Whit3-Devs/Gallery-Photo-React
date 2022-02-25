import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { dataImages } from "../data/directionImages";
import { CardsImage } from "../components/CardsImage";

const ResponsiveGridLayout = WidthProvider(Responsive);

let contadorDeSecuencia = 0;
let contadorPosicionY = 0;
let contadorPosicionX = 0;

const styles = {
  "margin-top": "80px",
  "background-color": "rgb(46,46,46)",
  "background-image":
  "linear-gradient(180deg, rgba(46,46,46,1) 0%, rgba(34,34,34,0.9752275910364145) 25%, rgba(101,101,101,0.9500175070028011) 50%, rgba(124,126,130,0.9500175070028011) 75%, rgba(246,246,246,1) 100%)",
};

export const GridLayoutResponsive = () => {
  return (
    <ResponsiveGridLayout
      style={styles}
      className="layout"
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >
      {dataImages.map((direction, key) => {
        if (contadorDeSecuencia === 4) {
          contadorDeSecuencia = 0;
          contadorPosicionY += 2;
          contadorPosicionX = 0;
        }
        if (contadorDeSecuencia !== 0) {
          contadorPosicionX += 3;
        }
        contadorDeSecuencia += 1;
        return (
          <div
            key={key}
            data-grid={{
              w: 3,
              h: 2,
              x: contadorPosicionX,
              y: contadorPosicionY,
            }}
          >
            <CardsImage pathImage={direction} key={key} />
          </div>
        );
      })}
    </ResponsiveGridLayout>
  );
};
