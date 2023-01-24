import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div 
      className="home container"
      animate={{rotate: 360}}
    >
      <motion.h2
        animate={{x: 300, fontSize: 50, }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button 
          animate={{scale: 2}}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;