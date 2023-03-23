import { Navigate, Route, Routes } from "react-router-dom";
import "./components/assests/style/style.css"
import Home from "./Pages";


function App() {
  return (
    <div className="d-sm-block d-md-none d-xl-none">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
