import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../common/RoundedBottom/index';
import Aurora from './Aurora';
export default function Index() {

    const phrase = "Line by line, bug after bug.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div>
            <Aurora
               colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
               blend={0.5}
               amplitude={1.0}
               speed={0.5}
           />
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                {/* <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p> */}
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>I create digital experiences that leave an impact.</motion.p>
                {/* <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p><a href='/docs/Mansur Akidah - App Software Engineer.pdf' >About me</a></p>
                    </Rounded>
                </div> */}
            </div>
        </div>
        </div>
    )
}