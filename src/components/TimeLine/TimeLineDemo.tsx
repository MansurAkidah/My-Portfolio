import Image from "next/image";
import React from "react";
import { Timeline } from "./timeline";

export default function TimelineDemo() {
  const data = [
    {
        title: "June 2025",
        content: (
          <div>
            <p className="text-white dark:text-neutral-200 text md:text font-normal mb-8">
              Graduated on <strong>27th June 2025</strong> with a <strong>Bachelor&apos;s Degree in Information Technology</strong> from <strong>Jomo Kenyatta University of Agriculture and Technology (JKUAT)</strong>. 
              This milestone marked the completion of an exciting academic journey that built my foundation in software engineering and system design which has proven helpful in my workplace.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/grad.png"
                alt="Graduation"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
              />
            </div>
          </div>
        ),
    },
    {
        title: "August 2024 - Present",
        content: (
          <div>
            <p className="text-white dark:text-neutral-200 text md:text font-normal mb-8">
              Currently working as a <strong>Full-Stack Software Developer</strong>, leading the development of modern web and mobile applications. 
              My focus is on building scalable systems, integrating RESTful APIs, and implementing user-centered UI/UX designs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/Projects/programming background removed.png"
                alt="Software Development"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
              />
            </div>
          </div>
        ),
    },
    {
        title: "Jan 2024 - May 2024",
        content: (
          <div>
            <p className="text-white dark:text-neutral-200 text md:text font-normal mb-8">
              Completed my <strong>Internship</strong> at a growing tech startup, 
              where I contributed to building full-stack applications using the <strong>.NET framework</strong>, 
              <strong>Xamarin</strong>, and <strong>C#</strong> and some <strong>JS Frameworks</strong> like <strong>Knockout js</strong>. 
              This experience strengthened my understanding of agile workflows, mobile development, and API integration.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Startup Project"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
              />
            </div>
          </div>
        ),
    },
    {
        title: "Personal Projects",
        content: (
          <div>
            <p className="text-white dark:text-neutral-200 text md:text font-normal mb-8">
              Designed and developed multiple <strong>personal and collaborative projects</strong> to strengthen my technical expertise. 
              Key projects include a <strong>Fraud Detection System (FDS)</strong> using Machine Learning, 
              an <strong>E-Commerce App</strong> which i am using upto now as a marketplace model, a mobile apps like <strong>A QR Code Generator</strong> and <strong>A Meditation App</strong>, and <strong>POS Systems</strong>. 
              Each project challenged me to experiment with different technologies and focus on performance, and usability.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <Image src="https://images.unsplash.com/photo-1563013544-824ae1b704d3" alt="E-Commerce Project" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow" />
              <Image src="/images/Projects/Meditation-App.png" alt="Meditation App" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow" />
              <Image src="/images/Projects/data-streams.png" alt="QR Code Generator" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow" />
            </div>
          </div>
        ),
    },
];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
