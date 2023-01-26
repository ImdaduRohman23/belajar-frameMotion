import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const buttonVariant = {
  visible: {
    x: [20, -20, 20, -20, 0, -20, 0],
    transition: {delay: 1}
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px white",
    boxShadow: "0px 0px 8px white",
  }
}

const Home = () => {
  return (
    <motion.div 
      className="home container"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 1, duration: 2}}
    >
      <motion.h2
        animate={{}}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariant}
          whileHover='hover'
          animate='visible'
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;