import Image from 'next/image'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '../BackgroundCircles/BackgroundCircles'

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
       words: [
        'Hi, My Name Is Kelly Rivas',
        'Girl-who-loves-yoga.tsx',
        '<AndAlsoLovesToCode />'
    ],
    loop: true,
    delaySpeed: 2000 
    })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles/>
        <Image width={32} height={32} src={"/public/images/headshot.png"} alt={''}/>
        <div>
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
            <h1>
                <span className=" text-5xl lg:text-6xl font-semibold px-10">{text}</span>
                <Cursor cursorColor='#48BB78'/>
            </h1>
            <div>
                <button className="heroButton">About</button>
                <button className="heroButton">Experience</button>
                <button className="heroButton">Skills</button>
                <button className="heroButton">Projects</button>
            </div>
        </div>
     </div>
  )
}

export default Hero