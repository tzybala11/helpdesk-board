'use client';

const options = ['Open', 'In Progress', 'On Hold', 'Resolved', 'All'];

export default function StatusFilter({ value, onChange }) {
    return (
        <label className=''>
            <span className=''>Status</span>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className=''>
                {options.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
        </label>
    );
} //PLACE CSS IN CLASSNAME STATEMENTS