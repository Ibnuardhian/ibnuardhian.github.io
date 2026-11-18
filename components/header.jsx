"use client";

import React, { useEffect, useState } from "react";
import Navigation from "./navigation";
import Socials from "./socials";
import Typewriter from "typewriter-effect";

const Header = (props) => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const updateScrollState = () => setHasScrolled(window.scrollY > 24);
        updateScrollState();
        window.addEventListener('scroll', updateScrollState, { passive: true });
        return () => window.removeEventListener('scroll', updateScrollState);
    }, []);

    return (
        <div className='lg:fixed h-screen basis-1.5/4 flex flex-col justify-between pb-24 lg:pb-48 self-center lg:self-auto'>
            <div className=''>
                <h1 className='text-5xl subpixel-antialiased tracking-wide w-3/4'>{props.data.name}</h1>
                <h2 className='text-surface-600 pt-2 text-base font-normal tracking-wider w-1/2'>
                    {props.data.headline} 
                    <strong className="text-primary-500">
                        <Typewriter options={{ strings: props.typewriterStrings, autoStart: true, loop: true, delay: 50 }} />
                    </strong>
                    {props.data.headlineSuffix}
                </h2>
            </div>
            <Navigation
                labels={props.navigation}
                languageLabel={props.labels.language}
                language={props.language}
                onLanguageChange={props.onLanguageChange}
            />
            <Socials data={props.data.socials} label={props.labels.getInTouch}></Socials>
            {hasScrolled && <div className="fixed left-1/2 top-0 z-40 w-[calc(100%-3rem)] max-w-5xl -translate-x-1/2 border-b border-surface-300 bg-surface-100/95 px-6 py-4 shadow-lg backdrop-blur-md">
                <span className="font-medium tracking-wide text-on-background">{props.data.name}</span>
            </div>}
        </div>
    )
}

export default Header
