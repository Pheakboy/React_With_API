import { useParams } from "react-router-dom";
import ButtonComponent from "./ButtonComponents";
import { useEffect, useState } from "react";
import { StudentType } from "../../types/StudentType";
// import Loader from "./Loading";
import Tooltip from "./Tooltip";

const ViewStudent = () => {
  const { studentId } = useParams();
  const [studentData, setStudentData] = useState<StudentType | null>(null);

  useEffect(() => {
    console.log(studentId); // Correct placement for debugging

    fetch(`http://localhost:8080/students/${studentId}`)
      .then((res) => res.json())
      .then((data) => setStudentData(data))
      .catch((err) => console.error("Error fetching student:", err.message));
  }, [studentId]);

  if (!studentData) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="max-w-2xl container mx-auto rounded-lg bg-gray-100 my-8 border border-t-4 border-t-red-300 p-6 shadow-lg">
      <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
        📖 Student Detail
      </h1>

      <div className=" text-lg flex justify-around">
        <div className="space-y-4">
        <p className="font-semibold text-cyan-800">
          Student ID: <span className="text-gray-900">{studentData.id}</span>
        </p>
        <p className="font-semibold text-cyan-800">
          Name: <span className="text-gray-900">{studentData.name}</span>
        </p>
        <p className="font-semibold text-cyan-800">
          Age: <span className="text-gray-900">{studentData.age}</span>
        </p>
        <p className="font-semibold text-cyan-800">
          Place: <span className="text-gray-900">{studentData.place}</span>
        </p>
        <p className="font-semibold text-cyan-800">
          Phone: <span className="text-gray-900">{studentData.phone}</span>
        </p>
        </div>
        <div className="flex justity-end items-center">
          {/* <Loader /> */}
          <Tooltip/>
        </div>
      </div>

      <div className="flex justify-evenly mt-6">
        <ButtonComponent />
      </div>
    </div>
  );
};

export default ViewStudent;
