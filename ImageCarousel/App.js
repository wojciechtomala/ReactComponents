import './App.css';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import images from './assets/images';
function App() {
  const [width,setWidth]= useState(0);
  const carousel = useRef();
  useEffect(()=>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[]);

  return (
    <div className="App">
      <motion.h1 animate={{x:50}}>Image carousel</motion.h1>
      <motion.div className='carousel' ref={carousel} whileTap={{cursor: "grabbing"}}>
        <motion.div drag="x" dragConstraints={{right:0, left: -width}} className='inner-carousel'>
          {images.map(image =>{
            return(
              <motion.div className='item' key={image}>
                <img src={image} alt=''/>
              </motion.div>
            );
          })}
        </motion.div>

      </motion.div>
    </div>
  );
}

export default App;
