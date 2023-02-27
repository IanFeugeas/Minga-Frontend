import React from "react";
import "./form.css";
import Welcome from "../Welcome-form/Welcome";


export default function Form() {
  return (
    <div className="conteiner">
      <div className="formRegister">
        <Welcome />

        <form className="form" id="formulario">
          <fieldset>
            <legend>Name</legend>
            <input type="text" name="name" id="name" required />
            <Inputimage src="/images/profile.png" />
          </fieldset>
          <fieldset>
            <legend>Email</legend>
            <input type="email" name="mail" id="mail" required />
            <Inputimage src="./images/mail.png" />
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            <input type="password" name="password" id="password" required />
            <Inputimage src="./images/lock1.png" />
          </fieldset>
          <fieldset>
            <legend>Confirm Password</legend>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              
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
