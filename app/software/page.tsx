"use client";
import React from 'react';
import styled from 'styled-components';
import styles from '@/styles/GlitchEffect.module.css';

export default function Software() {
    return (
        <MainContainer>
            <Title>Software</Title>
            
            <Card>
                <CardTitle>Web</CardTitle>
                <Paragraph>Astraeus specializes in component-based full-stack web design, tailored to your unique requirements. Our approach ensures you connect with more customers, driving profitability.</Paragraph>
                <ul>
                    <li>Fully Customized Websites</li>
                    <li>Cutting-Edge Design</li>
                    <li>Reliable and Efficient Solutions</li>
                </ul>
            </Card>

            <Card>
                <CardTitle>Systems</CardTitle>
                <Paragraph>Need custom server-side scripting, automation, or administration? Astraeus is here for you. With a robust background in server-side automation and IT systems, we ensure you allocate resources effectively, maximizing customer engagement and profits.</Paragraph>
                <ul>
                    <li>Linux</li>
                    <li>MacOS</li>
                    <li>Windows</li>
                    <li>iOS/Android Integration</li>
                </ul>
            </Card>

            <Card>
                <CardTitle>Micro-Controller and Logic Controllers</CardTitle>
                <Paragraph>Astraeus provides top-tier solutions for micro-controller and logic controller systems. Our expertise ranges from designing custom circuits to developing firmware for various platforms, ensuring seamless integration and optimal performance.</Paragraph>
            </Card>
        </MainContainer>
    )
}

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    margin: 0;
    padding: 2rem;
    background: linear-gradient(135deg, #FED328, #ECD716);
    font-family: 'Space Mono', monospace;  // <-- Changed Font
`;

const Title = styled.h1`
    font-size: 4rem;
    font-weight: bold;
    color: #222;   // <-- Darker Color
    text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 2rem;
`;

const Card = styled.section`
    width: 100%;
    max-width: 800px;
    padding: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);  // More pronounced shadow
    transition: transform 0.3s;

    &:hover {
        transform: translateY(-10px);
    }

    ul {
        list-style: none;
        padding: 0;  // Remove default padding
    }

    li {
        font-size: 1.2rem;
        color: black;
        padding: 0.5rem 1rem;  // Added more padding for an airy look
        position: relative;
        margin-bottom: 0.5rem;
        background-color: rgba(255, 255, 255, 0.42);
        border-radius: 0.5rem;

        &::before {
            content: '→';
            color: #FF0000;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        }

        &:hover {
            background-color: rgba(255, 255, 255, 0.55);  // Subtle hover effect for list items
        }
    }
`;

const CardTitle = styled.h3`
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    margin-bottom: 1.5rem;
    background-color: black;  // Added this line
    padding: 0.5rem 1rem;     // Added this line for some padding around the title
`;

const Paragraph = styled.p`
    font-size: 1.5rem;
    color: #000000;
    margin-bottom: 1.5rem;
`;
