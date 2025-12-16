import { useCV } from '@/context/CVContext';
import { Skill } from '@/type';
import { Plus } from 'lucide-react';
import React, { useState } from 'react';

const SkillForm: React.FC = () => {
    const { skills, setSkills } = useCV();

    const [newSkill, setNewSkill] = useState<Skill>({
        name: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
        field: keyof Skill
    ) => {
        setNewSkill({ ...newSkill, [field]: e.target.value });
    };

    const handleAddSkill = () => {
        setSkills([...skills, newSkill]);
        setNewSkill({ name: '' });
    };

    return (
        <div>
            <div className='mt-4'>
                <input
                    type='text'
                    placeholder='compétence'
                    value={newSkill.name}
                    onChange={(e) => handleChange(e, 'name')}
                    className='input input-bordered w-full'
                />
            </div>

            <button onClick={handleAddSkill} className='btn btn-primary mt-4'>
                Ajouter
                <Plus className='w-4' />
            </button>
        </div>
    );
};

export default SkillForm;
