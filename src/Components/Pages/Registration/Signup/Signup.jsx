import { useState } from 'react';
import './Signup.css';
import { logInWithEmailAndPassword, registerWithEmailAndPassword, signInWithGoogle, sendPasswordReset } from './firebaseconfig'; 
import nikeLogo from '../../../../assets/homeimg/nik-logo.png';
import jordanLogo from '../../../../assets/homeimg/jordan-logo.png';

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [resetEmail, setResetEmail] = useState(''); // State for password reset email
  const [showReset, setShowReset] = useState(false); // State to toggle reset email input

  const handleLogin = () => {
    logInWithEmailAndPassword(email, password);
  };

  const handleSignup = () => {
    registerWithEmailAndPassword(name, email, password);
  };

  const handlePasswordReset = async () => {
    await sendPasswordReset(resetEmail); // Send reset email
    setResetEmail(''); // Clear the input after sending
    setShowReset(false); // Hide the reset input
  };

  return (
    <div className="auth-container">
      {isLogin ? (
        <>
          <div className="loginlogo"><img src={nikeLogo} alt="" /><img src={jordanLogo} alt="" /></div>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <p onClick={() => setShowReset(!showReset)}>
            Forgot Password?
          </p>
          {showReset && (
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
              />
              <button onClick={handlePasswordReset}>Reset Password</button>
            </div>
          )}
        </>
      ) : (
        <>
          <h2>Signup</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignup}>Sign Up</button>
        </>
      )}
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
      </p>
    </div>
  );
};

export default Signup;
