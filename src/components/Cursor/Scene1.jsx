'use client';
import React from 'react'
import GradientCursor from "@/components/Cursor/GradientCursor";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import TiltedCard from '@/components/TiltedCard/index';

export default function Scene1() {
    const [isActive, setIsActive] = useState(false);
    
    return (
        <div className='min-h-screen flex flex-col lg:flex-row gap-8 lg:gap-0 pb-8 lg:pb-0'>
            {/* Left side content */}
            <div className='w-full lg:w-1/2 flex flex-col justify-center px-6 lg:pl-16 pt-12 lg:pt-0'>
                <h1 
                    onMouseOver={() => {setIsActive(true)}} 
                    onMouseLeave={() => {setIsActive(false)}} 
                    className="text-3xl md:text-4xl lg:text-[4.5vw] text-white z-50 p-1"
                >
                    Hi, I&apos;m Mansur 
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-4 lg:mb-8">
                    (Full-Stack Software Developer)
                </p>
                <p className="max-w-xl text-sm lg:text-base text-gray-500">
                    Passionate about creating robust, scalable applications with a focus on user experience. 
                    Experienced in both front-end and back-end development, with a strong foundation in multiple programming languages and frameworks.
                </p>
                <div className="mt-6 lg:mt-8">
                    <FontAwesomeIcon icon="fa-solid fa-chevron-down" color="white" className="animate-bounce"/>
                </div>
            </div>

            {/* Right side - TiltedCard */}
            <div className='w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0'>
                <TiltedCard
                    imageSrc="/images/Mans.jpg"
                    altText="Mansur Akidah - Profile"
                    captionText="Mansur Akidah - Designer"
                    containerHeight={typeof window !== 'undefined' && window.innerWidth < 768 ? "300px" : "400px"}
                    containerWidth={typeof window !== 'undefined' && window.innerWidth < 768 ? "300px" : "400px"}
                    imageHeight={typeof window !== 'undefined' && window.innerWidth < 768 ? "300px" : "400px"}
                    imageWidth={typeof window !== 'undefined' && window.innerWidth < 768 ? "300px" : "400px"}
                    rotateAmplitude={8}
                    scaleOnHover={1.1}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-demo-text">
                            Mansur Akidah - Developer
                        </p>
                    }
                />
            </div>

            <GradientCursor isActive={isActive}/>
        </div>
    )
}