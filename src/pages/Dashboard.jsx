import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // remove login data
    localStorage.removeItem("token");
    localStorage.removeItem("email");

    // redirect to login page
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Welcome to Dashboard
        </h1>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition"
        >
          Logout
        </button>
      </div>

      {/* Content */}
      <p className="text-slate-400">
        You are successfully logged in 🎉
      </p>

    </div>
  );
}