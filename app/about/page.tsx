"use client";
import React from "react";
import Image from "next/image";
import { Title, Card, CardTitle, MainContainer, Paragraph } from "@/components/Styled";

const AboutPage: React.FC = () => {
    return (
        <MainContainer>
            <Title>About</Title>
            <Card className="flex flex-col items-center sm:w-[80%] md:w-[60%]">
                <CardTitle className="text-[6vw]">Astraeus Technologies</CardTitle>
                <Image src="/logo.png" className="mb-6 mt-2 w-[40vw]" alt="Astraeus Logo"/>
                <Paragraph className="text-lg">Astraeus Technologies is far more than just a corporate entity; it&apos;s a veritable engine of technological innovation. In the realm of software, our expertise isn&apos;t merely expected—it&apos;s a cornerstone. We&apos;ve honed our skills to a level where software engineering is second nature, making us trusted experts in delivering robust, scalable solutions. <br /><br />

But we&apos;re not just coders; we&apos;re craftsmen of hardware as well. Excellence in hardware development isn&apos;t an occasional win for us; it&apos;s a consistent habit. We&apos;re devoted to creating physical products that aren&apos;t just functional, but exceptional, pushing the boundaries of what&apos;s possible with each new iteration.<br /><br />

However, Astraeus Technologies&apos; ambitions extend far beyond traditional tech. We&apos;re pioneers in the emerging field of Cyberware, a cutting-edge realm where wearable technology and Artificial Intelligence converge. In this space, we&apos;re not just participants; we&apos;re trendsetters, actively developing products and systems that will define how humans interact with technology for years to come.<br /><br />

With Astraeus, the future isn&apos;t an abstract concept or a fanciful dream—it&apos;s an impending reality. We&apos;re not just envisioning the world of tomorrow; we&apos;re actively building it, laying the bricks that will pave the road to a future where technology is not just a tool, but an extension of human capability.</Paragraph>

            </Card>
            
            <Card className="flex flex-col items-center sm:w-[80%] md:w-[60%]">
                <CardTitle className="text-[6vw]">AJ Blondell</CardTitle>
                <Image src="/AJ.jpeg" alt="AJ picture" className="rounded-md mt-2 mb-6 w-[40vw]"/>
                <Paragraph>AJ is the mind behind Astraeus. Born on the Oregon coast, now based in Austin, AJ&apos;s always had a knack for messing with the status quo. A hands-on kind of person, AJ started off in the mechanical trenches, working as an apprentice Millwright in the paper industry.<br /><br />But they wanted something more.

That something more began with a scrapped PC found in a dumpster in Seattle. AJ&apos;s thought? &quot;How does this thing go from a hunk of metal to a window into another world just by plugging it into the wall?&quot; This itch for answers set AJ on a self-taught deep dive into the world of computers, first tinkering with Ubuntu Linux and Python.

Not content with just scratching the surface, AJ moved on to get their hands dirty with C/C++ and even some basic assembly code. Why? To get how software and hardware actually talk to each other, not just how they should in theory.

<br /><br />Web tech was the next playground, and AJ ran with it, mastering JavaScript and TypeScript. Today, if you need a kickass full-stack website built on React, AJ&apos;s your go-to. But what really fires AJ up? Decentralization. With skills in Solidity and even some Vyper under their belt, AJ&apos;s creating smart contracts that are most at home on Ethereum and Polygon chains.

And because why stop at just software, AJ&apos;s into Mechatronics and AI, blending all their skills into one wicked package. So yeah, Astraeus isn&apos;t just another tech venture. It&apos;s where AJ&apos;s putting all these puzzle pieces together to cook up something you haven&apos;t even dreamed of yet.</Paragraph>
            </Card>
        </MainContainer>
    );
}

export default AboutPage;