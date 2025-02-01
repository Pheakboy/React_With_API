import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Person/Home";
import Create from "./components/Person/Create";
import Update from "./components/Person/Update";
import Read from "./components/Person/Read";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/update/:id" element={<Update/>}></Route>
        <Route path="/read/:id" element={<Read/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
