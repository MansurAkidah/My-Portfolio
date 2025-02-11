import React from 'react'
// import InfiniteScroll from './InfiniteScroll';
import InfiniteMenu from './InfinityMenu'

export default function Content() {
    const items = [
        {
            image: 'https://cdn.shopify.com/s/files/1/0070/7032/articles/Header_4bf3c320-7c35-478b-8159-5f5d360f9d92.png?v=1729897444&originalWidth=1848&originalHeight=782&width=1800',
            link: 'https://g-hut-eight.vercel.app/',
            title: 'GearHut (2023)',
            description: 'E-Commerce platform for a Nairobi-based retail accessory shop.'
        },
        {
            image: 'https://picsum.photos/300/300?grayscale',
            link: 'https://github.com/Merns999/MediApp',
            title: 'Meditation App (2023)',
            description: 'Multimedia platform featuring guided meditation content and exercises.'
        },
        {
            image: 'https://picsum.photos/300/300?grayscale',
            link: 'https://github.com/Merns999/QRGenerator',
            title: 'QR Generator (2022)',
            description: 'Android app for generating QR codes from text input.'
        },
        {
            image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=400&h=400&auto=format&fit=crop',
            link: 'https://www.example.com',
            title: 'E-migration (2022)',
            description: 'Web platform streamlining emigration processes for agencies.'
        },
        {
            image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=400&h=400&auto=format&fit=crop',
            link: 'https://www.example.com',
            title: 'Finalis (2023)',
            description: 'Hospital management system for patient records and administration.'
        },
        {
            image: 'https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?q=80&w=400&h=400&auto=format&fit=crop',
            link: 'https://github.com/Merns999/TheFlash',
            title: 'The Flash (2022)',
            description: 'Android utility app for quick flashlight control.'
        },
        {
            image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=400&h=400&auto=format&fit=crop',
            link: 'https://www.example.com',
            title: 'Golden Ticket (2021)',
            description: 'Customer support ticketing system for Airtel Kenya.'
        },
        {
            image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=400&h=400&auto=format&fit=crop',
            link: 'https://www.example.com',
            title: 'Fraud Detection System (2020)',
            description: 'ML-based system for real-time fraud prediction and flagging.'
        }
    ];
  return (
    <div className='bg-[#000000] py-8 px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        {/* <InfiniteScroll
            items={items}
            isTilted={true}
            tiltDirection='left'
            autoplay={true}
            autoplaySpeed={0.1}
            autoplayDirection="down"
            pauseOnHover={true}
        /> */}
        <InfiniteMenu items={items}/>
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