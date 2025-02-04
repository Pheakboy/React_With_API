import React, { useEffect, useState } from "react";
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

  const API_URL = `https://gorest.co.in/public/v2/users/${id}`;
  const API_TOKEN = "be65c1c7dbb1af760b8a450dd6875873b8a93e9a6af1dea2570b0880abf1cd13";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  };

  useEffect(() => {
    fetch(API_URL, { headers })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 404) {
          } else {
            throw new Error("An error occurred while fetching the user data");
          }
        }
        return response.json();
      })
      .then((data) => setValues(data))
      .catch((err) => setError(err.message));
  }, [id]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!values.name || !values.email || !values.gender || !values.status) {
      setError("All fields are required");
      return;
    }
    setError("");

    fetch(API_URL, {
      method: "PUT",
      headers,
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            throw new Error(data.message || "Failed to update user");
          });
        }
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="p-10 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">Update User</h1>
      <div className="mt-5 p-5 border border-gray-300 rounded-lg bg-white shadow-lg">
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-3">{error}</p>}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              type="text"
              value={values.name}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              type="email"
              value={values.email}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              onChange={(e) => setValues({ ...values, gender: e.target.value })}
              value={values.gender}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              onChange={(e) => setValues({ ...values, status: e.target.value })}
              value={values.status}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
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
          <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded ml-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Update;
