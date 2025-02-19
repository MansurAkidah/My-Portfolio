'use client';
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { useRef } from 'react';
import { AnimatePresence, useScroll  } from 'framer-motion';
// import Preloader from '../components/Preloader';
import Landing from '../projects/components/Landing/index';
import Description from '../projects/components/Description/index';
import Projects from '../projects/components/ProjectList/index';
import BackgroundBeamsDemo from './components/Footer/Index';
import { projects, projectsHome  } from '@/data';
import Card from '@/components/Card/index';
// import { ProjectGrid } from "./components/ProjectList/ProjectGrid";
// import { ProjectDetails } from "./components/ProjectList/ProjectDetails";


// import Contact from '../projects/components/Contacts/index';
// import SlidingImages from '../components/SlidingImages';
import Header from "@/components/Header"

export default function Index() {

  const [isLoading, setIsLoading] = useState(true); 
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })


  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          // setTimeout( () => {
          //   setIsLoading(false);
          //   document.body.style.cursor = 'default'
          //   window.scrollTo(0,0);
          // }, 2000)
      }
    )()
  }, [])

  return (
    <main className={styles.main}>
      {/* <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence> */}
      <Header />
      <Landing />
      <Description />
      {
            projectsHome.map((project, i) => {
              const targetScale = 1 - ((projectsHome.length - 1 - i) * 0.02);
              const rangeStart = i * 0.15;
              const rangeEnd = Math.min(1, rangeStart + 0.4);
              
              return (
                <Card 
                  key={`project_${i}`}
                  i={i}
                  title={project.title}
                  description={project.description}
                  src={project.src}
                  link={project.link}
                  color={project.color}
                  progress={scrollYProgress}
                  range={[rangeStart, rangeEnd]}
                  targetScale={targetScale}
                />
              );
            })
          }
      <BackgroundBeamsDemo />
      {/* <Projects /> */}
      {/* <SlidingImages />*/}
      {/* <Contact />  */}
    </main>
  )
}