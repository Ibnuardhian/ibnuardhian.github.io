import React from "react";

export default function Skills({ data, title }) {
    return (
        <section data-section id="skills" className="mb-16">
            <h2 className="mb-8 visible lg:invisible font-medium tracking-widest">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {data.map((group) => (
                    <div key={group.category} className="p-5 bg-surface-200">
                        <h3 className="mb-3 font-medium">{group.category}</h3>
                        <ul className="text-surface-600 space-y-2">
                            {group.items.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
