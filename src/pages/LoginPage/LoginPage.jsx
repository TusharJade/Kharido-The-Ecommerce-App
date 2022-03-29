import "./LoginPage.css";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div>
      <form action="" className="login">
        <div className="login-text">Login</div>
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

        <div className="logins-outerbox">
          <button className="simple-login">Login</button>

          <button className="guest-login">Login as guest</button>
        </div>

        <div className="dont-acc-outerbox">
          <div className="dont-acc">Don't have account yet ?</div>
          <Link to="/Signup" className="sign-up-anchor">
            &nbsp; Sign-up
          </Link>
        </div>
      </form>
    </div>
  );
};

export { LoginPage };
