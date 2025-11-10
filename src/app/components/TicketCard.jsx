'use client';

export default function TicketCard({ ticket, onMove, inProgress }) {
    const { title, description, priority, status, assignee, updatedAt } = ticket;
    const updated = new Date(updatedAt);

    return (
        <div className=''>
            <div className=''>Priority: <span className=''></span>{priority}</div>
            <div className=''>Status: <span className=''></span>{status}</div>
            <h2 className=''>{title}</h2>
            <p className=''>{description}</p>
            <p className=''>Assignee: {assignee}</p>
            <p className=''>Updated: {updated.toLocaleString()}</p>
            <button
                type='button'
                onClick={onMove}
                disabled={inProgress}
                className={``}>
                {inProgress ? 'Ticket moved to queue and in progress.' : 'Ticket already in queue and in progress'}
            </button>
            {inProgress && (<p className=''>Ticket already in queue and in progress.</p>)}
        </div>
    );
} //ADD CSS TO CLASSNAME STATEMENTS