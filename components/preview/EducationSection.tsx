import { Education } from '@/type';
import { formatDate } from '@/lib/utils';
import { GraduationCap } from 'lucide-react';
import React from 'react';

type Props = {
    educations: Education[];
};

const EducationSection: React.FC<Props> = ({ educations }) => {
    return (
        <div className='mt-6'>
            <h1 className='uppercase font-bold mb-2'>Formations</h1>
            <ul className='steps steps-vertical space-y-3'>
                {educations.map((edu, index) => (
                    <li className='step step-primary' key={index}>
                        <div className='text-left'>
                            <h2 className='flex text-md uppercase font-bold'>
                                <GraduationCap className='w-5' />
                                <span className='ml-2'>{edu.degree}</span>
                            </h2>
                            <div className='text-sm my-2'>
                                <span className='badge badge-primary'>{edu.school}</span>
                                <span className='italic ml-2'>
                                    {formatDate(edu.startDate)} au {formatDate(edu.endDate)}
                                </span>
                            </div>
                            <p className='text-sm'>{edu.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EducationSection;
