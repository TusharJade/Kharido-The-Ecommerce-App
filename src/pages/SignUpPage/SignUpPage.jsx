import "../LoginPage/LoginPage.css";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../context/auth-context";

const SignUpPage = () => {
  const { auth, setAuth } = useAuthContext();

  const [signupInfo, setSignupInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordShow, setPasswordShow] = useState({
    passwordOne: false,
    passwordTwo: false,
  });

  const [matchPassword, setMatchPassword] = useState({
    matchPasswordStatus: false,
    messege: "",
  });

  const navigate = useNavigate();

  const signupSubmiter = (e) => {
    e.preventDefault();

    if (signupInfo.password !== signupInfo.confirmPassword) {
      setMatchPassword((item) => ({
        ...item,
        matchPasswordStatus: true,
        messege: "Password doesn't match please check password again",
      }));
    } else {
      const signupUser = async () => {
        try {
          const response = await axios.post("/api/auth/signup", {
            firstname: signupInfo.firstName,
            lastname: signupInfo.lastName,
            email: signupInfo.email,
            password: signupInfo.password,
          });
          console.log(response);
          localStorage.setItem("TOKEN", response.data.encodedToken);
          localStorage.setItem(
            "USER_INFO",
            JSON.stringify({
              firstname: response.data.createdUser.firstname,
              lastname: response.data.createdUser.lastname,
              email: response.data.createdUser.email,
            })
          );

          setAuth({
            loginStatus: true,
            token: response.data.encodedToken,
            user: {
              firstname: response.data.createdUser.firstname,
              lastname: response.data.createdUser.lastname,
              email: response.data.createdUser.email,
            },
          });

          navigate("/");
        } catch (error) {
          if (error.response.status == 422) {
            alert("account already exist please login");
          }
        }
      };

      signupUser();
    }
  };

  return (
    <form onSubmit={signupSubmiter} className="sign-up">
      <div className="login-text">Sign up</div>

      <div className="inputs-outerbox">
        <label className="lab-email" htmlFor="firstname">
          First-name
        </label>
        <input
          placeholder="First name*"
          className="login-input"
          id="firstname"
          onChange={(e) =>
            setSignupInfo((item) => ({ ...item, firstName: e.target.value }))
          }
          required
        />
      </div>

      <div className="inputs-outerbox">
        <label className="lab-email" htmlFor="lastname">
          Last-name
        </label>
        <input
          placeholder="Last-name*"
          className="login-input"
          id="lastname"
          onChange={(e) =>
            setSignupInfo((item) => ({ ...item, lastName: e.target.value }))
          }
          required
        />
      </div>

      <div className="inputs-outerbox">
        <label className="lab-email" htmlFor="email-id">
          Email
        </label>
        <input
          type="email"
          placeholder="Jhondoe@gmail.com"
          className="login-input"
          id="email-id"
          onChange={(e) =>
            setSignupInfo((item) => ({ ...item, email: e.target.value }))
          }
          required
        />
      </div>

      <div className="inputs-outerbox">
        <label className="lab-email" htmlFor="password">
          Password
        </label>
        <input
          type={passwordShow.passwordOne ? "text" : "password"}
          placeholder="************"
          className="login-input"
          id="password"
          onChange={(e) => {
            setSignupInfo((item) => ({ ...item, password: e.target.value }));
            setMatchPassword((item) => ({
              ...item,
              matchPasswordStatus: false,
            }));
          }}
          minLength="6"
          required
        />
        <span className="password-eye">
          {passwordShow.passwordOne ? (
            <i
              className="fas fa-eye"
              onClick={() =>
                setPasswordShow((item) => ({
                  ...item,
                  passwordOne: false,
                }))
              }
            ></i>
          ) : (
            <i
              className="fas fa-eye-slash"
              onClick={() =>
                setPasswordShow((item) => ({
                  ...item,
                  passwordOne: true,
                }))
              }
            ></i>
          )}
        </span>
      </div>

      <div className="inputs-outerbox">
        <label className="lab-email" htmlFor="confirm-password">
          Confirm password
        </label>
        <input
          type={passwordShow.passwordTwo ? "text" : "password"}
          placeholder="************"
          className="login-input"
          id="confirm-password"
          onChange={(e) => {
            setSignupInfo((item) => ({
              ...item,
              confirmPassword: e.target.value,
            }));
            setMatchPassword((item) => ({
              ...item,
              matchPasswordStatus: false,
            }));
          }}
          minLength="6"
          required
        />
        <span className="password-eye">
          {passwordShow.passwordTwo ? (
            <i
              className="fas fa-eye"
              onClick={() =>
                setPasswordShow((item) => ({
                  ...item,
                  passwordTwo: false,
                }))
              }
            ></i>
          ) : (
            <i
              className="fas fa-eye-slash"
              onClick={() =>
                setPasswordShow((item) => ({
                  ...item,
                  passwordTwo: true,
                }))
              }
            ></i>
          )}
        </span>
      </div>

      {matchPassword.matchPasswordStatus ? (
        <div className="password-dont-match">
          <i class="fas fa-exclamation-triangle"></i>
          &nbsp;{matchPassword.messege}
        </div>
      ) : null}

      <div className="logins-outerbox">
        <button type="submit" className="simple-login">
          Sign-up
        </button>
      </div>

      <div className="dont-acc-outerbox">
        <div className="dont-acc">Already have an account ? </div>
        <Link to="/Login" className="sign-up-anchor">
          &nbsp; Login
        </Link>
      </div>
    </form>
  );
};

export { SignUpPage };
