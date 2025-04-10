export default function Form() {
  return (
    <div className="max-w-xl mx-auto bg-base-200 p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Add New Issue</h2>
      <form className="space-y-4">
        {/* Subject */}
        <div className="flex flex-col">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <input
            type="text"
            placeholder="Enter issue subject"
            className="input input-bordered"
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
            rows={4}
            required
          ></textarea>
        </div>

        {/* Severity */}
        <div className="flex flex-col">
          <label className="label">
            <span className="label-text">Severity</span>
          </label>
          <select className="select select-bordered">
            <option disabled selected>
              Select severity
            </option>
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
          />
        </div>

        {/* Submit Button */}
        <div className=" mt-6">
          <button className="btn btn-primary">Submit Issue</button>
        </div>
      </form>
    </div>
  );
}
