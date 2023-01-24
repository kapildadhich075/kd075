import type { GetStaticProps} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Experience, PageInfo , Project , Skill , Social } from '../typings';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchSocials } from '../utils/fetchSocials';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import WorkExperience from './Components/WorkExperience';


type Props = {
  pageInfo: PageInfo,
  experiences: Experience[],
  skills: Skill[],
  projects: Project[],
  socials: Social[]
}

const index = ({pageInfo, experiences, skills, projects, socials} : Props) => {
  return (
    <>
      <div className=' bg-[#1B1A17] text-white h-screen snap-y snap-mandatory overflow-y-scroll 
      overflow-x-hidden z-0 font-Poppins'>
        <Head>
          <title>Kapil Dadhich</title>
          <meta name="description" content="Kapil Dadhich's Portfolio" />
          <link rel="icon" href="/bitmoji.png" />
        </Head>
       < Header socials={socials} />
        <section id='hero' className=' snap-start'>
          <Hero pageInfo = {pageInfo} />
        </section>
        <section id='about' className='snap-center'>
          <About pageInfo = {pageInfo}/>
        </section>
        <section id='experience' className='snap-center'>
          <WorkExperience experiences = {experiences}/>
        </section>
        <section id='Skills' className='snap-start'>
          <Skills skills = {skills}/>
        </section>
        <section id="projects" className='snap-start'>
          <Projects projects = {projects}/>
        </section>
        <section id='contact' className='snap-start'>
          <Contact />
        </section>
        
        
          <footer className=' sticky bottom-5 w-full cursor-pointer'>
            <div className=' flex flex-col gap-2 items-left justify-left m-5'>
            <Link href='#hero'>
            <img src='/bitmoji.png' alt='bitmoji' className='w-10 h-10 
            rounded-full filter grayscale hover:grayscale-0 cursor-pointer
            ' />
            <p className='text-sm font-semibold ml-2'>Made with ❤️ by Kapil Dadhich © 2023</p> 
            </Link>
            </div>      
          </footer>
          
          
        
      </div>
    </>
  )
}

export default index

export const getStaticProps : GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return{
    props: {
       pageInfo,
       experiences,
       skills,
       projects,
       socials,
    },
    revalidate: 10,
  }
}