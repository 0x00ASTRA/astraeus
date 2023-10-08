"use client";
import React from 'react';
import Link from 'next/link';
import { animateScroll as scroll } from 'react-scroll';
import MainLogo from "@/components/MainLogo";

export default function Home() {
  
  const handleScroll = (event) => {
    if (event.deltaY > 0) {  // Check if scroll is downward
      scroll.scrollTo(window.innerHeight, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      });
    }
  };

  return (
    <main className="m-2 p-2 bg-black" onWheel={handleScroll}>
      {/* main logo */}
      <MainLogo />
      {/* On Scroll: scroll down a screen's height to display contact info */}
      <div id="scroll-container" style={{ position: 'relative', overflowY: 'auto', height: '100vh' }}>
        <div id="contact-info" style={{ minHeight: '100vh', textAlign: 'center'}}>
          <Link href={'message'}>
            <h1 className='text-5xl'>💬</h1>
            <h3 className='text-white'>Message</h3>
          </Link>
        </div>
      </div>
    </main>
  )
}
