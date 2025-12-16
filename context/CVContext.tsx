"use client";
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Education, Experience, Hobby, Language, PersonalDetails, Skill } from "@/type";
import {
    educationsPreset,
    experiencesPreset,
    hobbiesPreset,
    languagesPreset,
    personalDetailsPreset,
    skillsPreset,
} from "@/presets";

interface CVContextType {
    personalDetails: PersonalDetails;
    setPersonalDetails: React.Dispatch<React.SetStateAction<PersonalDetails>>;
    file: File | null;
    setFile: React.Dispatch<React.SetStateAction<File | null>>;
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    experiences: Experience[];
    setExperiences: React.Dispatch<React.SetStateAction<Experience[]>>;
    educations: Education[];
    setEducations: React.Dispatch<React.SetStateAction<Education[]>>;
    languages: Language[];
    setLanguages: React.Dispatch<React.SetStateAction<Language[]>>;
    skills: Skill[];
    setSkills: React.Dispatch<React.SetStateAction<Skill[]>>;
    hobbies: Hobby[];
    setHobbies: React.Dispatch<React.SetStateAction<Hobby[]>>;
    resetPersonalDetails: () => void;
    resetExperiences: () => void;
    resetEducations: () => void;
    resetLanguages: () => void;
    resetSkills: () => void;
    resetHobbies: () => void;
}

const CVContext = createContext<CVContextType | undefined>(undefined);

export const CVProvider = ({ children }: { children: ReactNode }) => {
    const [personalDetails, setPersonalDetails] = useState<PersonalDetails>(personalDetailsPreset);
    const [file, setFile] = useState<File | null>(null);
    const [theme, setTheme] = useState<string>("cupcake");
    const [experiences, setExperiences] = useState<Experience[]>(experiencesPreset);
    const [educations, setEducations] = useState<Education[]>(educationsPreset);
    const [languages, setLanguages] = useState<Language[]>(languagesPreset);
    const [skills, setSkills] = useState<Skill[]>(skillsPreset);
    const [hobbies, setHobbies] = useState<Hobby[]>(hobbiesPreset);

    useEffect(() => {
        const defaultImageUrl = "/profile.jpg";
        fetch(defaultImageUrl)
            .then((res) => res.blob())
            .then((blob) => {
                const defaultFile = new File([blob], "profile.jpg", { type: blob.type });
                setFile(defaultFile);
            });
    }, []);

    const resetPersonalDetails = () =>
        setPersonalDetails({
            fullName: "",
            email: "",
            phone: "",
            address: "",
            photoUrl: "",
            postSeeking: "",
            description: "",
        });

    const resetExperiences = () => setExperiences([]);
    const resetEducations = () => setEducations([]);
    const resetLanguages = () => setLanguages([]);
    const resetSkills = () => setSkills([]);
    const resetHobbies = () => setHobbies([]);

    return (
        <CVContext.Provider
            value={{
                personalDetails,
                setPersonalDetails,
                file,
                setFile,
                theme,
                setTheme,
                experiences,
                setExperiences,
                educations,
                setEducations,
                languages,
                setLanguages,
                skills,
                setSkills,
                hobbies,
                setHobbies,
                resetPersonalDetails,
                resetExperiences,
                resetEducations,
                resetLanguages,
                resetSkills,
                resetHobbies,
            }}
        >
            {children}
        </CVContext.Provider>
    );
};

export const useCV = () => {
    const context = useContext(CVContext);
    if (!context) {
        throw new Error("useCV must be used within a CVProvider");
    }
    return context;
};
