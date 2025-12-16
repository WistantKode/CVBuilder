import { useCV } from '@/context/CVContext';
import { Hobby } from '@/type';
import { Plus } from 'lucide-react';
import React, { useState } from 'react';

const HobbyForm: React.FC = () => {
    const { hobbies, setHobbies } = useCV();

    const [newHobby, setNewHobby] = useState<Hobby>({
        name: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
        field: keyof Hobby
    ) => {
        setNewHobby({ ...newHobby, [field]: e.target.value });
    };

    const handleAddHobby = () => {
        setHobbies([...hobbies, newHobby]);
        setNewHobby({ name: '' });
    };

    return (
        <div>
            <input
                type='text'
                placeholder='hobby'
                value={newHobby.name}
                onChange={(e) => handleChange(e, 'name')}
                className='input input-bordered w-full mt-4'
            />
            <button onClick={handleAddHobby} className='btn btn-primary mt-4'>
                Ajouter
                <Plus className='w-4' />
            </button>
        </div>
    );
};

export default HobbyForm;
