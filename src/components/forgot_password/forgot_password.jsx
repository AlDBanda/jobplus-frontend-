import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/form.scss';
import Alert from '../alert/Alert';
import { forgotPassword } from '../../api/auth/AuthServices';



export default function login() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState({});
  const [info, setInfo] = useState({});
 
//This handles the submit event
  const handleSubmit =  async (e) => {
    e.preventDefault();
  
   const  { response, error } =await forgotPassword({email});
   if (response) {
    //clear email fields
    setEmail('');
    setError({});
    setInfo({message: 'Check your email for link to reset password.'})
    console.log(response);
   }
   if (error) {
    setError(error);
   }

};

  return (
    <>
    {error.message &&  (<Alert type='success' message={error} />)}
    {info.message &&  (<Alert type='success' message={info} />)}
    
    <form className="form form--page" onSubmit={handleSubmit}>
      <div className="form__group form__group--page">
        <label className="form__label">Email</label>
        <input 
        className="form__field" 
        type="text" 
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      </div>

  

      <div className="form__group form__group--page">
        <input className="form__btn" type="submit" value="Request New Password" />
      </div>

      <footer>
        Have an account? <Link to='/login'>Login</Link>
      </footer>
    </form>
    </>
  );
}
