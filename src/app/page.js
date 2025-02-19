'use client'
import styles from './page.module.scss'
import { projects, projectsHome  } from '@/data';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { AnimatePresence, useScroll  } from 'framer-motion';
import ZoomParallax from '../components/ZoomParallax/index';
import Footer from "@/components/StickyFooter/Footer1";
import Intro from "@/components/StickyFooter/Intro";
import Header from "@/components/Header"
import Lenis from '@studio-freight/lenis'
import Image from 'next/image';
import Scene1 from '@/components/Cursor/Scene1';
import Scene2 from '@/components/Cursor/Scene2';
import Preloader from '../components/Preloader';
import gsap from 'gsap';
import Card from '@/components/Card/index';
import Phrase from '@/components/About/phrase';
import Experience from '@/components/Experience/experience';
import Testimonials from '@/components/Testimonials/testimonials'
import Timeline from '@/components/Experience/timeline';
import BackgroundLinesDemo from '../components/Testimonials/background-lines';

export default function Home() {

  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e
    xForce += movementX * speed;
    yForce += movementY * speed;

    if(requestAnimationFrameId == null){
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  }

  const lerp = (start, target, amount) => start * (1 - amount) +target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, {x: `+=${xForce}`, y: `+=${yForce}`})
    gsap.set(plane2.current, {x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}`})
    gsap.set(plane3.current, {x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}`})

    if(Math.abs(xForce) < 0.01) xForce = 0;
    if(Math.abs(yForce) < 0.01) yForce = 0;
    
    if(xForce != 0 || yForce != 0){
      requestAnimationFrame(animate);
    }
    else{
      cancelAnimationFrame(requestAnimationFrameId)
      requestAnimationFrameId = null;
    }
  }
  const [isLoading, setIsLoading] = useState(true);
    useEffect( () => {
      const lenis = new Lenis()
      
      function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
      const handleTimeout = async () => {
        setTimeout( () => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0,0);
        }, 3000)
      }
      handleTimeout();
    },[])

  return (
    <main onMouseMove={(e) => {manageMouseMove(e)}} className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      {!isLoading && (
        <>
          <Header />
          <Scene1 />
          <Phrase />
          <Timeline />
          <ZoomParallax />

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
          <BackgroundLinesDemo />
          <Testimonials />
          <Footer />
        </>
      )}
      
    </main>
  )
}