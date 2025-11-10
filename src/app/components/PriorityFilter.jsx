'use client';

const options = ['Low', 'Medium', 'High', 'Critical', 'All'];

export default function PriorityFilter({ value, onChange }) {
    return (
        <label className=''>
            <span className=''>Priority</span>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className=''>
                {options.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
        </label>
    );
} //PLACE CSS IN CLASSNAME STATEMENTS