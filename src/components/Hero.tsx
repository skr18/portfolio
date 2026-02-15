import React from 'react'

import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle';
import Link from 'next/link';
type Props = {}

function Hero({}: Props) {
    const [text,count] = useTypewriter({
        
        words:[
            "Sujeet Kumar Rath",
            "MERN & DevOps Engineer",
            "K8s & Cloud Architect",
            "Automating The World",
            "Coder By Day, Gamer By Night",
        ],
        loop:true,
        delaySpeed:2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-15 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircle/>
        <img className='rounded-full relative h-40 w-40 mx-auto mb-4' 
        src="logos/me.png" alt="profileImage" style={{"objectFit":"cover","objectPosition":"center -50px", border: "2px solid #F7AB0A"}}/>
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
