import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProfileDetails from "./pages/ProfileDetails";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <Router>
      <div className="bg-gray-800 p-4 text-white flex justify-between">
        <h1 className="text-xl font-bold text-center mb-5">People Map</h1>
        <nav className="navbar">
          <Link to="/" className="mx-4">Home</Link>
          <Link to="/admin" className="mx-4">Admin Panel</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<ProfileDetails />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;






