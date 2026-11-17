import React from "react";
import Image from "next/image"; // Added correct import for Image component

const About = (props) => {
    return (
        <div data-section id='about' className='min-h-screen py-24 flex flex-col justify-center group'>
            <div className="flex items-center justify-center mb-4">
                <Image src={props.data.profileImage} alt="Profile Image" width={200} height={200} className='rounded-full object-cover border-4 border-primary-500' />
            </div>
            <div className='text-surface-600'>
                {props.data.about.map(function(paragraph, index){
                    return <div key={paragraph} className='mb-6'>{paragraph}</div>
                })}
            </div>
        </div>
    )
}

export default About
