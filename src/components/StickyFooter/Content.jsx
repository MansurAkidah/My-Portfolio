import React from 'react'
// import InfiniteScroll from './InfiniteScroll';
import InfiniteMenu from './InfinityMenu'

export default function Content() {
    
  return (
    <div className='bg-[#000000] py-8 px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end'>
            <h1 className='text-[14vw] leading-[0.8] mt-5'>Thank you</h1>
            <p>©copyright</p>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-10 mt-20'>
            <div className='flex flex-col gap-1'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>Navigation</h3>
                <a href='#'>Home</a>
                <a href='/projects'>Projects</a>
                <a href='https://www.linkedin.com/in/mansurakidah/' target='_blank'>Contact Me</a>
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>Professional</h3>
                <a href='#'>Skills</a>
                <a href='#'>Experience</a>
                <a href='/docs/Mansur.pdf' target="_blank">Resume</a>
            </div>
        </div>
    )
}