import { useEffect, useState } from "react";
import { getTickets, deleteTicket } from "../utils/storage";

export default function TicketList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setTickets(getTickets());
  }, []);

  const handleDelete = (id) => {
    deleteTicket(id);
    setTickets(getTickets()); // Refresh after deletion
  };

  return (
    <div className="space-y-4">
      <h1 className="font-bold text-2xl">Tickets</h1>
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          className="font-bold bg-base-200 p-6 rounded-3xl hover:bg-neutral hover:text-neutral-content duration-200"
        >
          <h2 className="text-xl font-bold">{ticket.subject}</h2>
          <p className="text-sm">{ticket.description}</p>
          <p className="text-sm text-warning">Severity: {ticket.severity}</p>
          <p className="text-sm text-accent">
            Assigned to: {ticket.assignedTo}
          </p>
          <button
            onClick={() => handleDelete(ticket.id)}
            className="btn btn-sm btn-error mt-2"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
