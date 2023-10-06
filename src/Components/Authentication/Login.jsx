import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const { signEmailUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLoginUser = (event) => {
    event.preventDefault();
    console.log(event.currentTarget);
    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signEmailUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="w-6/12 mx-auto">
        <div className="p-8">
          <div className=" space-y-7">
            <p className="text-3xl font-bold text-center">Login your account</p>
            <hr />
          </div>
          <form onClick={handleLoginUser} className=" mt-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered bg-slate-50"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered bg-slate-50"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
        <p className="text-center">
          Don’t Have An Account ?{" "}
          <span className=" text-red-600 font-bold">
            <Link to={"/register"}>Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
