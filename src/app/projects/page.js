'use client';
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
// import Preloader from '../components/Preloader';
import Landing from '../projects/components/Landing/index';
import Description from '../projects/components/Description/index';
// import Projects from '../projects/components/ProjectsList/Index';
// import Contact from '../projects/components/Contacts/index';
// import SlidingImages from '../components/SlidingImages';
import Header from "@/components/Header"

export default function Index() {

  const [isLoading, setIsLoading] = useState(true);

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
      {/* <Projects /> */}
      {/* <SlidingImages />*/}
      {/* <Contact />  */}
    </main>
  )
}