import * as React from "react";
import classes from "./Featured.module.css";
import { Navigation } from "./Menu/Navigation";


export const Featured = (props) => {

  return (
      <Navigation click={(colorName) => props.clickIcon(colorName)} />
  );
};
