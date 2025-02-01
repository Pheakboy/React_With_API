import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    gender: "",
    status: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const headers = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer be65c1c7dbb1af760b8a450dd6875873b8a93e9a6af1dea2570b0880abf1cd13",
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!values.name || !values.email || !values.gender || !values.status) {
      setError("All fields are required");
      return;
    }
    setError(""); 
    

    axios
      .post("https://gorest.co.in/public/v2/users", values, { headers })
      .then((res) => {
        console.log("User created:", res.data);
        navigate("/"); 
      })
      .catch((err) => {
        console.error(err);
        if (err.response && err.response.data) {
          setError(err.response.data.message || "Failed to create user");
        } else {
          setError("Failed to create user");
        }
      });
  };

  return (
    <div className="p-10 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">Create User</h1>
      <div className="mt-5 p-5 border border-gray-300 rounded-lg bg-white shadow-lg">
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-3">{error}</p>}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              onChange={e => setValues({ ...values, name: e.target.value })}
              type="text"
              id="name"
              name="name"
              value={values.name}
              placeholder="Enter your name ..."
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              onChange={e => setValues({ ...values, email: e.target.value })}
              type="email"
              id="email"
              name="email"
              value={values.email}
              placeholder="Enter your email ..."
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <select
              onChange={e => setValues({ ...values, gender: e.target.value })}
              id="gender"
              name="gender"
              value={values.gender}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <select
              onChange={e => setValues({ ...values, status: e.target.value })}
              id="status"
              name="status"
              value={values.status}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded mr-4 hover:bg-green-600"
            >
              Submit
            </button>
            <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
