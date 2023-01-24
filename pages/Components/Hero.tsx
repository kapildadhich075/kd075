import Image from 'next/image'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../../sanity'
import { PageInfo } from '../../typings'
import BackgroundCircles from './BackgroundCircles'

type Props = {
    pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi, This is ${pageInfo?.name}`,
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
                    {pageInfo?.heroImage && <img src={urlFor(pageInfo?.heroImage).url()} alt="profile" className="w-full h-full object-cover" />}
                </div>
                <div className=' z-20'>
                    <h2 className=' text-md uppercase text-orange-400 pb-23 tracking-widest'>{pageInfo?.role}</h2>
                    <h1 className='p-3'>
                        <span className='text-5xl lg:text-6xl font-semibold px-10'>{text}</span>
                        <Cursor cursorColor='#fb923c'/>
                    </h1>                   
                </div>
                
            </div>
        </>
    )
}