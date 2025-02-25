import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type StudentType = {
  id: number;
  name: string;
  age: number;
  place: string;
  phone: string;
};

const StudentTable = () => {
  const [students, setStudents] = useState<StudentType[]>([]);
  const navigate = useNavigate();
  const handelView = (id: number) => {
    navigate("/student/view/" + id);
  };
  const handelEdit = (id: number) => {
    navigate("/student/edit/" + id);
    console.log(id);
  };
  const handelDelete = (id: number) => {
    fetch("http://localhost:8080/students/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        alert("Student deleted successfully");
        window.location.reload();
      })
      .catch((err) => console.error(err.message));
  };

  useEffect(() => {
    fetch("http://localhost:8080/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-xl my-7 border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">🎓 Student List</h1>
        <Link
          to="/student/create"
          className="py-3 px-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transform transition duration-300"
        >
          ➕ Add Student
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg">
        <Table hoverable striped>
          <TableHead className="bg-blue-600 text-gray-700 font-bold text-base">
            <TableHeadCell>Sl No</TableHeadCell>
            <TableHeadCell>Student Name</TableHeadCell>
            <TableHeadCell>Age</TableHeadCell>
            <TableHeadCell>Place</TableHeadCell>
            <TableHeadCell>Phone</TableHeadCell>
            <TableHeadCell className="text-center">Action</TableHeadCell>
          </TableHead>
          <TableBody className="divide-y">
            {students.length > 0 ? (
              students.map((item, index) => (
                <TableRow
                  key={index}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200 transition`}
                >
                  <TableCell className="font-semibold text-gray-700">
                    {index + 1}
                  </TableCell>
                  <TableCell className="text-gray-900">{item.name}</TableCell>
                  <TableCell className="text-gray-800">{item.age}</TableCell>
                  <TableCell className="text-gray-700">{item.place}</TableCell>
                  <TableCell className="text-gray-700">{item.phone}</TableCell>
                  <TableCell className="flex space-x-2">
                    <button
                      onClick={() => handelView(item.id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow"
                    >
                      👁 View
                    </button>
                    <button
                      onClick={() => handelEdit(item.id)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300 shadow"
                    >
                      ✏ Edit
                    </button>
                    <button
                      onClick={() => handelDelete(item.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300 shadow"
                    >
                      ❌ Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-center text-gray-500 py-4"
                >
                  No students found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default StudentTable;
