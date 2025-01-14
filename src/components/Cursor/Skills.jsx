'use client';
import React from 'react'
import Cursor from "@/components/Cursor/Cursor";
import { projects, projectsHome } from '@/data';
import { useState , useEffect} from 'react';
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import Card from '@/components/Card/index';
import Lenis from '@studio-freight/lenis'

export default function Skills() {
    const [isActive, setIsActive] = useState(false);
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
      })
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
        <div className='h-[30vh]'>
            {
                projectsHome.map( (project, i) => {
                const targetScale = 1 - ( (projectsHome.length - i) * 0.05);
                return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
                })
            }
        </div>
        // <div className='h-[30vh] flex items-center justify-left'>
        //     {/* <h1 onMouseOver={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}} className="text-[4.5vw] max-w-[90vw] text-center text-white p-20">
        //         Hi, im Mansur Akidah
        //     </h1> */}
        //     <h2 onMouseOver={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}} className="text-[3.5vw] max-w-[90vw] text-center text-white p-10">
        //         {/* Here&apos;s my journey in software design and development . */}
        //         Skills
        //     </h2>
        //     <Cursor isActive={isActive}/>
        // </div>
    )
}