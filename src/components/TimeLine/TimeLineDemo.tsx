import Image from "next/image";
import React from "react";
import { Timeline } from "./timeline";

export default function TimelineDemo() {
  const data = [
    {
        title: "2025 (Expected Graduation)",
        content: (
          <div>
            <p className="text-white dark:text-neutral-200 text md:text font-normal mb-8">
              Expected to graduate with a Bachelor&apos;s degree in Information Technology from JKUAT.
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
              Working as a Full-Time Software Engineer, leading full-stack development using ASP.NET and Knockout.js.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
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
              Interning as a junior software developer developing full-stack applications using .NET frameworks, including Xamarin and C# for a startup.
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
              Developed various projects including a fraud detection system using Machine Learning, a meditation Android app, a QR code generator, e-commerce websites and POS systems.
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
