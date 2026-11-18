'use client'

import React, { useState, useEffect, useRef } from "react";

const sectionIds = ['about', 'experiences', 'education', 'freelance-projects', 'certifications', 'skills'];

const Navigation = ({ labels, languageLabel, language, onLanguageChange }) => {
    const [activeSection, setActiveSection] = useState(null);
    const observer = useRef(null);

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
            if (visibleSection) setActiveSection(visibleSection.id);
        }, { threshold: 0.25 });

        const sections = document.querySelectorAll('[data-section]');
        sections.forEach((section) => observer.current.observe(section));
        return () => sections.forEach((section) => observer.current?.unobserve(section));
    }, []);

    return (
        <nav id="navigation" aria-label="Main navigation" className="sticky top-0 z-50 -mx-6 mb-8 border-b border-surface-300 bg-surface-100/95 px-6 py-3 backdrop-blur-md lg:mx-0 lg:px-0">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-center gap-5 overflow-x-auto whitespace-nowrap pb-1 sm:order-1 sm:flex-1 sm:justify-start sm:gap-4 lg:gap-6">
                    {sectionIds.map((id, index) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            aria-current={activeSection === id ? 'location' : undefined}
                            className={`shrink-0 border-b-2 py-2 text-xs font-medium tracking-widest transition-colors ${activeSection === id ? 'border-primary-500 text-on-background' : 'border-transparent text-surface-600 hover:text-on-background'}`}
                        >
                            {labels[index]}
                        </a>
                    ))}
                </div>
                <div className="flex shrink-0 items-center justify-between gap-3 text-xs tracking-normal sm:order-2 sm:justify-end">
                    <span className="text-surface-600">{languageLabel}</span>
                    <div className="inline-flex rounded-full border border-surface-400 p-1" role="group" aria-label={languageLabel}>
                        <button type="button" onClick={() => onLanguageChange('id')} aria-pressed={language === 'id'} className={`rounded-full px-3 py-1 transition-colors ${language === 'id' ? 'bg-primary-500 text-surface-100' : 'text-surface-600 hover:text-on-background'}`}>ID</button>
                        <button type="button" onClick={() => onLanguageChange('en')} aria-pressed={language === 'en'} className={`rounded-full px-3 py-1 transition-colors ${language === 'en' ? 'bg-primary-500 text-surface-100' : 'text-surface-600 hover:text-on-background'}`}>EN</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
