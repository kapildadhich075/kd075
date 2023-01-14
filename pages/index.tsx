import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import WorkExperience from './Components/WorkExperience';

const index: NextPage = () => {
  return (
    <>
      <div className=' bg-[#1B1A17] text-white h-screen snap-y snap-mandatory overflow-y-scroll 
      overflow-x-hidden z-0 font-Poppins'>
        <Head>
          <title>Kapil Dadhich</title>
          <meta name="description" content="Kapil Dadhich's Portfolio" />
          <link rel="icon" href="/bitmoji.png" />
        </Head>
        <Header />
        <section id='hero' className=' snap-start'>
          <Hero />
        </section>
        <section id='about' className='snap-center'>
          <About />
        </section>
        <section id='experience' className='snap-center'>
          <WorkExperience />
        </section>
        <section id='Skills' className='snap-start'>
          <Skills />
        </section>
        <section id="projects" className='snap-start'>
          <Projects />
        </section>
        <section id='contact' className='snap-start'>
          <Contact />
        </section>
        <Link href='#hero'>
          <footer className=' sticky bottom-5 w-full cursor-pointer'>
            <div className=' flex items-center justify-center'>
            <img src='/bitmoji.png' alt='bitmoji' className='w-10 h-10 
            rounded-full filter grayscale hover:grayscale-0 cursor-pointer
            ' />
            </div>
          </footer>
          </Link>
      </div>
    </>
  )
}

export default index