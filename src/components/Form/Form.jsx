import React from "react";
import { useRef } from "react";
import "./form.css";
import axios from "axios";
import Welcome from "../Welcome-form/Welcome";
import Inputimage from "../Image-input/Inputimage";


export default function Form() {

  let name = useRef()
  let mail = useRef()
  let password = useRef()
  let confirm_password = useRef()

  async function handleSubmit(e){
    e.preventDefault()
    let data = {
      [name.current.name]: name.current.value,
      [mail.current.name]: mail.current.value,
      [password.current.name]: password.current.value,
      [confirm_password.current.name]: confirm_password.current.value,
      
  }
  console.log(data)
  let url = 'http://localhost:8080/users'
  if (password.current.value === confirm_password.current.value) {
    try {
        await axios.post(
            url, data
        )
    } catch (error) {
        console.log(error)
        console.log('ocurrió un error')
    }
    e.target.reset()
} else {
    alert("Passwords do not match")
}}

 return (
    <div className="conteiner">
      <div className="formRegister">
        <Welcome />
        <form className="form" id="formulario" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Name</legend>
            <input type="text" name="name" id="name" ref={name} required />
            <Inputimage src="/images/profile.png" />
          </fieldset>
          <fieldset>
            <legend>Email</legend>
            <input type="email" name="mail" id="mail" ref={mail} required />
            <Inputimage src="./images/mail.png" />
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            <input type="password" name="password" id="password" ref={password} required />
            <Inputimage src="./images/lock1.png" />
          </fieldset>
          <fieldset>
            <legend>Confirm Password</legend>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              ref={confirm_password}
              required 
            />
            <Inputimage src="./images/lock1.png" />
          </fieldset>
          <fieldset className="checkbox">
            <input
              type="checkbox"
              name="send-email"
              id="send-email"
              
            />
            <label htmlFor="send-email">Send notification to my email</label>
          </fieldset>
          <div>
            <button type="submit" className="signup">
              Sign up
            </button>
          </div>
          <a href="#" className="google">
            <Inputimage src="./images/Google.png" />
            <span>Sign in with Google</span>
          </a>
          <p>
            Already have an account?{" "}
            <a href="#" className="ancor">
              Log in
            </a>
          </p>
          <p>
            Go back to{" "}
            <a href="#" className="ancor">
              home page
            </a>
          </p>
        
        </form>
      </div>
    </div>
  );
}
