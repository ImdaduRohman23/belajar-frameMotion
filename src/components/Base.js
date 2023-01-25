import React from 'react';
import { Link } from 'react-router-dom';
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
      delay:0.5, 
      type:'tween'}
  }
}

const nextVariant = {
  hidden: {x: '-100vw'},
  visible: {
    x: 0,
    transition: {type:'spring', stiffness:120}
  }
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li 
              key={base} 
              onClick={() => addBase(base)}
              whileHover={{scale:1.3, originX: 0, color: '#f8e112'}}
              transition={{type: 'spring', stiffness: 300}}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
        variants={nextVariant}
          // initial="hidden"
          // animate="visible"
          // initial dan animate tidak perlu ditulis lagi karena sudang iclude ke parentnya
        >
          <Link to="/toppings">
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px white",
                boxShadow: "0px 0px 8px white",
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;