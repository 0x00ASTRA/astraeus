import React from "react";
import Link from "next/link";

const MainContainer: React.FC = () => {
    return(
        <main className="flex-col items-center gap-3 m-0 p-2 bg-inherit" />
    );
}

const Title: React.FC = () => {
    return (
        <h1 className="text-4xl shadow-md shadow-neutral-950 mb-2 text-neutral-900"/>
    );
}

const Card: React.FC = () => {
    return (
        <section className="w-20 h-32 p-2 bg-[rgba(255,255,255,0.1)] backdrop:blur-lg shadow-md shadow-[rgba(0,0,0,0.2) mx-[3vw] my-[1%]] hover:translate-y-2"/>
    );
}

const CardItem: React.FC = () =>  {
    return (
        <li className="hover:bg-[rgba(255,255,255,0.35)] text-md text-neutral-900 px-1 py-2 relative pl-4 mb-1 rounded-md style={&::before{&::before {
            content: '→';
            color: #FF0000;
            position: absolute;
            font-size: 2rem;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        }}}"/>
    );
}

const CardTitle: React.FC = () => {
    return (
        <h3 className="text-4xl text-neutral-100 shadow-md mb-3 bg-stone-900 bg-opacity-80 rounded-md blur-lg border-neutral-200 border-opacity-20"/>
    );
}

const Paragraph: React.FC = () => {
    return (
        <p className="text-2xl text-neutral-900 mb-3"></p>
    );
}

export { MainContainer, Title, Card, CardItem, CardTitle, Paragraph };