import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="hero min-h-screen bg-base-200">

      <div className="card w-96 bg-base-100 shadow-xl">

        <div className="card-body">

          <h2 className="text-3xl font-bold text-center">
            Register
          </h2>

          <input
            type="text"
            placeholder="Username"
            className="input input-bordered"
          />

          <input
            type="email"
            placeholder="Email"
            className="input input-bordered"
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered"
          />

          <button className="btn btn-primary">
            Register
          </button>
<Link to="/login">
  Already Have An Account{" "}
  <span className="text-primary font-semibold">
    Click Here
  </span>
</Link>
        </div>

      </div>

    </div>
  );
}

export default Register;