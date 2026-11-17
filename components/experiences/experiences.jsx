import React from "react";
import ExperienceItem from "./experience-item";

const Experiences = (props) => {
    return (
        <div data-section id='experiences' className='min-h-screen py-24 flex flex-col justify-center'>
            <h2 className='mb-8 visible lg:invisible font-medium tracking-widest'>{props.title}</h2>
            {props.data.map(function(object, index){
                return <ExperienceItem  
                    key={`${object.title}+${object.startDate}`}
                    title={object.title}
                    company={object.company}
                    href={object.href}
                    startDate={object.startDate}
                    endDate={object.endDate}
                    description={object.description}
                    logo={object.logo}
                    skills={object.skills}
                />
            })}
        </div>
    )
}

export default Experiences
