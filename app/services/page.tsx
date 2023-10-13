"use client";
import React from 'react';
import Link from 'next/link';
import { Paragraph, CardTitle, Card, Title, MainContainer } from "@/components/Styled";

const ServicesPage: React.FC = () => {

  return (
    <MainContainer>
        <Title>Services</Title>
        <div className='cards-container'>
            <Link href={"/services/software"}>
                <Card className='w-[20rem] h-[25rem]'>
                    <CardTitle className='flex justify-center text-2xl -m-4'>Software</CardTitle>
                    <Paragraph className='text-md'>From custom-built applications to intricate systems, Astraeus crafts software solutions tailored to individual challenges. Whether streamlining operations or breaking new ground, our prowess turns visions into reality.</Paragraph>
                </Card>
            </Link>

            <Link href={"/services/hardware"}>
                <Card className='w-[20rem] h-[25rem]'>
                    <CardTitle className='flex text-2xl justify-center -m-4'>Hardware</CardTitle>
                    <Paragraph className='text-md'>Delve into a realm where tangible meets the intangible. Astraeus innovates at the forefront of hardware technology, creating devices and systems that interweave seamlessly with the digital realm, redefining boundaries.</Paragraph>
                </Card>
            </Link>

            <Link href={"/services/cyberware"}>
                <Card className='w-[20rem] h-[25rem]'>
                    <CardTitle className='flex text-2xl justify-center -m-4'>Cyberware</CardTitle>
                    <Paragraph className="text-md">Step into the future with Astraeus, pioneering the next evolution of human-technology integration. Our cyberware endeavors focus on enhancing human capabilities and fostering a new era of existence.</Paragraph>
                </Card>
            </Link>
        </div>
    </MainContainer>
  )
}

export default ServicesPage;