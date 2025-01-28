'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Experience.module.css'; // Create a CSS module for styling

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    title: "Senior Web Developer",
    company: "TechNova Solutions",
    duration: "2022 - Present",
    description: "Leading the development of scalable web applications, focusing on React and Node.js. Spearheaded the migration of legacy systems to modern frameworks, improving performance by 40%.",
  },
  {
    title: "Associate Developer",
    company: "InnovateX",
    duration: "2021 - 2022",
    description: "Developed and maintained web applications using JavaScript, PHP, and MySQL. Collaborated on creating interactive dashboards and responsive user interfaces.",
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "2020 - 2021",
    description: "Worked with various clients to deliver custom web solutions, including e-commerce platforms and portfolio websites. Enhanced skills in front-end and back-end development.",
  },
];

export default function Experience() {
  const experienceRef = useRef([]);

  useEffect(() => {
    experienceRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className={styles.experienceSection}>
      <h2 className={styles.sectionTitle}>My Career & Experience</h2>
      <div className={styles.experienceList}>
        {experienceData.map((exp, index) => (
          <div
            key={index}
            ref={(el) => (experienceRef.current[index] = el)}
            className={styles.experienceItem}
          >
            <h3 className={styles.experienceTitle}>{exp.title}</h3>
            <p className={styles.experienceCompany}>{exp.company}</p>
            <p className={styles.experienceDuration}>{exp.duration}</p>
            <p className={styles.experienceDescription}>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}