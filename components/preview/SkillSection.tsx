import { Skill } from '@/type';
import React from 'react';

type Props = {
    skills: Skill[];
};

const SkillSection: React.FC<Props> = ({ skills }) => {
    return (
        <div className='mt-6'>
            <h1 className='uppercase font-bold my-2'>Compétences</h1>
            <div className='flex flex-wrap gap-2'>
                {skills.map((skill, index) => (
                    <p key={index} className='badge badge-primary uppercase'>
                        {skill.name}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default SkillSection;
