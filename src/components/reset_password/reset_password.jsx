import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/form.scss';
import Alert from '../alert/Alert';
import { resetPassword } from '../../api/auth/AuthServices';



export default function ResetPassword({ code }) {
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setConfirmPassword] = useState('');
  const [error, setError] = useState({});

  const navigate = useNavigate();
  
//This handles the submit event
  const handleSubmit =  async (e) => {
    e.preventDefault();

    const newPassword = {
      code, 
      password,
      passwordConfirmation,
    };


const { response, error } = await resetPassword(newPassword);
if (response) {
  //clear form fields
  setPassword('');
  setConfirmPassword('');
  setError({});
  navigate('/login');
}
if (error) {
  setError(error);
}
};

  return (
    <>
    {error.message &&  (<Alert type='success' message={error} />)}
    
    <form className="form form--page" onSubmit={handleSubmit}>
      <div className="form__group form__group--page">
        <label className="form__label">Password</label>
        <input 
        className="form__field" 
        type="password" 
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="form__group form__group--page">
        <label className="form__label">Confirm Password</label>
        <input 
        className="form__field" 
        type="password" 
        placeholder="confirm password"
        value={passwordConfirmation}
        onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <div className="form__group form__group--page">
        <input className="form__btn" type="submit" value="Reset Password" />
      </div>

      <footer>
        Dont have an account? <Link to='/register'>Register</Link> or <Link to='/login'>Login</Link>
      </footer>
    </form>
    </>
  );
}
