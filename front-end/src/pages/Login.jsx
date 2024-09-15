import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/signup");
  };
  return (
    <>
      <section>
        <div className="w-full flex flex-col justify-center items-center h-[80vh]">
          <div className="w-[600px] rounded-[15px] p-[15px] shadow-2xl">
            <h1 className="text-4xl font-bold text-center">Login</h1>
            <form className="mt-8">
              <div className="flex flex-col">
                <label className="text-2xl " htmlFor="email">
                  Email
                </label>
                <input
                  className="rounded-[8px] mt-2 ring-0 focus:ring-transparent"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-2xl " htmlFor="password">
                  Password
                </label>
                <input
                  className="rounded-[8px] mt-2 outline-none ring-0 focus:ring-transparent"
                  type="password"
                  name="password"
                  id="password"
                  required
                />
              </div>
              <p className="mt-2 ml-2">Forgot Password?</p>
              <button
                className="text-xl font-bold mt-4 px-4 py-2 text-orange-950 bg-cyan-200 rounded-[15px]"
                type="submit"
              >
                Log in
              </button>
              <p className="ml-2 mt-3">
                "New to our platform?{" "}
                <button
                  className="font-medium text-blue-500"
                  onClick={handleNavigate}
                >
                  Register today!"
                </button>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
