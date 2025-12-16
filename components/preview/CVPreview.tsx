import { useCV } from '@/context/CVContext';
import React, { forwardRef } from 'react';
import ContactSection from './ContactSection';
import SkillSection from './SkillSection';
import LanguageSection from './LanguageSection';
import HobbySection from './HobbySection';
import ProfileInfo from './ProfileInfo';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import ProfileImage from './ProfileImage';

type Props = {
    download?: boolean;
};

const CVPreview = forwardRef<HTMLDivElement, Props>(({ download }, ref) => {
    const {
        personalDetails,
        file,
        theme,
        experiences,
        educations,
        languages,
        skills,
        hobbies,
    } = useCV();

    return (
        <div
            ref={ref}
            className={`flex p-16 w-[950px] h-[1200px] shadow-lg ${download ? 'mb-10' : ''}`}
            data-theme={theme}
        >
            <div className='flex flex-col w-1/3'>
                <ProfileImage file={file} />

                <div className='mt-4 flex-col w-full'>
                    <ContactSection personalDetails={personalDetails} />
                    <SkillSection skills={skills} />
                    <LanguageSection languages={languages} />
                    <HobbySection hobbies={hobbies} />
                </div>
            </div>

            <div className='w-2/3 ml-8'>
                <ProfileInfo personalDetails={personalDetails} />

                <section className='w-full h-fit p-5'>
                    <ExperienceSection experiences={experiences} />
                    <EducationSection educations={educations} />
                </section>
            </div>
        </div>
    );
});

CVPreview.displayName = 'CVPreview';

export default CVPreview;
