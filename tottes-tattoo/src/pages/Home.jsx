import { Link } from 'react-router-dom';
import mysticOracle from '../assets/mystic-oracle.png';


export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to Tottes Tattoo</h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
        Step into a realm of mystical ink and book your next legendary tattoo or consultation.
      </p>
      

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <img
          src={mysticOracle}
          alt="Mystic Oracle Tattoo"
          style={{
            width: '100%',
            maxWidth: '700px',
            borderRadius: '20px',
            boxShadow: '0 0 40px #72ffb466',
            transition: 'transform 0.4s',
            cursor: 'pointer'
          }}
          onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.02)')}
          onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
        />
        <br />
        <Link to="/booking">
          <button style={{ marginTop: '2rem' }}>Book Now</button>
        </Link>
      </div>
    </div>
  );
}
