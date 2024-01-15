import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../redux/features/basketSlice";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const userData = useSelector((state) => state.basket.userData);
  const email = userData ? userData.email : null;
  const password = userData ? userData.password : null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginEmail == email && loginPassword == password) {
      dispatch(setUserData(userData));
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else if (loginEmail != email && loginPassword == password) {
      console.log("Email is Incorrect!!!");
    } else {
      console.log("Email and Password are Incorrect!!!");
    }
  };

  const handleGuest = (e) => {
    e.preventDefault();
    dispatch(setUserData({ userName: "Demo User" }));
    localStorage.setItem("userData", JSON.stringify({ userName: "Demo User" }));
    navigate("/");
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="p-7 mx-5 rounded-2xl shadow-xl w-[400px] max-w-full"
      >
        <h1 className="text-3xl font-bold mb-5 text-center text-gray-600">
          Login
        </h1>
        <div className="mb-5">
          <label className="label">
            <span className="label-text text-gray-600 text-xl">Email</span>
          </label>
          <input
            onChange={(e) => setLoginEmail(e.target.value)}
            type="text"
            className="input input-bordered mb-6 block  w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-xl text-gray-900 outline-[3px] focus:outline-dotted focus:outline-[3px] focus:outline-blue-600"
            value={loginEmail}
            id="email"
            autoComplete="off"
            ref={email}
            required
          />
        </div>
        <div className="mb-7">
          <label className="label">
            <span className="label-text text-gray-600 text-xl">Password</span>
          </label>
          <input
            onChange={(e) => setLoginPassword(e.target.value)}
            type="password"
            className="input input-bordered mb-6 block  w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-xl text-gray-900 outline-[3px] focus:outline-dotted focus:outline-[3px] focus:outline-blue-600"
            value={loginPassword}
            required
            id="password"
            autoComplete="off"
          />
        </div>
        <button
          type="submit"
          className="btn btn-warning w-full mb-4 rounded-md bg-blue-600 px-2 py-1  text-white hover:bg-blue-700 md:px-3 md:py-2"
        >
          LOGIN
        </button>
        <div className="flex justify-center  gap-2">
          <span className="text-gray-900">Don`t have an account?</span>
          <Link to={"/register"}>
            <button className="text-sky-600">REGISTER</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
