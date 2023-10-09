"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StickyContainer className='w-screen'>
            <Link href={"/"}>
                <Logo src="/logo.png" alt="Home" className="w-12 top-3 absolute" />
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
