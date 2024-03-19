import React from 'react';
import { SocialIcon } from '@/node_modules/react-social-icons/dist/react-social-icons';
import { motion } from 'framer-motion';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex item-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className="flex flex-row items-center"
      >
            <SocialIcon 
              url="https://www.linkedin.com/in/kelly-rivas-37896a76/" 
              fgColor="#9899A8" 
              bgColor="transparent" 
            />
            <SocialIcon 
              url="https://github.com/kvrivas854" 
              fgColor="#9899A8" 
              bgColor="transparent"
            />
        </motion.div>
        <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}className="flex flex-row items-center #9899A8 cursor-pointer">
          <SocialIcon 
          className="cursor-pointer"
          network="email"
          fgColor="gray" 
          bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm #9899A8">Get In Touch</p>
        </motion.div>
    </header>
  )
}
