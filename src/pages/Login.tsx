import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { signIn } from '../features/auth/authSlice';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const onLogin: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(signIn({ email, password }));
  };

  useEffect(() => {
    if (auth.user) navigate('/');
    if (auth.errorMessage) toast.error(auth.errorMessage);
  }, [auth.user, auth.errorMessage, navigate]);

  return (
    <div className='login'>
      <Link to='/'>
        <img className='login-logo' src='amazon.svg' alt='' />
      </Link>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className='login-container'>
          <h1>Sign In</h1>

          <form onSubmit={onLogin}>
            <h5>E-mail</h5>
            <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <h5>Password</h5>
            <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className='login-sign-in-button' disabled={auth.isLoading}>Sign In</button>
          </form>

          <p>By signing-in you agree to the AMAZON FAKE CLONE's Conditions of Use and Privacy Notice.</p>
        </div>

        <div className='login-register-divider'>
          <span>New to Amazon</span>
        </div>
        <Link to='/register'>
          <button className='login-register-button'>Create your Amazon Account</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
