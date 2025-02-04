import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HomeType } from "../../types/HomeType";

const Home = () => {
  const [users, setUsers] = useState<HomeType[]>([]);
  const API_URL = "https://gorest.co.in/public/v2/users";
  const API_TOKEN =
    "be65c1c7dbb1af760b8a450dd6875873b8a93e9a6af1dea2570b0880abf1cd13";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  };

  const fetchData = async () => {
    const response = await fetch(API_URL, { headers });
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers,
      });
      console.log(response);
      setUsers(users.filter((user) => user.id !== id));
      console.log(`User with ID ${id} deleted successfully.`);
    }
  };

  return (
    <div className="p-10 font-sans">
      <h1 className="text-3xl text-center font-bold text-gray-800 mb-5">
        List of Users
      </h1>
      <div className="mt-5">
        <div className="p-5 mb-3 border border-gray-300 rounded-lg bg-white shadow-lg">
          <div className="flex justify-end items-center mb-5">
            <Link
              to="/create"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Create User
            </Link>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider">
                  Gender
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-center text-md font-bold text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.gender}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <Link
                      to={`/read/${user.id}`}
                      className="bg-green-500 text-white px-2 py-1 rounded mr-2 hover:bg-green-600"
                    >
                      Read
                    </Link>
                    <Link
                      to={`/update/${user.id}`}
                      className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
