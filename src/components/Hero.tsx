import React from 'react'

import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle';
import Link from 'next/link';
type Props = {}

function Hero({}: Props) {
    const [text,count] = useTypewriter({
        
        words:[
            "Hi My Self Sujeet Rath",
            "Coder/ Gamer",
            "Full Stack Developer",
            "Loves To Implement Backend"
        ],
        loop:true,
        delaySpeed:2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-15 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircle/>
        <img className='rounded-full relative h-32 w-32 mx-auto' 
        src="https://media.licdn.com/dms/image/D4D03AQF7v6hytlynvw/profile-displayphoto-shrink_800_800/0/1672839595936?e=1700092800&v=beta&t=5gHkYJ0kpy_BzHiP1l8hBBSVgtwvbj9zsigKAeWr98M" alt="profileImage" />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]' >
                Software Engineer
            </h2>
            <h1 className='text-4xl lg:text-5xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
            </h1>
            <div className='pt-5 '>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="#exp">
                    <button className='heroButton'>Exprience</button>
                </Link>
                <Link href="#skill">
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#project">
                    <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero
