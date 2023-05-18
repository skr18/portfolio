import React from 'react'
import { motion } from 'framer-motion';
import SkillLogo from './SkillLogo';
type Props = {}

function Skills({}: Props) {
  const skill_arr = [
   
    {
      name: "C++",
      img:
        "https://user-images.githubusercontent.com/29685463/215034508-5fefb711-6400-4c9c-be2f-b961308b29fe.png",
    },
    {
      name: "JAVA",
      img:
        "https://user-images.githubusercontent.com/29685463/215034524-1f68d45c-9803-4e01-b300-283511465156.png",
    },
    {
      name: "HTML",
      img:
        "https://user-images.githubusercontent.com/29685463/215034519-a6b207a8-ee89-43df-bdf8-d7af74f28f62.png",
    },
    {
      name: "CSS",
      img:
        "https://user-images.githubusercontent.com/29685463/215034514-1a9c7e9a-dcf1-486b-bd58-fb607ba31c9f.png",
    },
    {
      name: "Tailwind",
      img:
        "https://user-images.githubusercontent.com/29685463/215034549-6f57bf5d-6c0a-4613-bdee-88138b830b62.png",
    },
    {
      name: "JS",
      img:
        "https://user-images.githubusercontent.com/29685463/215034525-9746c1b8-b015-47e0-b5b2-edb70e682c8c.png",
    },
    {
      name: "TypeScript",
      img:
        "https://user-images.githubusercontent.com/29685463/215057483-e230ab14-dd65-4bb2-8954-208e17765784.png",
    },
    
    {
      name: "React",
      img:
        "https://user-images.githubusercontent.com/29685463/215034546-ced8629f-af35-46b9-8f1e-3b66fb93bc72.png",
    },
    {
      name: "NextJS",
      img:
        "https://user-images.githubusercontent.com/29685463/215058305-c6a71893-bbaa-4cce-ba39-44f16d82f405.png",
    },

    {
      name: "Firebase",
      img:
        "https://user-images.githubusercontent.com/29685463/215034516-095feb28-0dab-4528-aca5-92067d3a9f49.png",
    },
   
    {
      name: "MySQL",
      img:
        "https://user-images.githubusercontent.com/29685463/215034532-19e695c9-3cd4-40f4-92ab-8bae9278a4b3.png",
    },
    {
      name: "NodeJs",
      img:
        "https://brandeps.com/logo-download/N/Node-JS-logo-vector-01.svg",
    },
    {
      name: "Express",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdjuU7uhXx0_ES2SMQc1RJYpJ-HjJC1fWOTqhPCPPydumFnbx7TTP2GY8RDpVcXGue6yk&usqp=CAU",
    },
    {
      name: "MongoDB",
      img:
        "https://user-images.githubusercontent.com/29685463/215034529-52e81f99-f1c5-4653-9c9b-28d28c0c59a8.png",
    },
    {
      name: "Postman",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3znC2phPtraIt6OG2Ej8QRb515gFyhK8H5yDgg37KcKLTlKGAbclzKOnF_0W7Y5p-DtY&usqp=CAU",
    },
    // {
    //   name: "Sanity",
    //   img:
    //     "https://www.sanity.io/static/images/logo_rounded_square.png",
    // },
  ];
  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}} 
        className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px]  text-gray-400 text-2xl xl:text-3xl'>
            skills
        </h3>
        <h3 className='absolute top-24 
        uppercase tracking-[3px] text-gray-600 text-sm pt-6'>
            Hover over a skill for its name
        </h3>
        <div className='grid grid-cols-4 gap-5'>
            {skill_arr.map((item) => (
              <SkillLogo key={item.name} img={item.img} title={item.name}/>
            ))}
        </div>
    </motion.div>
  )
}

export default Skills
   