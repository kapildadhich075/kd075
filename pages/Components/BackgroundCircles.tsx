import React from 'react'

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <>
    <div className='relative flex justify-center items-center opacity-20'>
    <div className='rounded-full h-[200px] w-[200px] mt 52 animate-ping border border-orange-400 absolute'/>
    <div className='rounded-full h-[300px] w-[300px] mt 52 animate-ping border border-orange-400 absolute'/>
    <div className='rounded-full h-[500px] w-[500px] mt 52 animate-ping border border-orange-400 absolute'/>
    <div className=' rounded-full border border-white opacity-20  h-[650px] w-[650px] mt 52 animate-ping absolute'/>
    <div className='rounded-full h-[800px] w-[800px] mt 52 animate-ping border border-orange-400 absolute'/>
    </div>
    </>
  )
}