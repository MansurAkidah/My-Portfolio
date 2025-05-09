'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body/index';
import Footer from './Footer';
import Image from './Image';

const links = [
  {
    title: "Home",
    href: "/",
    src: "home2.png",
    download: false
  },
  {
    title: "Projects",
    href: "/projects",
    src: "logo 1.png",
    download: false
  },
  {
    title: "What I Do",
    href: "/services",
    src: "black suit.jpg",
    download: false
  },
  {
    title: "Contacts",
    href: "/contact",
    src: "face.jpg",
    download: false
  },
  {
    title: "Resume",
    href: "/mansur_resume.pdf",
    src: "home3.png",
    download: true
  }
]

export default function Index() {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
          <Footer />
        </div>
        <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive}/>
      </div>
    </motion.div>
  )
}