"use client";
import React from 'react';
import { Paragraph, CardTitle, Card, Title, MainContainer } from "@/components/Styled";

const SoftwarePage: React.FC = () => {
    return (
        <MainContainer>
            <Title>Software</Title>
            
            <Card>
                <CardTitle>Web</CardTitle>
                <Paragraph><span className=''>Astraeus</span> specializes in component-based full-stack web design, tailored to your unique requirements. Our approach ensures you connect with more customers, driving profitability.</Paragraph>
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
                <CardTitle>Artificial Intelligence</CardTitle>
                <Paragraph>Astraeus provides top-tier solutions for Machine Learning and Artificial Intelligence systems. Our expertise ranges from designing custom Neural Networks to developing full featured AI Agents, ensuring seamless integration and optimal performance.</Paragraph>
                <ul>
                  <li>Custom Neural-Nets</li>
                  <li>Bleeding Edge Solutions</li>
                  <li>Autonomous Agents</li>
                  <li>Maximize Efficiency</li>
                </ul>
            </Card>
        </MainContainer>
    )
}

export default SoftwarePage;