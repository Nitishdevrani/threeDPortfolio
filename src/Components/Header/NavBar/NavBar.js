import React from "react";
import classes from "./NavBar.module.css";
// import { motion } from "framer-motion";
import LogoComponent from "./Logo/Logo";
import BrandName from "./BrandName/BrandName";

function navbar() {
  return (
    <div className={classes.FluidBar}>
      <LogoComponent/>
      <BrandName/>
    </div>
  );
}

export default navbar;
