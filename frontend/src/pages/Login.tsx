import { Link } from 'react-router-dom';

export default function Login() {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login button clicked!");
    // Later, you will send the email/password to your Node.js backend here
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Login to Your Account</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <div>
          <label>Email:</label><br />
          <input type="email" required style={{ width: '100%', padding: '8px' }} />
        </div>
        
        <div>
          <label>Password:</label><br />
          <input type="password" required style={{ width: '100%', padding: '8px' }} />
        </div>
        
        <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>Login</button>
      </form>
      
      <p style={{ marginTop: '15px', fontSize: '14px' }}>
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  );
}