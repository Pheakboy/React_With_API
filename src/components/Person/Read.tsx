import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { HomeType } from "../../types/HomeType";

const Read = () => {
  const [data, setData] = useState<HomeType>();
  const [error, setError] = useState("");
  const { id } = useParams();

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
        setData(res.data);
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          setError("User not found");
        } else {
          setError("An error occurred while fetching the user data");
        }
      });
  }, [id, headers]); // Include `headers` here as it's now stable

  if (error) {
    return (
      <div className="p-10 font-sans">
        <h1 className="text-3xl font-bold text-gray-800 mb-5">User Details</h1>
        <div className="mt-5 p-5 border border-gray-300 rounded-lg bg-white shadow-lg">
          <p className="text-red-500">{error}</p>
          <Link
            to="/"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-5"
          >
            Back
          </Link>
        </div>
      </div>
    );
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-10 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">User Details</h1>
      <div className="mt-5 p-5 border border-gray-300 rounded-lg bg-white shadow-lg">
        <div className="mb-4">
          <label className="block text-lg font-bold text-gray-700">
            ID : {data.id}
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-lg font-bold text-gray-700">
            Name : {data.name}
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-lg font-bold text-gray-700">
            Email : {data.email}
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-lg font-bold text-gray-700">
            Gender : {data.gender}
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-lg font-bold text-gray-700">
            Status : {data.status}
          </label>
        </div>
        <Link
          to={`/update/${id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-5"
        >
          Edit
        </Link>
        <Link
          to="/"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default Read;
