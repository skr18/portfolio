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
            className='md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-sm md:w-72 md:h-80 xl:w-[400px] xl:h-[450px] sm:rounded-sm sm:w-72 sm:h-80 mt-28 lg:mt-0'
            alt='img'
        />
         <div className="space-y-6 px-0 md:px-10 md:mt-0">
          {" "}
          <h4 className="text-2xl font-semibold lg:text-3xl lg:mt-3">
            Here&#39;s a little{" "}
            <span className="text-[#F7AB0A]">{" <Background />"}</span>
          </h4>
            <p className='text-xs lg:text-xl text-gray-300'>Hi I&apos;am Sujeet Rath, a DevOps & Full-Stack Engineer specializing in building resilient, cloud-native architectures that scale. With over <b>2 year's</b> of experience and a B.Tech in CSE from Silicon Institute of Technology (2024), I bridge the gap between development and production. Proficient in building end-to-end CI/CD pipelines using Jenkins, GitHub Webhooks, and GitOps practices with Argo CD, enabling zero-touch deployments on Kubernetes. Strong expertise in containerization using Docker (Multi-Stage & Distroless builds) and orchestration with Kubernetes, implementing auto-scaling (HPA) for production-grade deployments. <br></br><br></br>In addition, skilled MERN Stack Developer (MongoDB, Express.js, React, Node.js) with experience developing responsive full-stack applications and integrating backend services with modern frontend frameworks. Adept at bridging development and operations to accelerate release cycles, improve system performance, and drive DevOps culture. Passionate about automation, cloud-native technologies, and building high-availability systems that align with business scalability goals.</p>
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