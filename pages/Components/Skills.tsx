import { motion } from 'framer-motion'
import React from 'react'
import Skillcol from './Skillcol'

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div className=' h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className=' absolute top-24 uppercase tracking-[20px] text-orange-400 text-2xl'>Skills</h3>
        <h3 className=' absolute top-36 uppercase tracking-[3px] text-white text-sm'>
            Hover over the icons to see the skills
        </h3>
        <div className=' grid grid-cols-4 gap-5 overflow-hidden'>
            <Skillcol />
            <Skillcol />
            <Skillcol />
            <Skillcol />
            <Skillcol />
            <Skillcol />
            <Skillcol />
            <Skillcol />
            <Skillcol />
            <Skillcol />
            <Skillcol />
        </div>
    </motion.div>
  )
}