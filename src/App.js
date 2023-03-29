import { Navigate, Route, Routes } from "react-router-dom";
import "./components/assests/style/style.css"
import Home from "./Pages/home";
import { Products } from "./Pages/products";


function App() {
  return (
    <div className="d-sm-block d-md-none d-xl-none">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
