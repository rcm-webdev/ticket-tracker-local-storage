import BackButton from "../components/BackButton";
import Form from "../components/Form";
import SignupForm from "../components/SignupForm";
import TicketList from "../components/TicketList";

export default function Dashboard() {
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
            <Form />
          </div>
          <div className="w-1/2 overflow-y-auto h-[500px]">
            {/* <li className="block font-bold bg-base-200 p-6 rounded-3xl hover:bg-neutral hover:text-neutral-content duration-200">
              Ticket #4
            </li> */}

            <TicketList />
          </div>
        </div>
      </div>
    </div>
  );
}
