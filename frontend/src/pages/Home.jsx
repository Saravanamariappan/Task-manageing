import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-700">

      <div className="container mx-auto px-8">

        <nav className="flex justify-between items-center py-6">

          <h1 className="text-3xl text-white font-bold">
            TaskFlow
          </h1>

          <div className="space-x-4">
            <Link
              to="/login"
              className="bg-white text-blue-600 px-5 py-2 rounded-lg"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-yellow-400 px-5 py-2 rounded-lg"
            >
              Register
            </Link>
          </div>

        </nav>

        <div className="flex flex-col md:flex-row items-center justify-between mt-20">

          <div className="text-white max-w-xl">

            <h1 className="text-6xl font-bold mb-6">
              Manage Tasks Smarter
            </h1>

            <p className="text-xl mb-8">
              Organize your work, track progress,
              and boost productivity.
            </p>

            <Link
              to="/register"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg"
            >
              Get Started
            </Link>

          </div>

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt="task"
            className="w-[500px] rounded-2xl shadow-2xl mt-10 md:mt-0"
          />

        </div>

      </div>
    </div>
  );
}

export default Home;