import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { HomeType } from "../../types/HomeType";

const Read = () => {
  const [data, setData] = useState<HomeType>();
  const [error, setError] = useState("");
  const { id } = useParams();

  const API_URL = `https://gorest.co.in/public/v2/users/${id}`;
  const API_TOKEN = "be65c1c7dbb1af760b8a450dd6875873b8a93e9a6af1dea2570b0880abf1cd13";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, { headers });
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("User not found");
          } else {
            throw new Error("An error occurred while fetching the user data");
          }
        }
        const result = await response.json();
        setData(result);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      }
    };

    fetchData();
  }, [id]);

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
