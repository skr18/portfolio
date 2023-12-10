import React from 'react'
import { motion } from 'framer-motion';
import ExpCard from './ExpCard';

type Props = {}

function Exp({}: Props) {
  const exp = [
    {
      role: "Cloud Architect - Intern",
      pic:
        "https://i.postimg.cc/L8RMrzM6/ingenious-Tech.jpg",
      technologies: [
        "https://swimburger.net/media/ppnn3pcl/azure.png",
        "https://pandorafms.com/blog/wp-content/uploads/2016/03/docker-cloud-logo.png",
        "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
        "https://img.icons8.com/color/512/azure-storage-explorer.png",
      ],
      company:"Ingenious Tech",
      date: "June 2022 - August 2022",
      points: [
        "Gain Experience in defining new architectures and ability to drive project from architecture standpoint.",
        "Managing different Subscriptions including required Cloud Services such as S2S,P2S,Network Gateways",
        "Design Virtual environment including server instance, storage instances,subnets,availability zones,etc",
      ],
    },
  ];
  return (
    <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}

        className='flex flex-col relative h-screen overflow-hidden text-left md:flex-row  max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px]   text-gray-400 text-2xl xl:text-3xl'>
            Experience
        </h3>

        <div className='w-full mt-20 flex justify-center space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
        {exp.map((item) => (
          // @ts-ignore
          <ExpCard key={item} proj={item} tech={item.technologies} />
        ))}
        </div>
    </motion.div>
  )
}

export default Exp
