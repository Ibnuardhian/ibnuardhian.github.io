function CertificationItem(props) {
    return (
        <div className="group flex flex-col p-5 transition-all bg-surface-200 hover:scale-110 brightness-75 hover:brightness-100 hover:z-10 ">
            <div className='text-surface-600 mb-4 flex flex-row items-center justify-between'>
            </div>
            <div className="text-surface-600 text-xs mb-4">{props.date}</div>
            {props.href ? <a href={props.href} target="_blank" rel="noopener noreferrer"><h1 className="mb-4 text-xl subpixel-antialiased hover:text-primary-500 transition-colors duration-500">{props.name}</h1></a> : <h1 className="mb-4 text-xl subpixel-antialiased">{props.name}</h1>}
            {props.organizationHref ? <a href={props.organizationHref} target="_blank" rel="noopener noreferrer"><h2 className="text-surface-600 text-xs mb-4 hover:underline">{props.organization}</h2></a> : <h2 className="text-surface-600 text-xs mb-4">{props.organization}</h2>}
            <div className="text-surface-600 text-xs mb-4">{props.description}</div>
            <div className='flex flex-row flex-wrap'>
                {props.skills ? props.skills.map(function(object, index){
                    const formattedSkill = object.charAt(0).toUpperCase() + object.slice(1);
                    return <div key={object} className='bg-surface-400 py-1 px-3 rounded-full text-xs mr-2 mb-2'>{formattedSkill}</div>
                }) : ""}
            </div>
        </div>
    )
}

export default CertificationItem;
