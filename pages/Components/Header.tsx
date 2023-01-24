import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Social } from '../../typings'

type Props = {
  socials: Social[]
}

const Header = ({ socials }: Props) => {
  return (
    <header className=' p-5 sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>

      <motion.div
        initial={{ x: -500, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}
        className='flex flex-row gap-5 items-center'
      >
        {socials?.map((social) => (
         <SocialIcon
          key = {social?._id}
          url={social?.url}
          fgColor="orange"
          bgColor="transparent"
          className='transform hover:scale-125 transition duration-200 ease-in'
        ></SocialIcon>
        ))}

      </motion.div>



      <motion.div
        initial={{ x: 500, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}
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