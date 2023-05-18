import React from 'react'
import { motion } from 'framer-motion';
type Props = {}
import Link from "next/link";
import { SocialIcon } from 'react-social-icons';

// @ts-ignore
const ExpCard= ( {key,proj, tech }) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-2 sm:space-y-4 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[660px] snap-center bg-[#292929] p-3 opacity-80 hover:opacity-100 cursor-pointer hover:ease-in-out transition-opacity duration-200 overflow-hidden'>
    <motion.img
       className="h-20 w-32  xl:w-[170px] xl:h-[120px] object-cover object-center"
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
         className="px-5 md:px-10 "
         initial={{
           x: 200,
           opacity: 0,
         }}
         whileInView={{ x: 0, opacity: 1 }}
         //viewport={{ once: true }}
         transition={{ duration: 1 }}
       >
         <h4 className="text-sm text-center font-normal md:text-3xl">{proj.role}</h4>
         <div className="flex space-x-5 my-2" >
           {tech.map((item:any) => (
             <img className="h-6 w-6 sm:h-8 sm:w-8 rounded-full" src={item} alt="" />
           ))}
         </div>
         <h4 className='text-sm font-light md:text-3xl'>{proj.company}</h4>
         <p className="text-xs sm:text-base uppercase  py-1 sm:py-4 text-gray-500">{proj.date}</p>
         <ul className="list-disc space-y-1 sm:space-y-4 ml-5 text-xs sm:text-base ">
           {proj.points.map((item:any) => (
             //eslint-disable-next-line @typescript-eslint/no-unused-expressions
             <li>{item}</li>
           ))}
         </ul>
     </motion.div>
   </article>
  )
}

export default ExpCard




// import React from 'react'
// import { motion } from 'framer-motion';
// type Props = {}
// // <p className='font-bold text-2xl mt-1 '>Ingenious Tech</p>
// // <h4 className='text-4xl font-light'>Cloud Architect - Intern </h4>
// function ExpCard({}: Props) {
//   return (
//     <article className='flex flex-col rounded-lg items-center space-y-6 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
//         <motion.img 
//           initial={{
//             y:-100,
//             opacity:0,
//           }}
//           transition={{duration:1.2}}
//           whileInView={{opacity:1,y:0}}
//           viewport={{once:true}}
//           className='rounded-full relative h-20 w-24 xl:w-[100px] xl:h-[100px] object-cover object-center '
//           src="https://media.licdn.com/dms/image/C4D0BAQGd4nu3vscqQw/company-logo_200_200/0/1622444193671?e=1689811200&v=beta&t=4-ZpNzlN4ViEUZCFxY98E2wR1vzI3vgus-4TznviUKo" 
//           alt="" />

//           <div className='px-0 md:px-10'>
//             <h4 className='text-4xl font-light'>Cloud Architect - Intern </h4>
//             <p className='font-bold text-2xl mt-1 '>Ingenious Tech</p>
//             <div className='flex space-x-2 my-2'>
//                 <img className='h-12 w-12 rounded-full'
//                 src="https://swimburger.net/media/ppnn3pcl/azure.png" 
//                 alt="" />

//                 <img className='h-14 w-14 rounded-full'
//                 src="https://pandorafms.com/blog/wp-content/uploads/2016/03/docker-cloud-logo.png" 
//                 alt="" />

//                 <img className='h-12 w-12 rounded-full'
//                 src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" 
//                 alt="" />

//                 <img className='h-12 w-12 rounded-full'
//                 src="https://img.icons8.com/color/512/azure-storage-explorer.png" 
//                 alt="" />
//             </div>
//             <p className='py-1 uppercase text-gray-300'>Starded ... Ended ...</p>
//             <ul className='list-disc space-y-4 ml-5 text-lg'>
//                 <li>points </li>
//                 <li>points </li>
//                 <li>points </li>
//                 <li>points </li>
//             </ul>
//           </div>
//     </article>
//   )
// }

// export default ExpCard