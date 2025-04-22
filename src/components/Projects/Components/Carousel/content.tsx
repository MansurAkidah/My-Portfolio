"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "./cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-grey-500 dark:text-neutral-200 font-sans">
        My projects.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
interface DummyContentProps {
  title: string;
  description: string;
  imageSrc: string;
}

const DummyContent: React.FC<DummyContentProps> = ({ title, description, imageSrc }) => {
  return (
    <>
      {[...new Array(1).fill(1)].map((key, index) => {
        return (
          <div key={"dummy-content" + index} className="bg-neutral-800 dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4" >
            <p className="text-neutral-300 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-100 dark:text-neutral-200"> {title} :</span>{" "}
              {description}
            </p>
            <Image
              src={imageSrc}
              alt={title}
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Android App",
    title: "Meditation app with soothing music.",
    src: "/images/medi app.jpg",
    content:  (
      <DummyContent
        title="Meditation & Relaxation"
        description="A mobile app designed to help you meditate with soothing sounds and guided sessions."
        imageSrc="/images/medi app.jpg"
      />
    ),
  },
  {
    category: "E Commerce",
    title: "GearHut.",
    src: "/images/Projects/newgear.jpg",
    content: (
      <DummyContent
        title="GearHut - Your Ultimate Shopping Hub"
        description="An e-commerce platform offering the latest tech gadgets and accessories."
        imageSrc="/images/Projects/newgear.jpg"
      />
    ),
  },
  {
    category: "React App",
    title: "POS System.",
    src: "/images/Projects/pos stats.png",
    content: (
      <DummyContent
        title="POS System"
        description="A React-based Point-of-Sale system for efficient store management and transactions."
        imageSrc="/images/Projects/pos stats.png"
      />
    ),
  },
  {
    category: "Web-App",
    title: "Cakes and Pastries website.",
    src: "/images/Projects/face.jpg",
    content:  (
      <DummyContent
      title="RummyYummy Cakes and Pastries"
      description="A site to showcase and make orders on cakes and Pastries for a talented Baker."
      imageSrc="/images/projects/face.jpg"
      />
    ),
  },
  {
    category: "Web-App",
    title: "Fraud Detection System using ML.",
    src: "/images/Projects/face.jpg",
    content:  (
      <DummyContent
      title="AI-Powered Fraud Detection"
      description="An ML-driven system for detecting and preventing fraudulent transactions in real time."
      imageSrc="/images/Projects/face.jpg"
      />
    ),
  },
  {
    category: "Web-App",
    title: "RealEstate Management System.",
    src: "/images/Projects/realestate.png",
    content: (
      <DummyContent
        title="RealEstate Management"
        description="A web app designed to manage real estate listings, tenants, and transactions seamlessly."
        imageSrc="/images/Projects/realestate.png"
      />
    ),
  },
  
];
