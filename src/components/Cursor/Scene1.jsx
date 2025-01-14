'use client';
import React from 'react'
import GradientCursor from "@/components/Cursor/GradientCursor";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

export default function Scene1() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='h-[70vh] flex flex-col text-center items-center justify-center align-center'>
            <h1 onMouseOver={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}} className="text-[4.5vw] max-w-[50vw] text-center text-white z-50 p-1">
                Hi, I&apos;m Mansur Akidah
            </h1>
            <p className="text-xl text-gray-600 mb-8">(Full-Stack Software Developer)</p>
            <p className="max-w-2xl mx-auto text-gray-500">
                Passionate about creating robust, scalable applications with a focus on user experience. 
                Experienced in both front-end and back-end development, with a strong foundation in multiple programming languages and frameworks.
            </p>
            <FontAwesomeIcon icon="fa-solid fa-chevron-down" color="white"/>
            <GradientCursor isActive={isActive}/>
        </div>
    )
}