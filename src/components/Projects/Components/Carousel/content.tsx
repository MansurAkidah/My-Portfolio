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
          <div className="bg-neutral-800 dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4" >
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
    src: "/images/projects/new-gear.jpg",
    content: (
      <DummyContent
        title="GearHut - Your Ultimate Shopping Hub"
        description="An e-commerce platform offering the latest tech gadgets and accessories."
        imageSrc="/images/projects/new-gear.jpg"
      />
    ),
  },
  {
    category: "Web-App",
    title: "RealEstate Management System.",
    src: "/images/projects/realestate.png",
    content: (
      <DummyContent
        title="RealEstate Management"
        description="A web app designed to manage real estate listings, tenants, and transactions seamlessly."
        imageSrc="/images/projects/realestate.png"
      />
    ),
  },

  {
    category: "React App",
    title: "POS System.",
    src: "/images/projects/pos stats.png",
    content: (
      <DummyContent
        title="POS System"
        description="A React-based Point-of-Sale system for efficient store management and transactions."
        imageSrc="/images/projects/pos stats.png"
      />
    ),
  },
  {
    category: "Web-App",
    title: "Fraud Detection System using ML.",
    src: "/images/projects/face.jpg",
    content:  (
      <DummyContent
        title="AI-Powered Fraud Detection"
        description="An ML-driven system for detecting and preventing fraudulent transactions in real time."
        imageSrc="/images/projects/face.jpg"
      />
    ),
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:  (
      <DummyContent
        title="Join Our Team!"
        description="We are looking for a skilled Staff Software Engineer to join our fast-growing company."
        imageSrc="https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    ),
  },
];
