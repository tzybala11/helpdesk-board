'use client';

export default function StatusMessage({ loading, error, isEmpty }) {
    if (loading) return <div className=''>Loading, please wait...</div>;
    if (error) return <div className=''>Unable to load page. Please try again later.</div>;
    if (isEmpty) return <div className=''>No tickets to display matching your filters.</div>;
    return null;
} //INPUT CSS FOR EACH DIV STATEMENT