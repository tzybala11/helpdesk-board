'use client';

import { useEffect, useState } from "react";
import StatusFilter from "./StatusFilter";
import PriorityFilter from "./PriorityFilter";
import TicketList from "./TicketList";
import TicketCard from "./TicketCard";
import SearchBox from "./SearchBox";
import StatusMessage from "./StatusMessage";
import MyQueueSummary from "./MyQueueSummary";

export default function Board() {
    const[tickets, setTickets] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error,  setError] = useState(null);
    const[statusValue, setStatusValue] = useState('All');
    const[priorityValue, setPriorityValue] = useState('All');
    const[searchText, setSearchTest] = useState('');
    const[queue, setQueue] = useState({});

    useEffect(() => {
        async function loadTickets() {
            try {
                const res = await fetch('/api/tickets');
                if (!res.ok) throw new Error('Error!');
                const data = await res.json();
                setTickets(data);
                setLoading(false);
            }
            
            catch (err) {
                setError('Error! Cannot load tickets!');
                setLoading(false);
            }
        }
        loadTickets();
    }, []);

    useEffect(() => {
        if (tickets.length === 0) return;

        const intervalID = setInterval(() => {
            setTickets((p) => {
                if (p.length === 0) return p;
                const c = [...p];
                const index = Math.floor(Math.random()*c.length);
                const t = copy[index];
            
            function nextStatus(s) {
                if (s === 'Open') return 'In Progress';
                if (s === 'In Progress') return 'Resolved';
                if (s === 'On Hold') return 'In Progress';
                return s;
            };
            
            function movePriority(p) {
                const list = ['Low', 'Medium', 'High', 'Critical'];
                const i = list.indexOf(p);
                return i >= 0 && i < list.length - 1 ? list[i + 1] : p;
            };

            const changeStatusNotPriority = Math.random() < 0.5;

            const updatedTicket = {
                ...t
                status: changeStatusNotPriority ? nextStatus(t.status) : t.status,
                priority: changeStatusNotPriority ? t.priority : movePriority(t.priority),
                updatedAt: new Date().toISOString()
            };

            c[index] = updatedTicket;
            return copy;
            });
        }, 600000);

        return () => clearInterval(intervalID);
        }, [tickets.length]);
    }
}