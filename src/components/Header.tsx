import React from 'react'
import { SocialIcon } from 'react-social-icons';
type Props = {}
import { motion } from 'framer-motion';
import Link from 'next/link';
function Header({}: Props) {

  return (
    <header className='sticky top-0 md:top-1 p-5 sm:p-2 flex items-start justify-between max-w-7xl mx-auto xl:items-center overflow-hidden z-20'>
        <motion.div
            initial={{
              x:-500,
              opacity:0,
              scale:0.5
            }}
            animate={{
              x:0,
              opacity:1,
              scale:1,
            }}
            transition={{
              duration:1.4
            }}
            className='flex flex-row items-center'>
                <SocialIcon
                url='https://github.com/skr18'
                fgColor='#d6d4d4'
                bgColor='transparent'
                target='_blank'
                />
                <SocialIcon
                url='https://www.linkedin.com/in/sujeet-kumar-rath-43a273225/'
                fgColor='#d6d4d4'
                bgColor='transparent'
                target='_blank'
                />
                <SocialIcon
                url='https://leetcode.com/Sujeet_18/'
                fgColor='#d6d4d4'
                bgColor='transparent'
                target='_blank'
                 />
                <SocialIcon
                url='https://www.instagram.com/sujeetkumarrath/'
                fgColor='#d6d4d4'
                bgColor='transparent'
                target='_blank'
                />
        </motion.div>
        <motion.div 
            initial={{
              x:500,
              opacity:0,
              scale:0.5
            }}
            animate={{
              x:0,
              opacity:1,
              scale:1,
            }}
            transition={{
              duration:1.4
            }}
            className='flex flex-row items-center text-gray-200 cursor-pointer'>
              <Link href="https://drive.google.com/drive/folders/1qZjbWu5yK4XxxSLeRr8mIVBKFSFogu4J?usp=sharing"
                    target="_blank"
                    className='flex flex-row items-center'>
                  <p className="uppercase hidden md:inline-flex text-sm text-gray-200  hover:text-gray-400 pr-3 xl:text-base sm:text-xs ">Resume</p>
             </Link>
              <Link href="https://drive.google.com/drive/folders/1xBwNJxPnkTzkQop0xrQc_bBQOMIMs29g?usp=sharing"
                    target="_blank"
                    className='flex flex-row items-center'>
                  <p className="uppercase hidden md:inline-flex text-sm text-gray-200  hover:text-gray-400 pr-3 xl:text-base sm:text-xs ">Certificates</p>
             </Link>
              <Link href='#contact' className='flex flex-row items-center'>
                <SocialIcon
                className="cursor-pointer"
                network='email'
                fgColor='#d6d4d4'
                bgColor='transparent'
                />
                <p className="uppercase hidden md:inline-flex text-sm text-gray-200 hover:text-gray-400">Get In Touch</p>
              </Link>
        </motion.div>

    </header>
  )
}

export default Header

