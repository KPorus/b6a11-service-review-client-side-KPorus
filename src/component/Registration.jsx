import React, { useContext } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "./Context/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Registration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const [accepted, setAccepted] = useState(false);
  const { createUser, setLoading } = useContext(AuthContext);

  let handleLogin = (e) => {
    e.preventDefault();
    let form = e.target;
    let email = form.email.value;
    let password = form.password.value;
    let name = form.name.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setLoading(true);
        user.displayName = name;
        const currentUser = {
          email: userInfo.email,
        };
        fetch("https://b6a11-service-review-server-side-k-porus.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // local storage is the easiest but not the best place to store jwt token
            localStorage.setItem("photo-token", data.token);
            navigate(from, { replace: true });
          });
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        setErrors({ ...errors, general: error.message });
      });
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors({ ...errors, email: "Please provide a valid email" });
      setUserInfo({ ...userInfo, email: "" });
    } else {
      setErrors({ ...errors, email: "" });
      setUserInfo({ ...userInfo, email: e.target.value });
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const lengthError = password.length < 6;
    const noSymbolError = !/[\!\@\#\$\%\^\&\*]{1,}/.test(password);
    const noCapitalLetterError = !/[A-Z]{1,}/.test(password);

    if (lengthError) {
      setErrors({ ...errors, password: "Must be at least 6 characters" });
      setUserInfo({ ...userInfo, password: "" });
    } else if (noSymbolError) {
      setErrors({ ...errors, password: "Must have a unique number" });
      setUserInfo({ ...userInfo, password: " " });
    } else if (noCapitalLetterError) {
      setErrors({ ...errors, password: "Must have a capital letter" });
      setUserInfo({ ...userInfo, password: " " });
    } else {
      setErrors({ ...errors, password: "" });
      setUserInfo({ ...userInfo, password: e.target.value });
    }
  };

  let check = (e) => {
    setAccepted(e.target.checked);
  };

  return (
    <div className='hero min-h-screen bg-base-200' onSubmit={handleLogin}>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:textcenter'>
          <img
            className='md:w-2/3 inline md:inline-block '
            src='https://img.icons8.com/external-smashingstocks-hand-drawn-black-smashing-stocks/99/null/external-digital-camera-graphic-design-and-photography-smashingstocks-hand-drawn-black-smashing-stocks.png'
            alt='logo'
          />
          <h1 className='text-5xl font-bold'>Register Now !</h1>
          <p className='py-6'>
            Welcome to User. Please register for using our services.
          </p>
        </div>
        <form className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <div className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                name='name'
                placeholder='Enter your name'
                className='input input-bordered'
                required
              />
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                name='email'
                placeholder='email'
                className='input input-bordered'
                required
                onChange={handleEmailChange}
              />
              {errors.email && <p className='text-red-600'>{errors.email}</p>}
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                name='password'
                placeholder='password'
                className='input input-bordered'
                required
                onChange={handlePasswordChange}
              />
              {errors.password && (
                <p className='text-red-600'>{errors.password}</p>
              )}

              <small>
                {" "}
                <Link to='/login'>Already have a account!! Login</Link>
              </small>
              <div className='flex text-xl'>
                <input type='checkbox' onClick={check} required />
                <label className='label'>
                  <span className='label-text'>
                    Accept terms and conditions
                  </span>
                </label>
              </div>
            </div>
            {errors.general && <p className='text-red-600'>{errors.general}</p>}
            <div className='form-control mt-6'>
              <button className='btn btn-primary' disabled={!accepted}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
