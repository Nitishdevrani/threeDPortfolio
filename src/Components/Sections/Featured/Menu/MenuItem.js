import React from "react";
import { motion } from "framer-motion";
import classes from './MenuItem.module.css';



const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const divs = ["home","projects","tech","pricing","about"];

export const MenuItem = (props) => {
  const style = { border: `2px solid ${colors[props.colorNum]}` };
  return (
      <motion.li
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className={classes.Icon} style={style} onClick={() => props.clicked(divs[props.colorNum])}/>
      </motion.li>
  );
};
