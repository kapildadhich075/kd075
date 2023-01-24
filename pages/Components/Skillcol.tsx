import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../../typings'
import { urlFor } from '../../sanity'

type Props = {
    directionLeft?: boolean
    skill: Skill
}

export default function Skillcol({ skill, directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
       {skill?.image  &&<motion.img
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src = {urlFor(skill?.image).url()}
        className='rounded-full border border-white object-cover
        w-12 h-12  filter group-hover:grayscale transition duration-200 ease-in-out'
        />}
        
       
        <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
        group-hover:bg-white h-12 w-12 rounded-full z-0
        '>
            <div className=' flex items-center justify-center h-full'>
                <p className=' text-xl font-bold text-orange-800 opacity-100 '>{skill?.progress}%</p>
            </div>
        </div>
    </div>
  )
}