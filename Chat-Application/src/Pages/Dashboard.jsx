import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="p-10">

      <div className="stats shadow">

        <div className="stat">
          <div className="stat-title">
            Messages
          </div>

          <div className="stat-value">
            120
          </div>
        </div>

      </div>

      <Link
        to="/chat"
        className="btn btn-primary mt-5"
      >
        Open Chat
      </Link>

    </div>
  );
}

export default Dashboard;