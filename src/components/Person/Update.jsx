import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const Update = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    gender: "",
    status: "",
  });
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const headers = useMemo(
    () => ({
      "Content-Type": "application/json",
      Authorization:
        "Bearer be65c1c7dbb1af760b8a450dd6875873b8a93e9a6af1dea2570b0880abf1cd13",
    }),
    []
  );

  useEffect(() => {
    axios
      .get(`https://gorest.co.in/public/v2/users/${id}`, { headers })
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          setError("User not found");
        } else {
          setError("An error occurred while fetching the user data");
        }
      });
  }, [id, headers]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!values.name || !values.email || !values.gender || !values.status) {
      setError("All fields are required");
      return;
    }
    setError("");

    axios
      .put(`https://gorest.co.in/public/v2/users/${id}`, values, { headers })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        setError(err.response?.data?.message || "Failed to update user");
      });
  };

  return (
    <div className="p-10 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">Update User</h1>
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
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              type="text"
              id="name"
              value={values.name}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
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
              onChange={(e) => setValues({ ...values, email: e.target.value })}
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
              onChange={(e) => setValues({ ...values, gender: e.target.value })}
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
              onChange={(e) => setValues({ ...values, status: e.target.value })}
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
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded mr-4 hover:bg-green-600"
          >
            Update
          </button>
          <Link
            to="/"
            className="bg-blue-500 text-white px-4 py-2 rounded ml-3"
          >
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Update;
