import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-10 text-white">
      <h1 className="text-5xl text-purple-500">Tailwind works!</h1>

      <p className="text-lg max-w-xl mb-8">
        Book a consultation or tattoo session with our fantasy-inspired artists.
      </p>
      <Link
        to="/booking"
        className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-lg text-white font-bold transition"
      >
        Book Now
      </Link>
    </div>
  );
}
