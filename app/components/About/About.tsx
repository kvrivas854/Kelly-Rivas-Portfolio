import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
    return (
    <div>
        <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
                <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
                <motion.img
                    initial={{
                        x: -200,
                    }}
                    transition={{
                        duration: 1.2
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    viewport={{ once: true }}
                    className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
                    src="/public/img/headshot.png"
                />

                <div className="space-y-10 px-0 md:px-10">
                    <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#48BB78]">little</span> background</h4>
                    <p className="text-sm"> "Hello! I'm Kelly, a software engineer based in Charlotte, NC.
                        I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I prefer to keep learning, continue challenging myself, and do interesting things that matter.
                        
                        I've been coding for over 3 years now. As a front-end software developer I have developed for start ups and large corporations to help build and scale their companies.</p>
                </div>
        </div>
    </div>
    )
}