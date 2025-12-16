import { Experience } from '@/type';
import { formatDate } from '@/lib/utils';
import { BriefcaseBusiness } from 'lucide-react';
import React from 'react';

type Props = {
    experiences: Experience[];
};

const ExperienceSection: React.FC<Props> = ({ experiences }) => {
    return (
        <div>
            <h1 className='uppercase font-bold mb-2'>Expériences</h1>
            <ul className='steps steps-vertical space-y-3'>
                {experiences.map((exp, index) => (
                    <li className='step step-primary' key={index}>
                        <div className='text-left'>
                            <h2 className='flex text-md uppercase font-bold'>
                                <BriefcaseBusiness className='w-5' />
                                <span className='ml-2'>{exp.jobTitle}</span>
                            </h2>
                            <div className='text-sm my-2'>
                                <span className='badge badge-primary'>{exp.companyName}</span>
                                <span className='italic ml-2'>
                                    {formatDate(exp.startDate)} au {formatDate(exp.endDate)}
                                </span>
                            </div>
                            <p className='text-sm'>{exp.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceSection;
