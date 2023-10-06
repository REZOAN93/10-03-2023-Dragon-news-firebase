import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Register = () => {
  const { createEmailUser } = useContext(AuthContext);

  const handleCreateUser = (event) => {
    event.preventDefault();
    console.log(event.currentTarget);
    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    createEmailUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div>
      {/* <Header></Header> */}
      <Navbar></Navbar>
      <div className="w-6/12 mx-auto">
        <div className="p-8">
          <div className=" space-y-7">
            <p className="text-3xl font-bold text-center">
              Register your account
            </p>
            <hr />
          </div>
          <form onSubmit={handleCreateUser} className=" mt-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Your Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered bg-slate-50"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Photo URL</span>
              </label>
              <input
                type="url"
                name="photo"
                className="input input-bordered bg-slate-50"
                placeholder="Enter your photo URL"
                id=""
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered bg-slate-50"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered bg-slate-50"
              />
              <div className="my-4">
                <input type="checkbox" name="" id="" /> <span className="ms-2">Accept Term & Conditions</span>
              </div>
            </div>
            <div className="form-control">
              <button className="btn capitalize btn-primary">Register</button>
            </div>
          </form>
        </div>
        <p className="text-center">
          Already Have An Account ?{" "}
          <span className=" text-red-600 font-bold">
            <Link to={"/login"}>Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
