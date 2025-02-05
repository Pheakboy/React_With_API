import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Person/Home";
import Create from "./components/Person/Create";
import Update from "./components/Person/Update";
import Read from "./components/Person/Read";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import MaterialUI from "./pages/MaterialUI";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product" element= {<ProductPage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/materiUI" element={<MaterialUI/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/update/:id" element={<Update/>}></Route>
        <Route path="/read/:id" element={<Read/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
