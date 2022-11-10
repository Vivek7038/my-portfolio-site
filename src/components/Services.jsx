import React from 'react'
import { animation, delay, motion } from 'framer-motion'
import {AiFillIeCircle,AiFillAndroid,AiFillWindows} from "react-icons/ai";
const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    
    TwoAndThree : {
      opacity: 0,
      y: "-100%",
    },
    four:{
      x:"100%",
      opacity:0,
      
    },
  };
  
  return (

    <div id="services">
<h2> Services </h2>
<section>
  <motion.div className='servicesBox1' whileInView={animations.whileInView}
          initial={animations.one} >
    <h3>1+</h3>
    <p>Year experienced </p> 
  </motion.div>


  <motion.div className='servicesBox2' whileInView={animations.whileInView}
          initial={animations.TwoAndThree} >
<AiFillIeCircle/>

<span>Web Develeopemennt </span>  </motion.div>
  <motion.div className='servicesBox3'whileInView={animations.whileInView}
          initial={animations.TwoAndThree}  transition={{
            delay:0.2,
          }}>
<AiFillAndroid/>

<span>Web APP Develeopemennt </span>  </motion.div>

  <motion.div className='servicesBox4'whileInView={animations.whileInView}
          initial={animations.four}  transition={{
            delay:0.2,
          }}>
<AiFillWindows/>

<span>Desktop Develeopemennt </span>  </motion.div>
</section>




    </div>
  )
}

export default Services