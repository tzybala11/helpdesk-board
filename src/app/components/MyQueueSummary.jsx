'use client';

export default function MyQueueSummary({ tickets, IDsInQueue, onDelete, onDrop }) {
    const queued = new Set(IDsInQueue);
    const items = tickets.filter(t => queued.has(t.id));

    return (
        <div className=''>
            <h2 className=''></h2>
            <p className=''>{items.length === 0 ? 'No tickets in queue.' : `${items.length} ticket${items.length === 1 ? '' : 's'} in queue.`}</p>
            <ul className=''>
                {items.map(t => (
                    <li key={t.id} className=''>
                        <div>
                            <div className=''>{t.title}</div>
                            <div className=''>{t.priority} - {t.status}</div>
                        </div>
                        <button
                            type="button"
                            onClick={() => onDelete(t.id)}
                            className=''>
                            Remove
                            </button>
                    </li>
                ))}
            </ul>
            <button
                type='button'
                onClick={onDrop}
                className=''
                disabled={items.length === 0}>
                Clear Queue
                </button>
        </div>
    );
}