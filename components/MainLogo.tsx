"use client";
import React from 'react';
import styles from '@/styles/GlitchEffect.module.css';
import Link from 'next/link';

export default function MainLogo() {
    return (
        <div className={`${styles.container}`}>
            <h1 className={styles.glitch} data-text="ASTRAEUS">
                ASTRAEUS
            </h1>
            <ul className={`${styles.navList}`}>
                <li
                    data-text="Software"
                >
                    <Link href='services/software'>
                        <p>Software</p>
                    </Link>
                </li>
                <li
                    data-text="Hardware"
                >
                    <Link href='services/hardware'>
                        <p>Hardware</p>
                    </Link>
                </li>
                <li
                    data-text="Cyberware"
                >
                    <Link href='services/cyberware'>
                        <p>Cyberware</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
