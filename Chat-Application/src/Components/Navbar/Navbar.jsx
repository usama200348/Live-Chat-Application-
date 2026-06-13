import { Link } from "react-router-dom";

function Navbar() {

  const logout = () => {
    localStorage.clear();
    location.href = "/login";
  };

  return (
    <div className="navbar bg-base-100 shadow">

      <div className="flex-1">

        <Link
          to="/"
          className="btn btn-ghost text-xl"
        >
          Chat App
        </Link>

      </div>

      <div className="flex gap-2">

        <Link
          to="/dashboard"
          className="btn btn-primary"
        >
          Dashboard
        </Link>

        <Link
          to="/profile"
          className="btn btn-secondary"
        >
          Profile
        </Link>

        <button
          onClick={logout}
          className="btn btn-error"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;