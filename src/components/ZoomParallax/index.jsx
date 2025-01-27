import styles from './styles.module.scss';
// import Picture1 from '../../../public/images/Screenshot (245).png';

import Picture0 from '../../../public/images/Mans.jpg';
import Picture1 from '../../../public/images/me.jpg';
import Picture2 from '../../../public/images/black suit.jpg';
import Picture3 from '../../../public/images/black suit.jpg';
import Picture4 from '../../../public/images/black suit.jpg';
import Picture5 from '../../../public/images/black suit.jpg';
import Picture6 from '../../../public/images/black suit.jpg';
import Picture7 from '../../../public/images/black suit.jpg';
import Picture8 from '../../../public/images/projects.png';
import Image from 'next/image';
import { useScroll, useTransform, motion} from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        const updatePictures = () => {
            const isMobile = window.matchMedia("(max-width: 768px)").matches;
            const updatedPictures = [
                {
                    src: isMobile ? Picture1 : Picture8,
                    scale: scale4
                },
                {
                    src: Picture2,
                    scale: scale5
                },
                {
                    src: Picture3,
                    scale: scale6
                },
                {
                    src: Picture4,
                    scale: scale5
                },
                {
                    src: Picture5,
                    scale: scale6
                },
                {
                    src: Picture6,
                    scale: scale8
                },
                {
                    src: Picture7,
                    scale: scale9
                }
            ];
            setPictures(updatedPictures);
        };

        // Set initial pictures based on current screen size
        updatePictures();

        // Update pictures if the screen size changes
        window.addEventListener('resize', updatePictures);
        
        return () => window.removeEventListener('resize', updatePictures);
    }, [scale4, scale5, scale6, scale8, scale9]);

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {
                    pictures.map(({ src, scale }, index) => {
                        return <motion.div key={index} style={{ scale }} className={styles.el}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={src}
                                    fill
                                    alt="image"
                                    placeholder='blur'
                                />
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    );
}