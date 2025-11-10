'use client';

import TicketCard from './TicketCard';

export default function TicketList({ tickets, onMovetoQueue, queue }) {
    return (
        <div className=''>
            {tickets.map(t => (
                <TicketCard
                    key={t.id}
                    ticket={t}
                    inProgress={!!queue[t.id]}
                    onMove={() => onMovetoQueue(t.id)}/>
            ))}
        </div>
    );
}