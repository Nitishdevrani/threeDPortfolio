import React from 'react';
import classes from './Logo.module.css';
import { motion } from "framer-motion";
import Logo from "../../../../media/logo.png";

function logo() {
  return (
        <motion.div
          className={classes.LogoSpace}
          animate={{ scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                   }}
          transition = {{
            duration : 6,
            ease : "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            loop : Infinity
          }}>
                <img  src={Logo} className={classes.Logo} alt="Logo"/>
        </motion.div>
  );
}

export default logo;
