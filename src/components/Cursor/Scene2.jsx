'use client';
import React from 'react'
import Cursor from "@/components/Cursor/Cursor";
import { useState } from 'react';

export default function Scene2() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='h-[30vh] flex items-center justify-center'>
            {/* <h1 onMouseOver={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}} className="text-[4.5vw] max-w-[90vw] text-center text-white p-20">
                Hi, im Mansur Akidah
            </h1> */}
            <h2 onMouseOver={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}} className="text-[3.5vw] max-w-[90vw] text-center text-white p-10">
                Here&apos;s what my peers and mentors had to say.
                {/* Projects */}
            </h2>
            <Cursor isActive={isActive}/>
        </div>
    )
}