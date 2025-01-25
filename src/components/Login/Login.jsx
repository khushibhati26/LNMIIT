import React, { useState, useRef, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { loginValidationSchema, signupValidationSchema } from "../../utils/validation";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
import './Login.css';
import { useAuth } from '../../context/AuthContext.jsx';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const nameRef = useRef(null);
  const { user } = useAuth();

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setErr(null);
  };

  useEffect(() => {
    if (user) {
      navigate('/services');
    }
  }, [user, navigate]);


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    setIsLoading(true);

    try {
      const formData = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        ...(isSignUp && {
          confirmPassword: confirmPasswordRef.current.value,
          name: nameRef.current.value
        })
      };

      await (isSignUp ? signupValidationSchema : loginValidationSchema).validate(formData);

      const authFunction = isSignUp ? createUserWithEmailAndPassword : signInWithEmailAndPassword;
      const userCredential = await authFunction(auth, formData.email, formData.password);

      dispatch(addUser({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: isSignUp ? formData.name : userCredential.user.displayName
      }));

      navigate('/services');
    } catch (error) {
      setErr(error.message.replace('Firebase:', '').trim());
    } finally {
      setIsLoading(false);
    }
  };

  if (user) {
    return null; // or loading spinner
  }

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
        <form onSubmit={handleFormSubmit}>
          {isSignUp && (
            <div className="form-field">
              <label>Username</label>
              <input 
                ref={nameRef} 
                type="text" 
                placeholder="Enter your username" 
                required 
                disabled={isLoading}
              />
            </div>
          )}
          <div className="form-field">
            <label>Email</label>
            <input 
              ref={emailRef} 
              type="email" 
              placeholder="Enter your email" 
              required 
              disabled={isLoading}
            />
          </div>
          <div className="form-field">
            <label>Password</label>
            <input 
              ref={passwordRef} 
              type="password" 
              placeholder="Enter your password" 
              required 
              disabled={isLoading}
            />
          </div>
          {isSignUp && (
            <div className="form-field">
              <label>Confirm Password</label>
              <input 
                ref={confirmPasswordRef} 
                type="password" 
                placeholder="Confirm your password" 
                required 
                disabled={isLoading}
              />
            </div>
          )}
          {err && <p className="error-text">{err}</p>}
          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? 'Processing...' : (isSignUp ? 'Sign Up' : 'Login')}
          </button>
        </form>
        <div className="toggle-form">
          <span>
            {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
            <button 
              onClick={toggleForm} 
              className="toggle-btn" 
              disabled={isLoading}
            >
              {isSignUp ? 'Login' : 'Sign Up'}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;