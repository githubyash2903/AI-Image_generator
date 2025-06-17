import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
const Description = () => {
  return (
    <motion.div 
       initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    
    
    
    className='flex flex-col items-center justify-center  my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
        <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg' />
            <div>
                <h2 className='text-3xl font-medium max-wlg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
                <p className='text-gray-600 mb-4 '>An AI image generator website transforms text prompts into stunning visuals using deep learning algorithms. It enables artists, designers, and enthusiasts to create unique, high-quality images effortlessly, fueling creativity and innovation.
</p>
<p className='text-gray-600'>An AI image generator website transforms text prompts into stunning digital artwork using advanced algorithms. It provides users with an intuitive interface to create high-quality visuals, whether for professional design, artistic exploration, or social media content. These platforms offer customization options, style variations, and high-resolution outputs, empowering creators to bring their imagination to life effortlessly. Ideal for designers, marketers, and hobbyists, AI-generated images revolutionize digital creativity and artistic expression.
</p>
            </div>
            
        </div>

    </motion.div>
  )
}

export default Description