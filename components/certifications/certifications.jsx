import React from "react";
import CertificationItem from "./certification-item"; // Ensure this path is correct

const Certifications = (props) => {
    return (
        <div data-section id="certifications" className='mb-16 scroll-mt-24'>
            <h2 className='mb-8 visible lg:invisible font-medium tracking-widest'>{props.title}</h2>
            <div className='grid grid-cols-2 gap-2'>
                {props.data.map(function(object, index){
                    return <CertificationItem
                        key={object.name}
                        name={object.name}
                        organization={object.organization}
                        organizationHref={object.organizationHref}
                        date={object.date}
                        skills={object.skills}
                        description={object.description}
                        href={object.href}
                    />
                })}
            </div>
        </div>
    )
}

export default Certifications
