import { Language } from '@/type';
import { Star } from 'lucide-react';
import React from 'react';

type Props = {
    languages: Language[];
};

const getStarRating = (proficiency: string) => {
    const maxStars = 5;
    let filledStars = 0;

    switch (proficiency) {
        case 'Débutant':
            filledStars = 1;
            break;
        case 'Intermédiaire':
            filledStars = 3;
            break;
        case 'Avancé':
            filledStars = 5;
            break;
        default:
            filledStars = 0;
    }
    return (
        <>
            {Array.from({ length: filledStars }, (_, index) => (
                <Star key={index} className={`text-primary `} />
            ))}
            {Array.from({ length: maxStars - filledStars }, (_, index) => (
                <Star key={index + filledStars} className="text-gray-300" />
            ))}
        </>
    );
};

const LanguageSection: React.FC<Props> = ({ languages }) => {
    return (
        <div className='mt-6'>
            <h1 className='uppercase font-bold my-2'>Langues</h1>
            <div className='flex flex-col space-y-2'>
                {languages.map((lang, index) => (
                    <div key={index}>
                        <span className='capitalize font-semibold'>{lang.language}</span>
                        <div className='flex mt-2 '>{getStarRating(lang.proficiency)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LanguageSection;
