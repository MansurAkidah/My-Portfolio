'use client'
import styles from './page.module.scss'
import { projects } from '@/data';
import { useEffect } from 'react';
import ZoomParallax from '../components/ZoomParallax/index';
import Footer from "@/components/StickyFooter/Footer1";
import Intro from "@/components/StickyFooter/Intro";
import Lenis from '@studio-freight/lenis'
import Image from 'next/image';
import Double from '../components/double';
import Scene1 from '@/components/Cursor/Scene1';
import Scene2 from '@/components/Cursor/Scene2';

export default function Home() {
    useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])
  return (
    <main className={styles.main}>
        {/* <h2>Hi, Im Mansur Akidah</h2>
        <h3>Showcasing my journey in design and development.</h3> */}
        <Scene1 />
        <ZoomParallax />
        <Scene2 />
      {/* <h3>We use design and technology to create brands and products that perform, delight, and scale.</h3> */}
      <div className={styles.gallery}>
        <Double projects={[projects[0], projects[1]]}/>
        <Double projects={[projects[2], projects[3]]} reversed={true}/>
        <Double projects={[projects[4], projects[5]]}/>
        <Double projects={[projects[6], projects[7]]} reversed={true}/>
      </div>
      <Intro />
      <Footer />
    </main>
  )
}