import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to Tottes Tattoo</h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
        Step into a realm of mystical ink and book your next legendary tattoo or consultation.
      </p>
      

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <img
          src="https://images.unsplash.com/photo-1603955082018-c42df7e5680d?auto=format&fit=crop&w=800&q=80"
          alt="Fantasy Tattoo"
          style={{ width: '100%', borderRadius: '20px', boxShadow: '0 0 10px #bfaaff' }}
        />
        <br />
        <Link to="/booking">
          <button style={{ marginTop: '2rem' }}>Book Now</button>
        </Link>
      </div>
    </div>
  );
}
