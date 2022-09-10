import { useForm } from "../hooks/useForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function SignUp() {
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
      name: "username",
      value: "",
      placeholder: "Username",
      type: "text",
      required: true,
    },
    {
      name: "user type",
      value: "",
      placeholder: "User Type",
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
    {
      name: "password_confirmation",
      placeholder: "Re-enter Password",
      value: "",
      type: "password",
      required: true,
    },
  ]);

  const inputFields = formValues.map(formInput => {
    const { name, placeholder, type, required, value } = formInput;

    return (
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
    <form className="form" onSubmit={onSubmit}>
      <p className="form-title">Sign Up</p>
      {inputFields}
      <input className="form-submit" type="submit" value="Log In" />
    </form>
  )
}