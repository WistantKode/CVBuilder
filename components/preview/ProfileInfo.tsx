import { PersonalDetails } from '@/type';
import React from 'react';

type Props = {
    personalDetails: PersonalDetails;
};

const ProfileInfo: React.FC<Props> = ({ personalDetails }) => {
    return (
        <div className='w-full flex flex-col space-y-4'>
            <h1 className='uppercase text-xl'>{personalDetails.fullName}</h1>
            <h2 className='uppercase text-5xl text-primary font-bold'>
                {personalDetails.postSeeking}
            </h2>
            <p className='break-all w-full text-sm'>{personalDetails.description}</p>
        </div>
    );
};

export default ProfileInfo;
