import { Hobby } from '@/type';
import React from 'react';

type Props = {
    hobbies: Hobby[];
};

const HobbySection: React.FC<Props> = ({ hobbies }) => {
    return (
        <div className='mt-6'>
            <h1 className='uppercase font-bold my-2'>Hobbies</h1>
            <div className='flex flex-col space-y-2'>
                {hobbies.map((hobby, index) => (
                    <div key={index}>
                        <span className='capitalize'>{hobby.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HobbySection;
