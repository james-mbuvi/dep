import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase';

const LoginForm = ({ isLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User logged in:', user);
      setEmail('');
      setPassword('');
      setError('');
    } catch (error) {
      setError('Invalid email or password. Please try again.');
      console.error('Error logging in:', error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed up:', user);
      setEmail('');
      setPassword('');
      setError('');
    } catch (error) {
      setError('Failed to sign up. Please try again.');
      console.error('Error signing up:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">{isLoggedIn ? 'Logout' : 'Login or Sign Up'}</h2>
      {!isLoggedIn && (
        <form className="space-y-4">
          <div className="form-group">
            <label htmlFor="email" className="text-gray-600">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="text-gray-600">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" onClick={handleLogin} className="login-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Login
          </button>
          <button type="submit" onClick={handleSignUp} className="signup-button bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Sign Up
          </button>
        </form>
      )}
      {isLoggedIn && (
        <button onClick={handleLogout} className="logout-button bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Logout
        </button>
      )}
    </div>
  );
};

export default LoginForm;
