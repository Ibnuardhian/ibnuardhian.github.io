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
        <div className="z-2 w-full max-w-5xl font-mono text-sm flex flex-col lg:flex-row justify-between">
            <Header
                data={data.general}
                labels={data.general.labels}
                navigation={data.general.navigation}
                language={language}
                onLanguageChange={changeLanguage}
            />
            <div className="lg:pl-[50%]">
                <About data={data.general} />
                <Experiences data={data.experiences} title={data.general.labels.experience} />
                <Education data={data.education} title={data.general.labels.education} />
                <Projects id="freelance-projects" title={data.general.labels.freelanceProjects} data={data.freelanceProjects} />
                <Projects id="personal-projects" title={data.general.labels.personalProjects} data={data.personalProjects} />
                <Certifications data={data.certifications} title={data.general.labels.certifications} />
                <Skills data={data.general.skills} title={data.general.labels.skills} />
                <Credits data={data.general} />
            </div>
        </div>
    );
}
