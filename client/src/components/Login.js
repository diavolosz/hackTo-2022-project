import { useForm } from "../hooks/useForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import '../styles/Login.css'

export default function Login(props) {

  const navigate = useNavigate();
  const { setBody } = props

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

  // const getSelectedValue = () => {
  //   let e = document.getElementById("id-user-list-1").value
  //   console.log(e)
  // }

  const onSubmit = event => {
    event.preventDefault();
    let selected = document.getElementById("id-user-list-1").value
    if (selected === 'user') {
      setBody('body-user')
    } else if (selected === 'employer') {
      setBody('body-employer')
    }else {
      console.log('error')
    }
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
        <p className="signin-form-title">Sign In</p>
        <select id="id-user-list-1" className="select-type">
          <option value='null'>Choose User Type</option>
          <option value='user'>User</option>
          <option value='mentor'>Mentor</option>
          <option value='employer'>Employer</option>
        </select>
      </div>
      {inputFields}
      <div className="signin-form-submit-container">
        <input className="signin-form-submit" type="submit" value="Sign In" />
        <span onClick={() => setBody('signup')}>No account? Sign up</span>
      </div>
    </form>
  )
}