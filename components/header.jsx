"use client";

import React from "react";
import Navigation from "./navigation";
import Socials from "./socials";
import Typewriter from "typewriter-effect";

const Header = (props) => {
    return (
        <div className='lg:fixed h-screen basis-1.5/4 flex flex-col justify-between pb-24 lg:pb-48 self-center lg:self-auto'>
            <div className=''>
                <h1 className='text-5xl subpixel-antialiased tracking-wide w-3/4'>{props.data.name}</h1>
                <h2 className='text-surface-600 pt-2 text-base font-normal tracking-wider w-1/2'>
                    {props.data.headline} 
                    <strong>
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
        </div>
    )
}

export default Header
