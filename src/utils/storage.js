// Get all tickets
export const getTickets = () => {
  const data = localStorage.getItem("tickets");
  return data ? JSON.parse(data) : [];
};

// Add a new ticket
export const addTicket = (ticket) => {
  const tickets = getTickets();
  tickets.push(ticket);
  localStorage.setItem("tickets", JSON.stringify(tickets));
};

// Delete a ticket by ID
export const deleteTicket = (id) => {
  const tickets = getTickets().filter((ticket) => ticket.id !== id);
  localStorage.setItem("tickets", JSON.stringify(tickets));
};

// Update a ticket by ID
export const updateTicket = (id, updatedTicket) => {
  const tickets = getTickets().map((ticket) =>
    ticket.id === id ? { ...ticket, ...updatedTicket } : ticket
  );
  localStorage.setItem("tickets", JSON.stringify(tickets));
};
