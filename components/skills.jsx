"use client";

import React, { useState } from "react";
import Image from "next/image";

const toolIcons = {
    "Git": "git",
    "GitHub": "github",
    "GitLab": "gitlab",
    "Nginx": "nginx",
    "Postman": "postman",
    "VS Code": "vscode",
    "Visual Studio Code": "vscode",
    "Power BI": "powerbi",
    "Oracle": "oracle",
    "Google Colab": "googlecolab",
    "MySQL": "mysql",
};

export default function Skills({ data, title }) {
    const [selectedTool, setSelectedTool] = useState(null);

    return (
        <section data-section id="skills" className="mb-16 scroll-mt-24">
            <h2 className="mb-8 visible lg:invisible font-medium tracking-widest">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {data.map((group) => (
                    <div key={group.category} className="p-5 bg-surface-200">
                        <h3 className="mb-3 font-medium">{group.category}</h3>
                        {group.category.toLowerCase().includes('tool') ? (
                            <div className="flex flex-wrap gap-3" aria-label={group.category}>
                                {group.items.map((item) => {
                                    const icon = toolIcons[item];
                                    return (
                                        <div key={item} className="relative flex flex-col items-center">
                                            <button
                                                type="button"
                                                aria-label={item}
                                                aria-expanded={selectedTool === item}
                                                title={item}
                                                onClick={() => setSelectedTool(selectedTool === item ? null : item)}
                                                className="group relative flex h-14 w-14 items-center justify-center rounded-lg bg-surface-100 transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500"
                                            >
                                                <Image src={`/logos/tools/${icon}.svg`} alt="" width={36} height={36} className={icon === 'github' ? 'brightness-0 invert' : ''} />
                                                <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-on-background px-2 py-1 text-xs text-surface-100 opacity-0 shadow transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                                                    {item}
                                                </span>
                                            </button>
                                            {selectedTool === item && <span className="mt-1 max-w-16 text-center text-[10px] leading-tight text-surface-600">{item}</span>}
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <ul className="space-y-2 text-surface-600">
                                {group.items.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
