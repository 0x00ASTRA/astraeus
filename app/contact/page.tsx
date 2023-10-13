"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Title, Card, CardTitle, MainContainer } from "@/components/Styled";

const ContactPage: React.FC = () => {
    return (
        <MainContainer>
    <Title>Contact</Title>
    <div className="cards-container">
        <Link href={"https://discord.gg/vxn2xUdze8"}>
            <Card className="flex flex-col items-center justify-center w-[20rem] h-[25rem]">
                <CardTitle className="w-[95%] flex text-center justify-center">Discord</CardTitle>
                <Image className="w-30" src="/discord-logo.png" alt="Discord Logo"/>
            </Card>
        </Link>

        <Link href={"mailto:astraeus.technologies.co@gmail.com"}>
            <Card className="flex flex-col items-center justify-center w-[20rem] h-[25rem]">
                <CardTitle className="w-[95%] flex text-center justify-center">Email</CardTitle>
                <Image className="w-30" src="/email-logo.png" alt="Email Logo"/>
            </Card>
        </Link>

        <Link href={"https://X.com/Astraeus_Tech"}>
            <Card className="flex flex-col items-center justify-center w-[20rem] h-[25rem]">
                <CardTitle className="w-[95%] flex text-center justify-center">X</CardTitle>
                <Image className="w-30" src="/X-logo.png" alt="X Logo"/>
            </Card>
        </Link>
    </div>
</MainContainer>

    );
}

export default ContactPage;