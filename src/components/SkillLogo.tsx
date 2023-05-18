import React from 'react'
import { motion } from 'framer-motion';

type Props = {
  key:string,
  img:string
  title:string
}
import Image from "next/image";

function SkillLogo({key,img,title}: Props) {
    // console.log("name=",{title});
    // console.log("img=",{img});
  return (
    <div className="top-2 md:top-10 left-0 x-0 items-center group relative flex cursor-pointer ">
    <motion.div
      initial={{
        scale: 0,
        opacity: 0,
      }}
      transition={{ duration: 0.5 }}
      animate={{ x: 0, opacity: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="relative w-16 h-16 xl:w-24 xl:h-24 object-cover rounded-full
        filter group-hover:grayscale transition  duration-300 ease-in-out "
    >
      <motion.img
        src={img}
        alt=""
        className="object-contain rounded-full"
      />
    </motion.div>
    <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-24 md:h-24 xl:h-24 rounded-full z-0">
      <div className="flex items-center justify-center h-full">
        <p className="text-lg sm:text-xs md:text-sm font-bold text-black opacity-100">{title}</p>
      </div>
    </div>
  </div>
  )
}

export default SkillLogo

