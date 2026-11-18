"use client";

import React, { useEffect, useState } from "react";
import About from "@/components/about";
import Education from "@/components/education/education";
import Experiences from "@/components/experiences/experiences";
import Header from "@/components/header";
import Projects from "@/components/projects/projects";
import Certifications from "@/components/certifications/certifications";
import Credits from "@/components/credits";
import Skills from "@/components/skills";
import Navigation from "@/components/navigation";

export default function Portfolio({ translations }) {
    const [language, setLanguage] = useState("en");
    const data = translations[language];

    useEffect(() => {
        const savedLanguage = window.localStorage.getItem("portfolio-language");
        if (savedLanguage === "id" || savedLanguage === "en") setLanguage(savedLanguage);
        document.documentElement.lang = savedLanguage === "id" ? "id" : "en";
    }, []);

    function changeLanguage(nextLanguage) {
        setLanguage(nextLanguage);
        window.localStorage.setItem("portfolio-language", nextLanguage);
        document.documentElement.lang = nextLanguage;
    }

    return (
        <div className="z-2 flex w-full max-w-5xl flex-col font-mono text-sm">
            <Navigation
                labels={data.general.navigation}
                languageLabel={data.general.labels.language}
                language={language}
                onLanguageChange={changeLanguage}
            />
            <div className="grid grid-cols-1 gap-10 pt-8 lg:grid-cols-[minmax(18rem,0.8fr)_minmax(0,1.2fr)] lg:gap-12">
            <Header
                data={data.general}
                typewriterStrings={data.general.typewriterStrings}
                labels={data.general.labels}
            />
            <div className="min-w-0">
                <About data={data.general} />
                <Experiences data={data.experiences} title={data.general.labels.experience} />
                <Education data={data.education} title={data.general.labels.education} />
                <Projects id="freelance-projects" title={data.general.labels.freelanceProjects} data={data.freelanceProjects} />
                <Certifications data={data.certifications} title={data.general.labels.certifications} />
                <Skills data={data.general.skills} title={data.general.labels.skills} />
                <Credits data={data.general} />
            </div>
            </div>
        </div>
    );
}
