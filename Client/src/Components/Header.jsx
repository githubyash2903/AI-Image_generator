import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';
const Header = () => {

  const {user , setShowLogin} = useContext(AppContext);
  const navigate = useNavigate();
  const onClickHandler = () => {
    if(user){
      navigate('/result')
    }
    else{
      setShowLogin(true);
    }
  }
  return (
    <motion.div 
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}

    className='flex flex-col items-center justify-center text-center my-20'>
      <motion.div 
      
        initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      
      className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
        <p>Best text to image generator </p>
          <img src={assets.star_icon} alt="" />
      </motion.div>
      <motion.h1 
       
      initial= {{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{  delay: 0.4 ,duration: 2, }}

      className=' text-4xl max-w-[500px] sm:text-6xl sm:max-w[550px] mt-10 text-center'>Turn text to <span className=' text-blue-600'
      >image </span>in seconds.</motion.h1>

      <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      
      className='text-center max-w-xl mx-auto mt-5'> Unleash your creativity with AI. Turn your imagination into visual art in seconds -  just type, and wathc the magic happen. </motion.p>

      <motion.button  onClick={onClickHandler}
      
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ default: { duration: 0.5 }, delay: 0.8 , duration: 1 }}
      
      className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full cursor-pointer'>Generate Images 
        <img className='h-6' src={assets.star_group} alt="" />
      </motion.button>

      <motion.div 
      
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      
      
      className='flex flex-wrap justify-center gap-3 mt-10'>
        {Array(6).fill('').map((item, index) => (
          <motion.img 
          
          whileHover={{ scale: 1.05, duration: 0.1 }}
          
          
          key={index} className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' src={  index % 2===0 ? assets.sample_img_2 :assets.sample_img_1} alt='' width={70}/>
        ))}
      </motion.div>
       
       <motion.p
       
       initial= {{opacity:0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
       
       className='mt-2 text-neutral-600 '>Generated images from imagify</motion.p>
 


    </motion.div>
  )
}

export default Header 