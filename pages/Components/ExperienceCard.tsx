import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function ExperienceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-2xl items-center space-y-2 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#3d3c3b] p-5
        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden
        '>
            <motion.img
                src='/tlr.jpeg'
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-20 h-20 rounded-full object-cover xl:w-[200px] xl:h-[200px] object-center'
                alt=''
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-3xl font-light'>Video Editor and Graphic Designer</h4>
                <p className=' font-bold text-xl mt-1'>The Lecture Room</p>
                <div className='flex space-x-2 my-2'>
                    <Image src='/abp.png'
                        className='h-10 w-10 rounded-full'
                        width={40}
                        height={40}
                        alt='Adobe Photoshop'
                    ></Image>
                </div>
                <p className=' uppercase py-5 text-white'>Started work.... - Ended....</p>
                <ul className=' list-disc space-y-4 ml-5 text-lg'>
                    <li>
                        Summary Points
                    </li>
                    <li>
                        Summary Points
                    </li>
                    <li>
                        Summary Points
                    </li>
                    <li>
                        Summary Points
                    </li>
                    <li>
                        Summary Points
                    </li>
                </ul>
            </div>
        </article>
    )
}