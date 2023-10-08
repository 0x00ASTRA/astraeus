"use client";
import React from 'react';
import styles from '@/styles/GlitchEffect.module.css';
import Link from 'next/link';

export default function MainLogo() {
    const handleMouseEnter = (event) => {
        const logoCursor = document.createElement('img');
        logoCursor.src = '/logo.png';
        logoCursor.id = 'logoCursor';
        logoCursor.style.position = 'absolute';
        logoCursor.style.height = '1.5em';
        logoCursor.style.zIndex = '-1';
        logoCursor.style.marginLeft = '4em';
        logoCursor.style.transition = 'top 0.2s, left 0.2s';
        document.body.appendChild(logoCursor);
        updateLogoPosition(event);
    };

    const handleMouseLeave = () => {
        const logoCursor = document.getElementById('logoCursor');
        if (logoCursor) {
            document.body.removeChild(logoCursor);
        }
    };

    const handleMouseMove = (event) => {
        updateLogoPosition(event);
    };

    const updateLogoPosition = (event) => {
        const logoCursor = document.getElementById('logoCursor');
        if (logoCursor) {
            const rect = event.target.getBoundingClientRect();
            logoCursor.style.top = `${rect.bottom + window.scrollY}px`;
            logoCursor.style.left = `${rect.left + window.scrollX}px`;
        }
    };

    return (
        <div className={`${styles.container}`}>
            <h1 className={styles.glitch} data-text="ASTRAEUS">
                ASTRAEUS
            </h1>
            <ul className={`${styles.navList}`}>
                <li
                    data-text="Software"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                >
                    <Link href='software' onClick={handleMouseLeave}>
                        <p>Software</p>
                    </Link>
                </li>
                <li
                    data-text="Hardware"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                >
                    <Link href='hardware' onClick={handleMouseLeave}>
                        <p>Hardware</p>
                    </Link>
                </li>
                <li
                    data-text="Cyberware"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                >
                    <Link href='cyberware' onClick={handleMouseLeave}>
                        <p>Cyberware</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
