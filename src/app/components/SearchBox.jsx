'use client';

export default function SearchBox({ value, onChange }) {
    return (
        <input
            type='text'
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder='Search here'
            className='' //INPUT CSS HERE
        />
    );
}