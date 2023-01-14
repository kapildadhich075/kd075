import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion} from 'framer-motion'
import Link from 'next/link'



const Header = () => {
  return (
    <header className=' p-5 sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>

      <motion.div
        initial={{ x: -500, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}
         className='flex flex-row gap-5 items-center'
      >
        <SocialIcon url="https://www.linkedin.com/in/kapil-dadhich-2440a1158"
        fgColor="orange"
        bgColor="transparent"
        className='transform hover:scale-125 transition duration-200 ease-in'
        ></SocialIcon>
        <SocialIcon url="https://www.youtube.com/channel/UCcSzbtuvy4g5jyz-TLpeuaw"
        fgColor="orange"
        bgColor="transparent"
        className='transform hover:scale-125 transition duration-200 ease-in'
        ></SocialIcon>
        <SocialIcon url="https://www.instagram.com/075kapildadhich/"
        fgColor="orange"
        bgColor="transparent"
        className='transform hover:scale-125 transition duration-200 ease-in'
        ></SocialIcon>
        <SocialIcon url="https://github.com/kapildadhich075"
        fgColor="orange"
        bgColor="transparent"
        className='transform hover:scale-125 transition duration-200 ease-in'
        ></SocialIcon>
      </motion.div>

      
      
      <motion.div 
      initial={{x: 500, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 1}}
      >
      <div className=' flex flex-row gap-2 items-center cursor-pointer transform hover:scale-125 transition duration-200 ease-out'>
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='orange'
          url='#contact'
          bgColor="transparent"
        />
        <Link href='#contact'>
        <p className='uppercase hidden md:inline-flex text-l text-white font-bold'>GET IN TOUCH</p>
        </Link>
      </div>
      </motion.div>
      
    </header>
  )
}

export default Header