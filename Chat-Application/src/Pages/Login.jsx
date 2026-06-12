function Login() {
  return (
    <div className="hero min-h-screen bg-base-200">

      <div className="card w-96 bg-base-100 shadow-xl">

        <div className="card-body">

          <h2 className="text-3xl font-bold text-center">
            Login
          </h2>

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
            Login
          </button>

        </div>

      </div>

    </div>
  );
}

export default Login;