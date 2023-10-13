"use client";
import React from "react";
import Link from "next/link";
import { Title, Card, CardTitle, MainContainer } from "@/components/Styled";

const ContactPage: React.FC = () => {
    return (
        <MainContainer>
    <Title>Contact</Title>
    <div className="cards-container">
        <Link href={"https://discord.gg/vxn2xUdze8"}>
            <Card className="flex flex-col items-center justify-center w-[20rem] h-[25rem]">
                <CardTitle className="w-[95%] flex text-center justify-center">Discord</CardTitle>
                <img className="w-30" src="/discord-logo.png" />
            </Card>
        </Link>

        <Link href={"mailto:astraeus.technologies.co@gmail.com"}>
            <Card className="flex flex-col items-center justify-center w-[20rem] h-[25rem]">
                <CardTitle className="w-[95%] flex text-center justify-center">Email</CardTitle>
                <img className="w-30" src="/email-logo.png" />
            </Card>
        </Link>

        <Link href={"https://X.com/Astraeus_Tech"}>
            <Card className="flex flex-col items-center justify-center w-[20rem] h-[25rem]">
                <CardTitle className="w-[95%] flex text-center justify-center">X</CardTitle>
                <img className="w-30" src="/X-logo.png" />
            </Card>
        </Link>
    </div>
</MainContainer>

    );
}

export default ContactPage;