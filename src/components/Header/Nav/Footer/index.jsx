import styles from './style.module.scss';
import { translate } from '../../anim';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <motion.li 
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    <span>Made by:</span>Mansur Akidah
                </motion.li>
            </ul>
            <ul>
                <motion.li  
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    <span>Profession:</span> Software Developer
                </motion.li>
            </ul>
            <ul>
                <motion.li
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    <span></span> 
                </motion.li>
            </ul>
            <ul>
                
            </ul>
        </div>
    )
}