
import React from 'react'
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

type Props = {}


function Projects({}: Props) {
  // const projects = [1,2,3,4];
  const project = [
    {
      name: "EFFORTLESS EXAMS",
      pic:
        "https://effortless-exams.netlify.app/static/media/LOGO2%20(2).af33bb52eda54769d35b.gif",
      technologies: [
        "https://user-images.githubusercontent.com/29685463/215034546-ced8629f-af35-46b9-8f1e-3b66fb93bc72.png",
        "https://www.bookmarks.design/media/image/ant-design.jpg",
        "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_4c2c908435a514466a56ed2f4cc49417/netlify.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/2048px-Canva_icon_2021.svg.png",
      ],
      date: "March 2023 - April 2023",
      points: [
        "Designed and Developed a website that helps students by providing previous years solutions, video lectures and notes, making the process easy for exam preparation..",
        "The website have over 750 active users in last month",
      ],
      repo: {
        git: "https://github.com/skr18/EffortLess-Exams",
        live: "https://effortless-exams.netlify.app/",
        network:"google"
      },
    },
    {
      name: "LEARNING LAB",
      pic:
        "https://thumbs.dreamstime.com/b/creative-idea-thinking-outstanding-inspiration-brainstorm-imagination-development-light-bulb-human-brain-icon-sign-197641814.jpg",
      technologies: [
        "https://user-images.githubusercontent.com/29685463/215034546-ced8629f-af35-46b9-8f1e-3b66fb93bc72.png",
        "https://user-images.githubusercontent.com/29685463/215034529-52e81f99-f1c5-4653-9c9b-28d28c0c59a8.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/1024px-Socket-io.svg.png",
        "https://www.bookmarks.design/media/image/ant-design.jpg",
        "https://user-images.githubusercontent.com/29685463/215034516-095feb28-0dab-4528-aca5-92067d3a9f49.png",
      ],
      date: "January 2023 (Prototype Stage)",
      points: [
        "One stop platform that allow students to get their doubt resolved in respective video conferencing room",
        "website is designed to interact with peers and mentors in discussion rooms and made a interactive code-sync platform",
        "For More Info Please Go Through The Link."
      ],
      repo: {
        git: "https://github.com/skr18/Learning-Lab",
        live: "https://youtu.be/IlblYh4VC0c",
        network:"youtube"
      },
    },
    {
      name: "BANK MANAGEMENT SYSTEM",
      pic:
        "https://i.pinimg.com/originals/e8/9a/37/e89a37b98c217cfcc1341d2e7a31af7e.jpg",
      technologies: [
        "https://img.icons8.com/color/512/java-coffee-cup-logo--v1.png",
        "https://user-images.githubusercontent.com/29685463/215034532-19e695c9-3cd4-40f4-92ab-8bae9278a4b3.png",
        "https://user-images.githubusercontent.com/29685463/215034549-6f57bf5d-6c0a-4613-bdee-88138b830b62.png",
        "https://dashboard.snapcraft.io/site_media/appmedia/2022/09/icon.svg_b4I1OL0.png",
      ],
      date: "February 2023",
      points: [
        "Build a Desktop Based Bank Management Application using Java,Swing and AWT.",
        "Has full CRUD functonality i.e., Create, Read, Update and Delete.",
        "Used JDBC to connect with MYSQL for Data Base Management ",
      ],
      repo: {
        git: "https://github.com/skr18/Bank-Management-System",
        live: "https://youtu.be/LhKbqP9XS_c",
        network:"youtube"
      },
      
    },
    {
      name: "AUTOMATED MARKETING",
      pic:
        "https://w7.pngwing.com/pngs/75/819/png-transparent-automation-logo-payment-gateway-business-industry-wirecard-angle-service-logo.png",
      technologies: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Selenium_Logo.png/220px-Selenium_Logo.png",
        "https://sparkcdneus2.azureedge.net/sparkimageassets/XP9KHM4BK9FZ7Q-63e59db4-cf83-46b7-9365-0c37221b94de",
      ],
      date: "March 2022 - April 2022",
      points: [
        "Created a automated environment in social media platform where business promotion can be made easily using Python Scripting",
        "By tracking Likes on post we find relatableHashtags and used it to Automate Instagram by using the Selenium",
      ],
      repo: {
        git: "https://github.com/Manas-22/Hack-Overflow",
        live: "https://www.linkedin.com/posts/sujeet-kumar-rath-43a273225_environment-instagram-activity-7029467566980902912-iR4I?utm_source=share&utm_medium=member_desktop",
        network:"linkedin"
      },
      
    },
    {
      name: "Ecommerce Website",
      pic:
        "https://user-images.githubusercontent.com/29685463/215044939-afd7d756-05a7-4718-b8df-098f40bfb9cc.png",
      technologies: [
        "https://user-images.githubusercontent.com/29685463/215034546-ced8629f-af35-46b9-8f1e-3b66fb93bc72.png",
        "https://user-images.githubusercontent.com/29685463/215034549-6f57bf5d-6c0a-4613-bdee-88138b830b62.png",
        "https://user-images.githubusercontent.com/29685463/215034514-1a9c7e9a-dcf1-486b-bd58-fb607ba31c9f.png",
        "https://user-images.githubusercontent.com/29685463/215034529-52e81f99-f1c5-4653-9c9b-28d28c0c59a8.png",
        "https://user-images.githubusercontent.com/29685463/215034519-a6b207a8-ee89-43df-bdf8-d7af74f28f62.png",
      ],
      date: "July 2022 - December 2022",
      points: [
        "A full stack MERN Project Uses React and Redux at FrontEnd. NodeJs and MongoDB at the BackEnd",
        "Functional Cart to add and remove products",
        "Validations wherever required.",
      ],
      repo: {
        git: "https://github.com/skr18/Flipcart-clone",
        live: "https://youtu.be/Z7Q4EWrc6jM",
        network:"youtube"
      },
    },
  ];
  return (
    <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}

        className='flex flex-col relative h-screen overflow-hidden text-left md:flex-row  max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px]  text-gray-400 text-2xl xl:text-3xl'>
            Projects
        </h3>

        <div className='w-full mt-24 flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
        {project.map((item) => (
          <ProjectCard key={item.name} proj={item} tech={item.technologies} />
        ))}
        </div>
    </motion.div>
  )
}

export default Projects

// scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
{/* <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h1 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>
        Projects
      </h1>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project)=>(
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5'>
              <img src="https://allusefulinfo.com/wp-content/uploads/2013/11/flipkart-website.jpg" alt="" />
              <div>
                <h4>Case Study </h4>
              </div>
            </div>
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#87600c] left-0 h-[500px] -skew-y-12'>

      </div>
    </div> */}
