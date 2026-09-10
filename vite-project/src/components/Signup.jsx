import { useRef, useState } from "react";
import "./Signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      pass: passRef.current.value,
    };

    nameRef.current.style.backgroundColor = "white";
    emailRef.current.style.border = "2px solid green";
    console.log(data);
  };

  return (
    <div className="sin">
       <h3>SUBSCRIBE</h3>
      <h4>Sign up to get the latest on sales, new releases and more …</h4> 
     
      <div className="container">
        <div className="row">
          <form
            className="col-4"
            onSubmit={handleSubmit}
            style={{ position: "relative", top: "35px" }}
          >
            <div className="mb-1 position-relative">
              <FaUser className="input-icon" />

              <input
                placeholder="User Name"
                type="text"
                ref={nameRef}
                className="form-control border-dark ps-2"
                required
              />
            </div>
            <div className="mb-2 position-relative">
              <HiOutlineMail className="input-icon" />

              <input
                placeholder="Email"
                type="email"
                ref={emailRef}
                className="form-control border-dark ps-2"
                required
              />
            </div>

            <div className="mb-2 position-relative">
              <input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                ref={passRef}
                className="form-control border-dark pe-5"
                required
              />

              <span
                className="password-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="mb-3">
              <button
                className="btn btn-dark"
                type="button"
                onClick={() => navigate("/login")}
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
