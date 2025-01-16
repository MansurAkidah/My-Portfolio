'use client'
import styles from './page.module.scss'
import { projects, projectsHome } from '@/data';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { AnimatePresence, useScroll } from 'framer-motion';
import ZoomParallax from '../components/ZoomParallax/index';
import Footer from "@/components/StickyFooter/Footer1";
import Intro from "@/components/StickyFooter/Intro";
import Header from "@/components/Header"
import Lenis from '@studio-freight/lenis'
import Image from 'next/image';
import Double from '../components/double';
import Scene1 from '@/components/Cursor/Scene1';
import Scene2 from '@/components/Cursor/Scene2';
import Preloader from '../components/Preloader';
import gsap from 'gsap';
import Card from '@/components/Card/index';

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
      {/* <h4 className="text-[1.5vw] max-w-[100vw] text-center text-white top-0 z-10 pb-10">Scroll down </h4> */}
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      {!isLoading && (
        <>
        <Header />
          <Scene1 />
      <ZoomParallax />
      <Scene2 />
      {
        projectsHome.map( (project, i) => {
          const targetScale = 1 - ( (projectsHome.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
      
      {/* <Gsap/> */}
      {/* <h3>We use design and technology to create brands and products that perform, delight, and scale.</h3> */}
      {/* <div className={styles.gallery}>
        <Double projects={[projects[0], projects[1]]}/>
        <Double projects={[projects[2], projects[3]]} reversed={true}/>
        <Double projects={[projects[4], projects[5]]}/>
        <Double projects={[projects[6], projects[7]]} reversed={true}/>
      </div> */}
      
      {/* <Intro /> */}
      <Footer />
        </>
      )}
      
    </main>
  )
}