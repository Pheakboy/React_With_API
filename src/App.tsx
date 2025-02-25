import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Person/Home";
import Create from "./components/Person/Create";
import Update from "./components/Person/Update";
import Read from "./components/Person/Read";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import MaterialUI from "./pages/MaterialUI";
import CreateStudent from "./components/student/CreateStudent";
import EditStudent from "./components/student/EditStudent";
import ViewStudent from "./components/student/ViewStudent";
import StudentTable from "./components/student/StudentTable";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* person */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/read/:id" element={<Read />}></Route>

        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/materiUI" element={<MaterialUI />}></Route>

        <Route path="/product" element={<ProductPage />}></Route>

        {/* student */}
        <Route path="/student" element={<StudentTable />}></Route>
        <Route path="/student/create" element={<CreateStudent />}></Route>
        <Route path="/student/edit/:studentId" element={<EditStudent />}></Route>
        <Route path="/student/view/:studentId" element={<ViewStudent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
