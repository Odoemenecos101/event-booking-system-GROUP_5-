import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to EventMaster</h1>
      <p>Discover, book, and manage your favorite events all in one place.</p>
      
      <div style={{ marginTop: '20px', gap: '10px', display: 'flex', justifyContent: 'center' }}>
        <Link to="/login">
          <button style={{ padding: '10px 20px', cursor: 'pointer' }}>Login</button>
        </Link>
        <Link to="/signup">
          <button style={{ padding: '10px 20px', cursor: 'pointer' }}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}