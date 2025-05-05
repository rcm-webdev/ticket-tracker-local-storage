import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Form from "../components/Form";
import TicketList from "../components/TicketList";
import { getTickets } from "../utils/storage";

export default function Dashboard() {
  const [tickets, setTickets] = useState([]);
  const [editingTicket, setEditingTicket] = useState(null);

  useEffect(() => {
    setTickets(getTickets());
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-base-300">
        <div className="navbar max-w-5xl mx-auto bg-base-300 justify-end">
          <BackButton />
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Welcome to Dashboard</h1>
        <div className="flex gap-5 justify-between">
          <div className="w-1/2">
            <Form
              setTickets={setTickets}
              editingTicket={editingTicket}
              setEditingTicket={setEditingTicket}
            />
          </div>
          <div className="w-1/2">
            <h1 className="font-bold text-2xl">Tickets</h1>
            <div className="overflow-y-auto h-[500px]">
              {/* <li className="block font-bold bg-base-200 p-6 rounded-3xl hover:bg-neutral hover:text-neutral-content duration-200">
              Ticket #4
            </li> */}

              <TicketList
                tickets={tickets}
                setTickets={setTickets}
                setEditingTicket={setEditingTicket}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
