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
    <div className="items-center group relative flex cursor-pointer">
    <motion.div
      initial={{
        scale: 0,
        opacity: 0,
      }}
      transition={{ duration: 0.5 }}
      animate={{ x: 0, opacity: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="relative w-12 h-12 xl:w-20 xl:h-20 object-cover rounded-full
        filter group-hover:grayscale transition  duration-300 ease-in-out "
    >
      <motion.img
        src={img}
        alt=""
        className="object-contain rounded-full"
      />
    </motion.div>
    <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-24 md:h-24 xl:h-24 rounded-full z-0">
      <div className="flex items-center justify-center h-full">
        <p className="text-xs xl:text-base font-bold text-black opacity-100">{title}</p>
      </div>
    </div>
  </div>
  )
}
//sm:text-xs md:text-sm
export default SkillLogo

