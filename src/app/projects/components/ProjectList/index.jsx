'use client';
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import Project from './components/project/index';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Rounded from '../common/RoundedBottom/index';
import { useProjectStore } from "./utils/store";
// import { ProjectGrid } from "../ProjectList/components/project/ProjectGrid";
// import { ProjectDetails } from "./components/project/ProjectDetails/index";
// import { Projects } from "./utils/types";


const projects = [
  {
    title: "Meditation App",
    src: "medi.png",
    category:"Android",
    link:"www.example.com",
    color: "#000000"
  },
  {
    title: "Real Estate Web App",
    src: "real estate.png",
    category:"Web",
    link:"www.example.com",
    color: "#000000"
  },
  {
    title: "Fraud Detection System",
    src: "Fraud.png",
    category:"Web",
    link:"www.example.com",
    color: "#8C8C8C"
  },
  {
    title: "ECommerce System",
    src: "gearhut.png",
    category:"Web",
    link:"www.example.com",
    color: "#EFE8D3"
  },
  {
    title: "Sacco System",
    src: "sacco.png",
    category:"Web",
    link:"www.example.com",
    color: "#EFE8D3"
  },
  {
    title: "QR Code Generator App",
    src: "gearhut.png",
    category:"Android",
    link:"www.example.com",
    color: "#706D63"
  },
  {
    title: "POS System",
    src: "pos stats.png",
    category:"Web",
    link:"www.example.com",
    color: "#EFE8D3"
  }
]

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function Index() {

  const [modal, setModal] = useState({active: false, index: 0})
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  const projects = useProjectStore((state) => state.projects);
  // const [selectedProject, setSelectedProject] = useState<Projects | null>(null);


  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect( () => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
  }, [])

  const moveItems = (x, y) => {
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }
  const manageModal = (active, index, x, y) => {
    moveItems(x, y)
    setModal({active, index})
  }

  return (
  <main onMouseMove={(e) => {moveItems(e.clientX, e.clientY)}} className={styles.projects}>
    <div className={styles.body}>
      {
        projects.map( (project, index) => {
          return <Project index={index} title={project.title} link={project.link} cat={project.category} manageModal={manageModal} key={index}/>
        })
      }
    </div>
    <Rounded>
      <p><a href='https://github.com/MansurAkidah' target='_blank'>More work</a></p>
    </Rounded>
    <>
        <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
            <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
            {
                projects.map( (project, index) => {
                  const { src, color, link  } = project
                  return <div className={styles.modal} style={{backgroundColor: color}} key={`modal_${index}`}>
                      <a 
                      href='https://github.com/MansurAkidah'
                      target="_blank"
                      rel="noopener noreferrer" 
                      className={styles.modal} 
                      style={{backgroundColor: color}} 
                      key={`modal_${index}`}
                    >
                      <Image
                        src={`/images/Projects/${src}`}
                        width={500}
                        height={0}
                        alt="image"
                      />
                    </a>
                  </div>
                })
            }
            </div>
        </motion.div>
        {/* <ProjectGrid
            projects={projects}
            onProjectClick={setSelectedProject}
          />

        {selectedProject && (
          <ProjectDetails
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )} */}
    </>
  </main>
  )
}