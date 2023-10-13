"use client";
import React from "react";
import { Title, Card, CardTitle, MainContainer, Paragraph } from "@/components/Styled";

const AboutPage: React.FC = () => {
    return (
        <MainContainer>
            <Title>About</Title>
            <Card className="flex flex-col items-center sm:w-[80%] md:w-[60%]">
                <CardTitle className="text-[6vw]">Astraeus Technologies</CardTitle>
                <img src="/logo.png" className="mb-6 mt-2 w-[40vw]"/>
                <Paragraph className="text-lg">Astraeus Technologies is far more than just a corporate entity; it's a veritable engine of technological innovation. In the realm of software, our expertise isn't merely expected—it's a cornerstone. We've honed our skills to a level where software engineering is second nature, making us trusted experts in delivering robust, scalable solutions. <br /><br />

But we're not just coders; we're craftsmen of hardware as well. Excellence in hardware development isn't an occasional win for us; it's a consistent habit. We're devoted to creating physical products that aren't just functional, but exceptional, pushing the boundaries of what's possible with each new iteration.<br /><br />

However, Astraeus Technologies' ambitions extend far beyond traditional tech. We're pioneers in the emerging field of Cyberware, a cutting-edge realm where wearable technology and Artificial Intelligence converge. In this space, we're not just participants; we're trendsetters, actively developing products and systems that will define how humans interact with technology for years to come.<br /><br />

With Astraeus, the future isn't an abstract concept or a fanciful dream—it's an impending reality. We're not just envisioning the world of tomorrow; we're actively building it, laying the bricks that will pave the road to a future where technology is not just a tool, but an extension of human capability.</Paragraph>

            </Card>
            
            <Card className="flex flex-col items-center sm:w-[80%] md:w-[60%]">
                <CardTitle className="text-[6vw]">AJ Blondell</CardTitle>
                <img src="/AJ.jpeg"  className="rounded-md mt-2 mb-6 w-[40vw]"/>
                <Paragraph>AJ is the mind behind Astraeus. Born on the Oregon coast, now based in Austin, AJ's always had a knack for messing with the status quo. A hands-on kind of person, AJ started off in the mechanical trenches, working as an apprentice Millwright in the paper industry.<br /><br />But they wanted something more.

That something more began with a scrapped PC found in a dumpster in Seattle. AJ's thought? "How does this thing go from a hunk of metal to a window into another world just by plugging it into the wall?" This itch for answers set AJ on a self-taught deep dive into the world of computers, first tinkering with Ubuntu Linux and Python.

Not content with just scratching the surface, AJ moved on to get their hands dirty with C/C++ and even some basic assembly code. Why? To get how software and hardware actually talk to each other, not just how they should in theory.

<br /><br />Web tech was the next playground, and AJ ran with it, mastering JavaScript and TypeScript. Today, if you need a kickass full-stack website built on React, AJ's your go-to. But what really fires AJ up? Decentralization. With skills in Solidity and even some Vyper under their belt, AJ's creating smart contracts that are most at home on Ethereum and Polygon chains.

And because why stop at just software, AJ's into Mechatronics and AI, blending all their skills into one wicked package. So yeah, Astraeus isn't just another tech venture. It's where AJ's putting all these puzzle pieces together to cook up something you haven't even dreamed of yet.</Paragraph>
            </Card>
        </MainContainer>
    );
}

export default AboutPage;