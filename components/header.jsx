"use client";

import React from "react";
import Socials from "./socials";
import Typewriter from "typewriter-effect";

const Header = (props) => {
    return (
        <div className='flex w-full flex-col gap-8 py-6 lg:sticky lg:top-24 lg:self-start'>
            <div className=''>
                <h1 className='text-3xl sm:text-4xl subpixel-antialiased tracking-wide w-full break-words'>{props.data.name}</h1>
                <h2 className='text-surface-600 pt-2 text-base font-normal tracking-wider w-full max-w-md'>
                    {props.data.headline} 
                    <strong className="text-primary-500">
                        <Typewriter options={{ strings: props.typewriterStrings, autoStart: true, loop: true, delay: 50 }} />
                    </strong>
                    {props.data.headlineSuffix}
                </h2>
            </div>
            <Socials data={props.data.socials} label={props.labels.getInTouch}></Socials>
        </div>
    )
}

export default Header
