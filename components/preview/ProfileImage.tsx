import React, { useEffect, useState } from 'react';
import Image from 'next/image';

type Props = {
    file: File | null;
};

const ProfileImage: React.FC<Props> = ({ file }) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        if (file) {
            const url = URL.createObjectURL(file);
            setImageUrl(url);
            return () => URL.revokeObjectURL(url);
        } else {
            setImageUrl(null);
        }
    }, [file]);

    return (
        <div className='h-80 rounded-full border-8 overflow-hidden border-primary hobbies'>
            {imageUrl && (
                <Image
                    src={imageUrl}
                    width={300}
                    height={300}
                    className='w-full h-full rounded-lg object-cover'
                    alt="Picture of the author"
                />
            )}
        </div>
    );
};

export default ProfileImage;
