import React from 'react'
import InfiniteScroll from './InfiniteScroll';

export default function Content() {
    const items = [
        { content: "It all started with 'Hello World'" },
        { content: <p>Late nights debugging, fueled by coffee and curiosity</p> },
        { content: "First website: A mess of HTML and inline CSS" },
        { content: <p>Learning JavaScript - The 'aha!' moments</p> },
        { content: "Discovering React changed everything" },
        { content: <p>Building projects, breaking things, learning fast</p> },
        { content: "Stack Overflow became my best friend" },
        { content: <p>That feeling when the code finally works!</p> },
        { content: "Mastering Git after countless merge conflicts" },
        { content: <p>From junior dev to mentoring others</p> },
        { content: "Building tools that make a difference" },
        { content: <p>Every bug is a lesson in disguise</p> },
        { content: "Still learning something new every day" },
        { content: <p>The journey never really ends...</p> },
      ];
  return (
    <div className='bg-[#4E4E5A] py-8 px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <InfiniteScroll
            items={items}
            isTilted={true}
            tiltDirection='left'
            autoplay={true}
            autoplaySpeed={0.1}
            autoplayDirection="down"
            pauseOnHover={true}
        />
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
                <a href='https://wa.me/+254745655563' target='_blank'>Contact Me</a>
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>Professional</h3>
                <a href='#'>Skills</a>
                <a href='#'>Experience</a>
                <a href='#'>Resume</a>
            </div>
        </div>
    )
}