import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import classes from "../Featured.module.css";



export const Navigation = (props) => (
  <div className={classes.DominantDiv}>
  <motion.ul>
    {itemIds.map(i => (
      <MenuItem colorNum={i} key={i} clicked={(name) => props.click(name)}/>
    ))}
  </motion.ul>
  </div>
);

const itemIds = [0, 1, 2, 3, 4];
