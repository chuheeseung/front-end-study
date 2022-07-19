import React from 'react';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  return (
    <div className='auth-wrapper'>
      <div style={{textAlign: 'center'}}>
        <h3>Register</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input 
          name="email"
          type="email"
          // {...register("exampleRequired", { required: true })} 
        />
        {/* {errors.exampleRequired && <p>This field is required</p>} */}

        <label>Name</label>
        <input 
          name="name"
          // {...register("exampleRequired", { required: true })} 
        />
        {/* {errors.exampleRequired && <p>This field is required</p>} */}

        <label>Password</label>
        <input 
          name="password"
          type="password"
          // {...register("exampleRequired", { required: true })} 
        />
        {/* {errors.exampleRequired && <p>This field is required</p>} */}

        <label>Password Confirm</label>
        <input 
          name="passowrd_confirm"
          type="password"
          // {...register("exampleRequired", { required: true })} 
        />
        {/* {errors.exampleRequired && <p>This field is required</p>} */}

        <input type="submit" />
      </form>
      <Link style={{color: 'gray', textDecoration: 'none'}} to="login">이미 아이디가 있다면...</Link>
    </div>
  )
}

export default RegisterPage