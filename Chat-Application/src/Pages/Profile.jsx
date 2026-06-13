function Profile() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <div className="container mx-auto p-10">

      <div className="card bg-base-100 shadow-xl">

        <div className="card-body">

          <h2 className="card-title">
            User Profile
          </h2>

          <p>
            Username :
            <strong>
              {" "}
              {user?.username}
            </strong>
          </p>

          <p>
            Email :
            <strong>
              {" "}
              {user?.email}
            </strong>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Profile;