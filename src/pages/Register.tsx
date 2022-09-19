import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './Register.css';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { register } from '../features/auth/authSlice';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const onRegister: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error('Passwords must match');
      return;
    }
    dispatch(register({ name, email, password }));
  };

  useEffect(() => {
    if (auth.user) navigate('/');
    if (auth.errorMessage) toast.error(auth.errorMessage);
  }, [auth.user, auth.errorMessage, navigate]);

  return (
    <div className='register'>
      <Link to='/'>
        <img className='login-logo' src='amazon.svg' alt='' />
      </Link>
      <div className='register-container'>
        <form onSubmit={onRegister}>
          <h1>Create Account</h1>
          <h5>Name</h5>
          <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
          <h5>E-mail</h5>
          <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <h5>Re-enter Password</h5>
          <input type='password' name='password2' value={password2} onChange={(e) => setPassword2(e.target.value)} />
          <button disabled={auth.isLoading}>Register</button>
        </form>
        <p>By creating an account, you agree to AMAZON FAKE CLONE's Conditions of Use and Privacy Notice.</p>
        <p>
          Already have an account?
          <Link to='/login'>
            <span style={{ color: '#0066c0' }}> Sign in</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
