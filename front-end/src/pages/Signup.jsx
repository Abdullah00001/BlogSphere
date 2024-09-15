import React from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/login");
  };
  return (
    <>
      <section>
        <div className="w-full flex flex-col justify-center items-center h-[80vh]">
          <div className="w-[600px] rounded-[15px] p-[15px] shadow-2xl">
            <h1 className="text-4xl font-bold text-center">Sign Up</h1>
            <form className="mt-8">
              <div className="flex gap-4 w-full">
                <div className="w-[50%] flex flex-col">
                  <label className="text-2xl " htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    className="rounded-[8px] mt-2 ring-0 focus:ring-transparent"
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                  />
                </div>
                <div className="w-[50%] flex flex-col">
                  <label className="text-2xl " htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    className="rounded-[8px] mt-2 ring-0 focus:ring-transparent"
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col mt-4">
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
              <div className="flex flex-col mt-4">
                <label className="text-2xl " htmlFor="password2">
                  Confirm Password
                </label>
                <input
                  className="rounded-[8px] mt-2 outline-none ring-0 focus:ring-transparent"
                  type="password"
                  name="password2"
                  id="password2"
                  required
                />
              </div>
              <button
                className="text-xl font-bold mt-6 px-4 py-2 text-orange-950 bg-cyan-200 rounded-[15px]"
                type="submit"
              >
                Sign Up
              </button>
              <p className="ml-2 mt-3">
                "Already part of our community?{" "}
                <button
                  className="font-medium text-blue-500"
                  onClick={handleNavigate}
                >
                  Click here to log in!"
                </button>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
