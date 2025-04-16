export default function TicketList({ tickets, setTickets }) {
  const handleDelete = (id) => {
    const updated = tickets.filter((ticket) => ticket.id !== id);
    localStorage.setItem("tickets", JSON.stringify(updated));
    setTickets(updated); // update state
  };

  return (
    <div className="space-y-4">
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
