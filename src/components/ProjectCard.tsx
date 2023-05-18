import React from 'react'
import { motion } from 'framer-motion';
type Props = {}
import Link from "next/link";
import { SocialIcon } from 'react-social-icons';
// import { AiFillGithub, AiFillChrome } from "react-icons/ai";
// @ts-ignore
const ProjectCard = ({key,proj, tech })=> {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[660px] snap-center bg-[#292929] p-3 opacity-80 hover:opacity-100 cursor-pointer hover:ease-in-out transition-opacity duration-200 overflow-hidden'>
     <motion.img
        className="h-20 w-32  xl:w-[170px] xl:h-[100px] object-cover object-center"
        src={proj.pic}
        alt=""
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        //viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

        <motion.div
          className="px-10 md:px-10 "
          initial={{
            x: 200,
            opacity: 0,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          //viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h4 className="text-base text-center font-normal md:text-3xl">{proj.name}</h4>
          <div className="flex space-x-5 my-1 md:my-2">
            {tech.map((item:any) => (
              //eslint-disable-next-line @typescript-eslint/no-unused-expressions
              <img className="h-6 w-6 sm:h-8 sm:w-8 rounded-full" src={item} alt="" />
            ))}
          </div>
          <p className="text-xs sm:text-xl uppercase py-5 text-gray-500">{proj.date}</p>
          <ul className="text-xs list-disc space-y-1 sm:space-y-4 ml-5 xl:text-base sm:text-2xl  ">
            {proj.points.map((item:any) => (
              //eslint-disable-next-line @typescript-eslint/no-unused-expressions
              <li>{item}</li>
            ))}
          </ul>
      </motion.div>
      <div className="flex space-x-5 bottom-0">
        <Link href={proj.repo.git}>
          <SocialIcon className="h-10 w-10"  
                url='https://github.com/skr18'
                fgColor='#d6d4d4'
                bgColor='transparent'
                target='_blank' />
        </Link>{" "}
        <Link href={proj.repo.live}>
          <SocialIcon className="h-10 w-10" 
                      target='_blank'
                      network={proj.repo.network}
                      fgColor='#d6d4d4'
                      bgColor='transparent'
                       />
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;