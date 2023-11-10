import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center items-center my-16">
      <form className="p-10 border-2 border-secondary rounded-lg">
        <h2 className="text-4xl font-bold text-secondary text-center p-3">
          Register
        </h2>
        <label className=" text-secondary ">Name </label>
        <br />
        <input className="border-2 w-[400px] mt-1  border-gray-500 p-2 rounded" />
        <br />
        <label className=" text-secondary ">Email </label>
        <br />
        <input className="border-2 w-[400px] mt-1  border-gray-500 p-2 rounded" />
        <br />
        <label className=" text-secondary ">Password </label>
        <br />
        <input className="border-2 w-[400px] mt-1  border-gray-500 p-2 rounded" />
        <br />
        <label className=" text-secondary ">Email </label>
        <br />
        <input className="border-2 w-[400px] mt-1  border-gray-500 p-2 rounded" />
        <br />
        <label className=" text-secondary ">Address </label>
        <br />
        <input className="border-2 w-[400px] mt-1  border-gray-500 p-2 rounded" />{" "}
        <br />
        <button className="border-2 w-[400px] mt-1 text-xl text-secondary hover:text-white hover:bg-secondary border-gray-500 p-2 rounded">
          Submit
        </button>
        <p className="text-xl">
          Already have an account?
          <Link className="text-secondary" to="/login">
            login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
