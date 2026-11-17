function ProjectItem(props) {
    return (
        <a href={props.href || undefined} target={props.href ? "_blank" : undefined} rel={props.href ? "noopener noreferrer" : undefined} className={`group flex flex-col p-5 transition-all bg-surface-200 brightness-75 hover:brightness-100 hover:z-10 ${props.href ? 'hover:scale-110' : ''}`}>
            <div className='text-surface-600 mb-4 flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <span className='ml-1 text-xs font-medium'>{props.role.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
                </div>
            </div>
            <h1 className="mb-4 text-xl subpixel-antialiased">{props.name}</h1>
            <div className="text-surface-600 text-xs mb-4">{props.description}</div>
            <div className='flex flex-row flex-wrap'>
                {props.stacks ? props.stacks.map(function(object, index){
                    const formattedStack = object.charAt(0).toUpperCase() + object.slice(1);
                    return <div key={object} className='bg-surface-400 py-1 px-3 rounded-full text-xs mr-2 mb-2'>{formattedStack}</div>
                }) : ""}
            </div>
        </a>
    )
}

export default ProjectItem
