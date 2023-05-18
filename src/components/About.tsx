import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function About({}: Props) {
  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}

        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center'>
        <h3 className='absolute top-16 uppercase tracking-[20px]
        text-gray-400 text-2xl'>About
        </h3>
        <motion.img
            initial={{
                x:-200,
                opacity:0
            }}
            transition={{
                duration:1.2,
            }}
            whileInView={{x:0 , opacity:1}}
            viewport={{once: true}}
            src='https://i.ibb.co/ZYgcJVH/Whats-App-Image-2023-02-08-at-11-48-14-PM.jpg'
            className='-mb-32 md:mb-0 flex-shrink-0   w-32 h-32 rounded-full object-cover md:rounded-sm md:w-72 md:h-80 xl:w-[400px] xl:h-[450px] sm:rounded-sm sm:w-72 sm:h-80'
            alt='img'
        />
         <div className="space-y-8 mt-8 px-0 md:px-10 md:mt-0">
          {" "}
          <h4 className="text-2xl font-semibold lg:text-3xl">
            Here&#39;s a little{" "}
            <span className="text-[#F7AB0A]">{" <Background />"}</span>
          </h4>
            <p className='text-xs lg:text-xl text-gray-300'>Hi I&apos;am Sujeet Rath. I&apos;m currently pursuing my BTech in Computer Science And Engineering from Silicon Institute of Technology, Bhubaneswar. I am a Full-Stack Developer and coder. I specialize in creating and maintaining websites and web applications using a variety of programming languages and libraries such as React, JavaScript, NodeJs, MongoDb, TailwindCSS and others. I have experience in Frontend and Backend Development, Building Responsive Frameworks, Design & Manage Database with best code practices .I am also proficient in coding languages such as C++, JAVA and PYTHON. I am passionate about creating innovative and user-friendly experiences and am constantly learning new skills and technologies to stay up-to-date in the field.</p>
            <div className="items-center mt-1">
            <a
              href="https://drive.google.com/drive/folders/1qZjbWu5yK4XxxSLeRr8mIVBKFSFogu4J?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className="aboutButton">Resume</button>
            </a>{" "}
          </div>
        </div>

    </motion.div>
  )
}

export default About