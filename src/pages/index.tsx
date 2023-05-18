import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { SocialIcon } from 'react-social-icons';
import Header from '../components/Header'
import Hero from '@/components/Hero';
import About from '@/components/About';
import Exp from '@/components/Exp';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';

export default function Home() {
  return (
    <div className='bg-[#0C0705] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] scrollbar-thin'>
      <Head>
        <title>Sujeet Kumar Rath</title>
      </Head>
      
      <Header/>


      <section id='hero' className='snap-start'>
        <Hero/>
      </section>

      <section id='about' className='snap-center'>
          <About/>
      </section>

      <section id="exp" className='snap-center'>
          <Exp/>
      </section>

      <section id='skill' className='snap-start'>
        <Skills/>
      </section>

      <section id="project" className='snap-start'>
        <Projects/>
      </section>

      {/* contact me */}
      <section id='contact' className='snap-start'>
        <ContactMe/>
      </section>
    </div>
  )
}
