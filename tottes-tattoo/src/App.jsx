import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-black text-white font-sans">
      <h1 className="text-5xl text-purple-500">Tailwind works!</h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </Router>
  );
}
