import { useState } from "react";
import { Link } from "react-router-dom";

import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: "Completed" }
          : task
      )
    );
  };

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">

      {/* Navbar */}
      <nav className="backdrop-blur-lg bg-white/10 border-b border-white/10 px-8 py-5 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-white">
          🚀 TaskFlow
        </h1>

        <Link
          to="/"
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition"
        >
          Logout
        </Link>

      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Welcome */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-white mb-3">
            Welcome Back 👋
          </h1>

          <p className="text-slate-300 text-lg">
            Manage your tasks efficiently and stay productive.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-6 rounded-3xl shadow-xl text-white">
            <h3 className="text-lg font-medium">
              Total Tasks
            </h3>

            <p className="text-4xl font-bold mt-2">
              {tasks.length}
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-3xl shadow-xl text-white">
            <h3 className="text-lg font-medium">
              Completed
            </h3>

            <p className="text-4xl font-bold mt-2">
              {completed}
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-3xl shadow-xl text-white">
            <h3 className="text-lg font-medium">
              Pending
            </h3>

            <p className="text-4xl font-bold mt-2">
              {tasks.length - completed}
            </p>
          </div>

        </div>

        {/* Task Form */}
        <div className="mb-10">
          <TaskForm onAdd={addTask} />
        </div>

        {/* Task List */}
        <div>

          <h2 className="text-3xl font-bold text-white mb-6">
            📋 Your Tasks
          </h2>

          {tasks.length === 0 ? (
            <div className="bg-white/10 backdrop-blur-md text-center text-slate-300 p-10 rounded-3xl">
              <h3 className="text-2xl mb-2">
                No Tasks Yet
              </h3>

              <p>
                Create your first task to get started.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onDelete={deleteTask}
                  onComplete={completeTask}
                />
              ))}
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;