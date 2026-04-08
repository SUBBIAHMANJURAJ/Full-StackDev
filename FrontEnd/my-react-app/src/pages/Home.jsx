import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    navigate('/profile');
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{minHeight: '100vh', backgroundColor: '#f8f9fa'}}>
      <div className="card p-5" style={{width: '400px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
        <h2 className="text-center mb-4">Login</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Login
          </button>
        </form>

        {/* Links */}
        <div className="text-center">
          <small>
            Don't have an account? <a href="#signup">Sign up</a>
          </small>
        </div>
      </div>
    </div>
  )
}

export default Home;