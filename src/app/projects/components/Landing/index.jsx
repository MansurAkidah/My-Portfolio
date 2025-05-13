'use client'
import Image from 'next/image'
import styles from './style.module.scss'
import { useRef, useLayoutEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';
import LogoWall from './LogoWall';
import reactbits from '../../../../../public/images/react.svg';

  


const logoImgs = [
    { imgUrl: "/images/node-js.svg", altText: "React Bits Logo" },
    { imgUrl: "/images/react.svg", altText: "React Bits Logo" },
    { imgUrl: "/images/python.svg", altText: "React Bits Logo" },
    { imgUrl: "/images/github.svg", altText: "React Bits Logo" },
    { imgUrl: "/images/java.svg", altText: "React Bits Logo" },
    { imgUrl: "/images/javascript.svg", altText: "React Bits Logo" },
    { imgUrl: "/images/c-sharp-96.svg", altText: "React Bits Logo" },
    { imgUrl: "/images/figma.svg", altText: "React Bits Logo" },

  ];

export default function Index() {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    const xPercentRef = useRef(0);
    const directionRef = useRef(-1);

    const animate = useCallback(() => {
        if(xPercentRef.current < -10){
            xPercentRef.current = 0;
        }
        else if(xPercentRef.current > 0){
            xPercentRef.current = -10;
        }
        gsap.set(firstText.current, {xPercent: xPercentRef.current})
        // gsap.set(secondText.current, {xPercent: xPercentRef.current})
        requestAnimationFrame(animate);
        xPercentRef.current += 0.01 * directionRef.current;
    }, []);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => directionRef.current = e.direction * -1
            },
            x: "-1000px",
        })
        requestAnimationFrame(animate);
    }, [animate]);

    return (
        <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
           
            {/* <Image 
                src="/images/home2.png"
                fill={true}
                alt="background"
            /> */}
            {/* <div className={styles.sliderContainer}>
                <div ref={slider} className={styles.slider}>
                    <p ref={firstText}>Designer & Developer</p>
                </div>
            </div> */}
            {/* <div className={styles.sliderContainer}>
                <LogoWall
                    items={logoImgs}
                    direction='horizontal'
                    pauseOnHover={true}
                    size='clamp(8rem, 1rem + 20vmin, 25rem)'
                    duration='60s'
                    bgColor='transparent'
                    bgAccentColor='transparent'
                />  
            </div> */}
            {/* <div data-scroll data-scroll-speed={0.1} className={styles.description}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                </svg>
                <p>Featured Projects</p>
                <p>A Collection of My Best Work</p>
            </div> */}
        </motion.main>
    )
}