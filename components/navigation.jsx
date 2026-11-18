'use client'

import React, { useState, useEffect, useRef } from "react";
import NavItem from "./nav-item";

const Navigation = ({ labels, languageLabel, language, onLanguageChange }) => {
    const [activeSection, setActiveSection] = useState(null);
    const observer = useRef(null);

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
            if (visibleSection) {
                setActiveSection(visibleSection.id);
            }
        }, {threshold:0.5});

        const sections = document.querySelectorAll('[data-section]');

        sections.forEach((section) => {
            observer.current.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.current.unobserve(section);
            });
        };
    }, []);

    return (
        <div id='navigation' className='flex flex-col py-10 font-medium tracking-widest'>
            <div className="mb-4 flex w-full items-center justify-between text-xs tracking-normal lg:w-[200%]">
                <span className="text-surface-600">{languageLabel}</span>
                <div className="inline-flex rounded-full border border-surface-400 p-1" role="group" aria-label={languageLabel}>
                    <button
                        type="button"
                        onClick={() => onLanguageChange('id')}
                        aria-pressed={language === 'id'}
                        className={`rounded-full px-3 py-1 transition-colors ${language === 'id' ? 'bg-primary-500 text-surface-100' : 'text-surface-600 hover:text-on-background'}`}
                    >ID</button>
                    <button
                        type="button"
                        onClick={() => onLanguageChange('en')}
                        aria-pressed={language === 'en'}
                        className={`rounded-full px-3 py-1 transition-colors ${language === 'en' ? 'bg-primary-500 text-surface-100' : 'text-surface-600 hover:text-on-background'}`}
                    >EN</button>
                </div>
            </div>
            <NavItem active={activeSection === 'about'} href='#about' num='01' name={labels[0]}></NavItem>
            <NavItem active={activeSection === 'experiences'} href='#experiences' num='02' name={labels[1]}></NavItem>
            <NavItem active={activeSection === 'education'} href='#education' num='03' name={labels[2]}></NavItem>
            <NavItem active={activeSection === 'freelance-projects'} href='#freelance-projects' num='04' name={labels[3]}></NavItem>
            <NavItem active={activeSection === 'personal-projects'} href='#personal-projects' num='05' name={labels[4]}></NavItem>
            <NavItem active={activeSection === 'certifications'} href='#certifications' num='06' name={labels[5]}></NavItem>
            <NavItem active={activeSection === 'skills'} href='#skills' num='07' name={labels[6]}></NavItem>
            {/* <NavItem active={activeSection === 'volunteering' ? true : false} href='#volunteering' num='06' name="VOLUNTEERING"></NavItem> */}
        </div>
    )
}

export default Navigation
