import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../../typings'
import { urlFor } from '../../sanity'

type Props = {
    pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className=' flex flex-col relative h-screen text-center items-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto'>
            <h3 className=' absolute top-24  uppercase tracking-[20px] text-orange-400 text-2xl '>About</h3>
           {pageInfo?.profilePic &&<motion.img
                src= {urlFor(pageInfo?.profilePic).url()}
                alt='Kapil Dadhich'
                className='-mb-20 md:mb-0 flex-shrink-0 object-cover object-center w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[500px]'
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            />}
            <div className="space-y-10 px-0 md:px-10">
                <h1 className='text-4xl font-bold text-white'>Here's a Small breif</h1>
                <p className='text-white text-lg leading-relaxed text-justify'>
                    {pageInfo?.backgroundInformation}
                </p>
            </div>
        </motion.div>
    )
}