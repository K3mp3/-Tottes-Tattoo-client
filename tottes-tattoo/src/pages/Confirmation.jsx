import { Link } from "react-router-dom";

export default function Confirmation() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg mb-6">
        Your booking request has been received. We'll contact you soon.
      </p>
      <Link
        to="/"
        className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-lg text-white font-bold transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
