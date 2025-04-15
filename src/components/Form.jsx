import { useState } from "react";
import { addTicket } from "../utils/storage";
import { v4 as uuidv4 } from "uuid";

export default function Form() {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("Low");
  const [assignedTo, setAssignedTo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTicket = {
      id: uuidv4(),
      subject,
      description,
      severity,
      assignedTo,
      createdAt: new Date().toISOString(),
    };

    addTicket(newTicket);

    // Reset form
    setSubject("");
    setDescription("");
    setSeverity("Low");
    setAssignedTo("");
  };

  return (
    <div className="max-w-xl  bg-base-200 p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Add New Issue</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Subject */}
        <div className="flex flex-col">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <input
            type="text"
            placeholder="Enter issue subject"
            className="input input-bordered"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Describe the issue"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            required
          ></textarea>
        </div>

        {/* Severity */}
        <div className="flex flex-col">
          <label className="label">
            <span className="label-text">Severity</span>
          </label>
          <select
            className="select select-bordered"
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
          >
            <option disabled>Select severity</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>
          </select>
        </div>

        {/* Assigned To */}
        <div className="flex flex-col">
          <label className="label">
            <span className="label-text">Assigned To</span>
          </label>
          <input
            type="text"
            placeholder="Assignee name or email"
            className="input input-bordered"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <div className=" mt-6">
          <button type="submit" className="btn btn-primary">
            Create Ticket
          </button>
        </div>
      </form>
    </div>
  );
}
