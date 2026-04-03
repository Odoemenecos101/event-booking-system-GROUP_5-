import { Link } from 'react-router-dom';

export default function SignUp() {
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign Up button clicked!");
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Create an Account</h2>
      <form onSubmit={handleSignUp} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <div>
          <label>Full Name:</label><br />
          <input type="text" required style={{ width: '100%', padding: '8px' }} />
        </div>

        <div>
          <label>Email:</label><br />
          <input type="email" required style={{ width: '100%', padding: '8px' }} />
        </div>
        
        <div>
          <label>Password:</label><br />
          <input type="password" required style={{ width: '100%', padding: '8px' }} />
        </div>
        
        <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>Create Account</button>
      </form>
      
      <p style={{ marginTop: '15px', fontSize: '14px' }}>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}