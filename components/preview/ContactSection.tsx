import { PersonalDetails } from '@/type';
import { Mail, MapPinCheckInside, Phone } from 'lucide-react';
import React from 'react';

type Props = {
    personalDetails: PersonalDetails;
};

const ContactSection: React.FC<Props> = ({ personalDetails }) => {
    return (
        <div>
            <h1 className='uppercase font-bold my-2'>Contact</h1>
            <ul className='space-y-2'>
                <li className='flex'>
                    <div className='break-all text-sm relative'>
                        <div className='ml-8'>{personalDetails.phone}</div>
                        {personalDetails.phone && (
                            <div className='absolute left-0 top-0'>
                                <Phone className='w-5 text-primary' />
                            </div>
                        )}
                    </div>
                </li>
                <li className='flex'>
                    <div className='break-all text-sm relative'>
                        <div className='ml-8'>{personalDetails.email}</div>
                        {personalDetails.email && (
                            <div className='absolute left-0 top-0'>
                                <Mail className='w-5 text-primary' />
                            </div>
                        )}
                    </div>
                </li>
                <li className='flex'>
                    <div className='break-all text-sm relative'>
                        <div className='ml-8'>{personalDetails.address}</div>
                        {personalDetails.address && (
                            <div className='absolute left-0 top-0'>
                                <MapPinCheckInside className='w-5 text-primary' />
                            </div>
                        )}
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ContactSection;
