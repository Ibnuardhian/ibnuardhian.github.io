import React from "react";
import ProjectItem from "./project-item";

const Projects = (props) => {
    return (
        <div data-section id={props.id} className='min-h-screen py-24 flex flex-col justify-center'>
            <h2 className='mb-8 visible lg:invisible font-medium tracking-widest'>{props.title}</h2>
            <div className='grid grid-cols-2 gap-2'>
                {props.data.map(function(object, index){
                    return <ProjectItem
                        key={object.name}
                        name={object.name}
                        stars={object.stars}
                        stacks={object.stacks}
                        role={object.role}
                        description={object.description}
                        href={object.href}
                    />
                })}
            </div>
        </div>
    )
}

export default Projects
