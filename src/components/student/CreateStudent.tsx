import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateStudent = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const studentData = { id, name, age, place, phone };
    console.log(studentData);
    fetch("http://localhost:8080/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    })
      .then(() => {
        alert("Student added successfully");
        navigate("/student");
        setId("");
        setName("");
        setAge("");
        setPlace("");
        setPhone("");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl my-7 border border-gray-200">
      <h1 className="flex justify-center items-center font-bold text-2xl text-green-500">
        Create Student
      </h1>
      <form onSubmit={handelSubmit} className="space-y-4">
        <div>
          <label htmlFor="id" className="block text-gray-700 font-semibold">
            ID
          </label>
          <input
            onChange={(e) => setId(e.target.value)}
            value={id}
            type="text"
            id="id"
            name="id"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-gray-700 font-semibold">
            Age
          </label>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
            id="age"
            name="age"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="place" className="block text-gray-700 font-semibold">
            Place
          </label>
          <input
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            type="text"
            id="place"
            name="place"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-semibold">
            Phone
          </label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            id="phone"
            name="phone"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex w-full space-x-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300"
          >
            ✅ Submit
          </button>
          <Link
            to="/student"
            className="w-full bg-blue-600 text-white text-center p-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300"
          >
            ❌ Cancle
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateStudent;
