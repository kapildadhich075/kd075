import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className=' flex flex-col relative h-screen text-center items-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto'>
            <h3 className=' absolute top-24  uppercase tracking-[20px] text-orange-400 text-2xl '>About</h3>
            <motion.img
                src='/SA.jpg'
                alt='SA'
                className='-mb-20 md:mb-0 flex-shrink-0 object-cover object-center w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[500px]'
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            />
            <div className = "space-y-10 px-0 md:px-10">
                <h1 className='text-4xl font-bold text-white'>Here's a Small breif</h1>
                <p className='text-white text-lg leading-relaxed text-justify'>
                    An Intermediate Programmer in Dart, ReactJs , NextJs, Java, Python, JavaScript, Flutter, Firebase.
                    A Cricketer played for clubs and my District.
                    I do Virtual Podcast with my Cousin on our Youtube Channel (The Cousin's Show).
                    An Enthusiast Photographer who loves seizing the moments, an Editor who loves to work for the post-production.
                    and a Graphic Designer who loves to work on Adobe Photoshop and Adobe Illustrator.
                </p>
            </div>
        </motion.div>
    )
}