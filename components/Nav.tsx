"use client";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const darkenBG = (tailwindClass: string) => {
    // Return an object suitable for inline styles, applying darkening to the provided color class.
    // Here, the assumption is that the tailwindClass represents a color, like 'bg-red-500'.

    if (tailwindClass.startsWith('bg-')) {
        return `${tailwindClass} bg-opacity-50 backdrop-blur-md`;
    }

    // If the class doesn't start with 'bg-', we just return it unchanged.
    return tailwindClass;
};


function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [darkenedBg, setDarkenedBg] = useState("");  // <- state for the darkened background

    useEffect(() => {
        const handleScroll = () => {
            // Check the current scroll position and decide if we want to darken the background
            if (window.scrollY > 100) {  // Example threshold value
                setDarkenedBg(darkenBG("bg-[#222]"));
            } else {
                setDarkenedBg("");
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);  // Empty dependency array ensures the effect runs only once on mount and cleanup on unmount

    return (
        <StickyContainer className={`w-screen ${darkenedBg} h-10`}>
            <Link href={"/"}>
                <Logo src="/logo.png" alt="Home" className="w-12 top-2 absolute" />
            </Link>
            <OpenButton className='absolute right-5' onClick={() => setIsOpen(true)}>•••</OpenButton>
            {isOpen && (
                <Overlay>
                    <CloseButton onClick={() => setIsOpen(false)}>X</CloseButton>
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/about">About</NavItem>
                    <NavItem href="/services">Services</NavItem>
                    <NavItem href="/contact">Contact</NavItem>
                </Overlay>
            )}
        </StickyContainer>
    );
}

export default Nav;

const StickyContainer = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: transparent;
    z-index: 1001;  // Ensure it's above the overlay
`;

const Overlay = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    margin: 0;
    padding: 2rem;
    background: linear-gradient(135deg, #FED328, #ECD716);
    font-family: 'Space Mono', monospace;
    z-index: 1000;
    height: 100vh;
`;

const Logo = styled.img`
    height: auto;  // Maintain aspect ratio
`;

const NavItem = styled.a`
    color: #000;
    text-decoration: none;
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
        background-color: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(20px);
        color: #FFF;
        border: 1px solid rgba(244, 244, 244, 0.4);
    }
`;

const OpenButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 2rem;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #fff;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-weight: bold;
    cursor: pointer;
`;
