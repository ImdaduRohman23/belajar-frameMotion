import React from 'react';
import { motion } from 'framer-motion';

const containerVariant = {
  hidden: {
    x: '100vw',
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type:'spring',
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.4
    },
  }
}

const childrenVariant = {
  hidden: {opacity: 0},
  visible: {opacity: 1},
}


const Order = ({ pizza }) => {
  return (
    <motion.div className="container order"
      variants={containerVariant}
      initial='hidden'
      animate='visible'
    >
      <h2>Thank you for your order :)</h2>
      <motion.p
        variants={childrenVariant}
      >
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div
        variants={childrenVariant}
      >
        {
          pizza.toppings.map(topping => (
            <div key={topping}>{topping}</div>
          ))
        }
      </motion.div>
    </motion.div>
  )
}

export default Order;