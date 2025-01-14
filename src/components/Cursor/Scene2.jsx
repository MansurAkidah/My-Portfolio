'use client';
import React from 'react'
import Cursor from "@/components/Cursor/Cursor";
import { useState } from 'react';

export default function Scene2() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='h-[30vh] flex items-center justify-left'>
            {/* <h1 onMouseOver={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}} className="text-[4.5vw] max-w-[90vw] text-center text-white p-20">
                Hi, im Mansur Akidah
            </h1> */}
            <h2 onMouseOver={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}} className="text-[3.5vw] max-w-[90vw] text-center text-white p-10">
                {/* Here&apos;s my journey in software design and development . */}
                Skills
            </h2>
            <Cursor isActive={isActive}/>
        </div>
    )
}