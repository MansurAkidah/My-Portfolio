import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../common/RoundedBottom/Index';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../common/Magnetic/Index';

//Contacts section
export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (
        <main className={styles.main}>
        <motion.div style={{y}} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image 
                            fill={true}
                            alt={"image"}
                            src={`/images/Mans.jpg`}
                            />
                        </div>
                        <h2>Let&apos;s work</h2>
                    </span>
                    <h2>together</h2>
                    <motion.div style={{x}} className={styles.buttonContainer}>
                        <Rounded  backgroundColor={"#334BD3"} className={styles.button}>
                            <p><a href='#' target='_blank'>Get in touch</a></p>
                        </Rounded>
                    </motion.div>
                    <motion.svg style={{rotate, scale: 2}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </motion.svg>
                </div>
                <div className={styles.nav}>
                        <Rounded>
                            <p>akidahmansur@gmail.com</p>
                        </Rounded>
                        <Rounded>
                            <p><a href='https://wa.me/+254745655524?text=Hello,+I+am+interested+in+learning+more+about+your+business' target='_blank'>+254745655563</a></p>
                        </Rounded>
                </div>
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>Version</h3>
                            <p>2024 © Edition</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3>socials</h3>
                            <Magnetic>
                                <p><a href='#' target='_blank'>Twitter</a></p>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <p><a href='https://www.instagram.com/mern.s.u.r/' target='_blank'>Instagram</a></p>
                        </Magnetic>
                        <Magnetic>
                            <p><a href='#' target='_blank'></a>Dribbble</p>
                        </Magnetic>
                        <Magnetic>
                            <p><a href='https://www.linkedin.com/in/mansurakidah' target='_blank'>Linkedin</a></p>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
        </main>
    )
}