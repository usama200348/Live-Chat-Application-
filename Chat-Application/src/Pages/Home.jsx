import { Link } from "react-router-dom";
import { FaComments, FaUserFriends, FaLock } from "react-icons/fa";

function Home() {
  return (
    <div className="min-h-screen bg-base-200">

      {/* Hero Section */}
      <div className="hero min-h-[85vh]">
        <div className="hero-content text-center flex-col">

          <div className="max-w-3xl">

            <div className="badge badge-primary badge-lg mb-4">
              Real-Time Communication
            </div>

            <h1 className="text-5xl md:text-7xl font-bold">
              Chat Without
              <span className="text-primary"> Limits</span>
            </h1>

            <p className="py-6 text-lg text-base-content/70">
              Connect instantly with friends and teams using
              Socket.IO, React, Node.js and MongoDB.
              Experience lightning-fast real-time messaging.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">

              <Link
                to="/login"
                className="btn btn-primary btn-lg"
              >
                Get Started
              </Link>

              <Link
                to="/register"
                className="btn btn-outline btn-lg"
              >
                Create Account
              </Link>

            </div>

          </div>

        </div>
      </div>

      {/* Features Section */}

      <div className="container mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center mb-10">
          Why Choose Our Chat App?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">

              <FaComments className="text-5xl text-primary" />

              <h2 className="card-title">
                Real-Time Messaging
              </h2>

              <p>
                Send and receive messages instantly
                using Socket.IO technology.
              </p>

            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">

              <FaUserFriends className="text-5xl text-secondary" />

              <h2 className="card-title">
                Multi User Chat
              </h2>

              <p>
                Chat with multiple users and stay
                connected with your community.
              </p>

            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">

              <FaLock className="text-5xl text-success" />

              <h2 className="card-title">
                Secure Authentication
              </h2>

              <p>
                JWT-based authentication keeps your
                conversations secure.
              </p>

            </div>
          </div>

        </div>
      </div>

      {/* Footer */}

      <footer className="footer footer-center p-6 bg-base-300 text-base-content">
        <aside>
          <p>
            © 2026 Real Chat Application | Built with React,
            Socket.IO & MongoDB
          </p>
        </aside>
      </footer>

    </div>
  );
}

export default Home;