import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../../sanity'
import { Experience , Skill, Technology } from '../../typings'

type Props = {
    experience: Experience;
}


export default function ExperienceCard({ experience }: Props) {
    
    return (
        <article className='flex flex-col rounded-2xl items-center space-y-2 flex-shrink-0 w-[280px] md:w-[300px] xl:w-[400px] snap-center bg-[#3d3c3b] p-5
        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden
        '>
            {experience?.companyImage &&(<motion.img
                src= {urlFor(experience?.companyImage)?.url()}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-20 h-20 rounded-full object-cover xl:w-[200px] xl:h-[200px] object-center'
                alt=''
            />)}
            <div className='px-0 md:px-10'>
                <h4 className='text-3xl font-light'>{experience?.jobTitle}</h4>
                <p className=' font-bold text-xl mt-1'>{experience?.points}</p>
                <div className='flex space-x-2 my-2'>
               {(experience?.technologies?.map((technology : Technology)  => (
                  technology?.image &&  (
                    <img
                    key= {technology?._id}
                    className = 'h-10 w-10 rounded-full'
                    src = {urlFor(technology?.image)?.url()}
                    />
                 ))))}
                </div>
                <p className=' uppercase py-5 text-white'>{new Date(experience?.dateStarted).toDateString()} - {experience?.isCurrentlyWorkingHere ? "Present" : 
                new Date(experience?.dateEnded)?.toDateString()
                }</p>
                {/* <ul className=' list-disc space-y-4 ml-5 text-lg'>
                    {experience?.points && experience?.points.map((point, i ) => (
                        <li key={i} className='text-white'></li>
                    ))}
                </ul> */}
            </div>
        </article>
    )
}