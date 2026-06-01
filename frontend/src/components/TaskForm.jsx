import { useState } from "react";

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const task = {
      id: Date.now(),
      title,
      priority,
      status: "Pending",
    };

    onAdd(task);

    setTitle("");
    setPriority("Medium");
  };

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-6 border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-slate-800">
        ➕ Create New Task
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-4 border rounded-xl mb-4 focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full p-4 border rounded-xl mb-4 focus:ring-2 focus:ring-indigo-500 outline-none"
        >
          <option value="High">🔥 High Priority</option>
          <option value="Medium">⚡ Medium Priority</option>
          <option value="Low">🌱 Low Priority</option>
        </select>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:scale-105 transition"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;