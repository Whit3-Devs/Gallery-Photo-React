import React from "react";

const styles = {
  "width": "100%",
  "height": "100%",
  "border-radius": "4px"
}

export const CardsImage = ({ pathImage }) => {
  return <img src={pathImage} style={styles} alt="photos" />;
};
