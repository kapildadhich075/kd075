import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

export default function WorkExperience({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-center mx-auto items-center'>


            <h3 className=' absolute top-24 uppercase tracking-[20px] text-orange-400 text-2xl'>
                Experience
            </h3>
            <div className=' w-max flex flex-row space-x-4 overflow-x-scroll p-10 snap-x snap-mandatory mt-24
            '>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>

        </motion.div>
    )
}