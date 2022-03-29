import "../LoginPage/LoginPage.css";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <form action="" className="sign-up">
      <div className="login-text">Sign up</div>
      <div className="inputs-outerbox">
        <label className="lab-email" for="/">
          First-name
        </label>
        <input type="email" placeholder="First name*" className="login-input" />
      </div>
      <div className="inputs-outerbox">
        <label className="lab-email" for="/">
          Last-name
        </label>
        <input type="email" placeholder="Last-name*" className="login-input" />
      </div>
      <div className="inputs-outerbox">
        <label className="lab-email" for="/">
          Email
        </label>
        <input
          type="email"
          placeholder="Jhondoe@gmail.com"
          className="login-input"
        />
      </div>
      <div className="inputs-outerbox">
        <label className="lab-email" for="/">
          Password
        </label>
        <input
          type="email"
          placeholder="************"
          className="login-input"
        />
      </div>
      <div className="inputs-outerbox">
        <label className="lab-email" for="/">
          Confirm password
        </label>
        <input
          type="email"
          placeholder="************"
          className="login-input"
        />
      </div>

      <div className="logins-outerbox">
        <button className="simple-login">Sign-up</button>
      </div>

      <div className="dont-acc-outerbox">
        <div className="dont-acc">Already have an account ?</div>
        <Link to="/Login" className="sign-up-anchor">
          Login
        </Link>
      </div>
    </form>
  );
};

export { SignUpPage };
