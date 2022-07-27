import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import firebase from '../../firebase';

function LoginPage() {
  const { register, watch, formState: {errors}, handleSubmit } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await firebase.auth().signInWithEmailAndPassword(data.email, data.password);

      setLoading(false);
    } catch(error) {
      setErrorFromSubmit(error.message);
      setLoading(false);
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 5000);
    }
    
  };

  return (
    <div className='auth-wrapper'>
      <div style={{textAlign: 'center'}}>
        <h3>Login</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input 
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
        />
        {errors.email && <p>This field is required</p>}

        <label>Password</label>
        <input 
          name="password"
          type="password"
          {...register({ required: true, minLength: 6 })} 
        />
        {errors.password && errors.password.type === "required"
          && <p>This name field is required</p>}
        {errors.password && errors.password.type === "minLength"
          && <p>Password must have at least 6 characters</p>}

        
        <input type="submit" disabled={loading} />
      </form>
      <Link style={{color: 'gray', textDecoration: 'none'}} to="register">아직 아이디가 없다면...</Link>
    </div>
  )
}

export default LoginPage;