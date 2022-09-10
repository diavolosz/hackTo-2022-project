import { useForm } from "../hooks/useForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import '../styles/Login.css'

export default function Login() {
  const navigate = useNavigate();

  const [formValues, parsedFormData, handleInput, errors] = useForm([
    {
      name: "email",
      value: "",
      placeholder: "Email",
      type: "text",
      required: true,
    },
    {
      name: "password",
      placeholder: "Password",
      value: "",
      type: "password",
      required: true,
    },
  ]);

  const inputFields = formValues.map((formInput, index) => {
    const { name, placeholder, type, required, value } = formInput;

    return (
      <div className='input-box' key={index}>
        <label>Enter your {formInput.name}</label>
        <input
          {...{
            key: name,
            name,
            value,
            placeholder,
            onChange: handleInput,
            type,
            required,
          }}
        />
      </div>
    );
  });

  const onSubmit = event => {
    event.preventDefault();
    console.log(formValues)
    // axios
    //   .post(`/api/login`, {
    //     ...formValues,
    //   })
    //   .then(response => {
    //     if (!response.data.accessToken) {
    //       setError("Invalid credentials.");
    //       return;
    //     }
    //     // console.log ('response', response)
    //     localStorage.setItem("user", response.data.accessToken);
    //     navigate("/");
    //   });
  };

  return (
    <form className="signin-form" onSubmit={onSubmit}>
      <div className="signin-form-title-container">
        <p className="signin-form-title">Sign Up</p>
        <select className="select-type">
          <option>Choose User Type</option>
          <option>User</option>
          <option>Mentor</option>
          <option>Employer</option>
        </select>
      </div>
      {inputFields}
      <div className="signin-form-submit-container">
        <input className="signin-form-submit" type="submit" value="Sign In" />
        <span>No account? Sign up</span>
      </div>
    </form>
  )
}