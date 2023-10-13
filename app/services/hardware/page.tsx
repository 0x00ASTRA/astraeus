"use client";
import React from 'react';
import { Paragraph, CardTitle, Card, Title, MainContainer } from "@/components/Styled";

const HardwarePage: React.FC = () => {
    return (
      <MainContainer>
        <Title>Hardware</Title>
        
        <Card>
            <CardTitle>PLC</CardTitle>
            <Paragraph>When it comes to Programmable Logic Controllers and IoT, Astraeus has you covered. We deliver top performing hardware designs and products to better serve you, so you can focus on your business rather than the tech.</Paragraph>
            <ul>
                <li>Custom PLC Firmware</li>
                <li>IoT Solutions</li>
                <li>Custom Boards and Devices</li>
            </ul>
        </Card>

        <Card>
            <CardTitle>Repair</CardTitle>
            <Paragraph>If you&apos;re in need of repair for your device(s), Astraeus has you covered. With extensive knowledge and expirience with electronics repair, you can count on your devices being back in business in no time.</Paragraph>
            <ul>
                <li>Circuit Boards</li>
                <li>Computers</li>
                <li>Data Recovery</li>
                <li>Mobile</li>
            </ul>
        </Card>

        <Card>
            <CardTitle>Industrial Solutions</CardTitle>
            <Paragraph>Whether you&apos;re a warehouse looking for AI solutions for improving logistics efficiency or a Mechanical Industrial Firm looking for bleeding-edge tech solutions, Astraeus is the solution for you. Rooted in Heavy Industrial Mechanical, Astraeus provides top-tier modern precision tech solutions, ensuring that the technology is the last point of failure.</Paragraph>
            <ul>
              <li>Precision Products</li>
              <li>Bleeding Edge Solutions</li>
              <li>Autonomy and Logistics</li>
              <li>Maximize Efficiency</li>
            </ul>
        </Card>
      </MainContainer>
    );
  };

export default HardwarePage;