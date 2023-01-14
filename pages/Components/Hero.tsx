import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            'Hi, This is Kapil Dadhich',
            'Developer',
            'Graphic-Designer',
            'Video-Editor',
            'Creator'
        ],
        loop: true,
        delaySpeed: 1000,
    })
    return (
        <>
            <div className=' h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
                <BackgroundCircles></BackgroundCircles>
                <div className="mx-auto bg-gradient-to-b from-orange-400 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
                    <Image src='/kd.png' layout='fill' objectFit='contain' alt='' />
                </div>
                <div className=' z-20'>
                    <h2 className=' text-md uppercase text-orange-400 pb-23 tracking-widest'>Tech and Sports Enthusiasts</h2>
                    <h1 className='p-3'>
                        <span className='text-5xl lg:text-6xl font-semibold px-10'>{text}</span>
                        <Cursor cursorColor='#fb923c'/>
                    </h1>                   
                </div>
                
            </div>
        </>
    )
}