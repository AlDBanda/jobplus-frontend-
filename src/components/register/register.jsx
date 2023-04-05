import React, {useState, useEffect} from 'react';
import '../styles/form.scss';
import { Link } from 'react-router-dom';
import Alert from '../alert/Alert';
import { createUser } from '../../api/auth/AuthServices';



export default function register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({});

   // send data to backend
  const registerUser = async (person) => {
    //validate confirm statement
    if (person.password !== person.confirmPassword){
      setError({message: 'Passwords do not match!'});
      return;
    }

    const { response, error } = await createUser(person);

    if (response) {
      //clear form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError({});
    }
    if (error) {
      setError(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
      username: email,
      email,
      password,
      confirmPassword
  };

  registerUser(user);
};

  return (
    <>
     {error.message &&  (<Alert type='success' message={error} />)}
     <form className="form form--page" onSubmit={handleSubmit}>
      <div className="form__group form__group--page">
        <label className="form__label">First name</label>
        <input
         className="form__field" 
         type="text" 
         placeholder="First name"
         value={firstName}
         onChange={(e) => setFirstName(e.target.value)} 
         />
      </div>

      <div className="form__group form__group--page">
        <label className="form__label">Last name</label>
        <input className="form__field" 
        type="text" 
        placeholder="Last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)} 
        />
      </div>

      <div className="form__group form__group--page">
        <label className="form__label">Email</label>
        <input className="form__field" 
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
         />
      </div>

      <div className="form__group form__group--page">
        <label className="form__label">Choose password</label>
        <input 
        className="form__field" 
        type="password" 
        placeholder="Choose password"
        value={password}
        autoComplete='off'
        onChange={(e) => setPassword(e.target.value)}
         />
      </div>

      <div className="form__group form__group--page">
        <label className="form__label">Confirm Password</label>
        <input 
        className="form__field" 
        type="password" 
        placeholder="Confirm Password"
        value={confirmPassword}
        autoComplete='off'
        onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <div className="form__group form__group--page">
        <input className="form__btn"
        type="submit" 
         />
      </div>

      <footer>
        Already have an account? <Link to='/login'>Login</Link>
      </footer>
     </form>
    </>
  );
}
