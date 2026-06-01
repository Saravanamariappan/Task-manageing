function TaskCard({
  task,
  onDelete,
  onComplete,
}) {

  const priorityColor = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-yellow-100 text-yellow-600",
    Low: "bg-green-100 text-green-600",
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition duration-300 border border-gray-100">

      <div className="flex justify-between items-center">

        <h2 className="text-xl font-bold text-slate-800">
          {task.title}
        </h2>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${priorityColor[task.priority]}`}
        >
          {task.priority}
        </span>

      </div>

      <div className="mt-4">

        <p className="text-gray-500">
          Status:
        </p>

        <span
          className={`inline-block mt-2 px-3 py-1 rounded-full font-semibold ${
            task.status === "Completed"
              ? "bg-green-100 text-green-700"
              : "bg-orange-100 text-orange-600"
          }`}
        >
          {task.status}
        </span>

      </div>

      <div className="flex gap-3 mt-6">

        <button
          onClick={() => onComplete(task.id)}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl"
        >
          ✓ Complete
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl"
        >
          🗑 Delete
        </button>

      </div>

    </div>
  );
}

export default TaskCard;