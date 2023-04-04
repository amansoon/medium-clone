import { useState, useEffect } from "react";
import Image from "next/image";

import css from "./dialog.module.css";
import Link from "next/link";
import { CancelIcon } from "../../../assets/icon/medium-icons";

import { useDispatch } from "react-redux";
import { setIsSigninDialog } from "../../../features/app/appSlice";

const Dialog = () => {
  const dispatch = useDispatch();
  const [isSigning, setIsSigning] = useState(true);
  const handleSubmit = () => {};

  return (
    <div className={css.dialog}>
      <div className={css.wrapper}>

        <div className={css.cancel}>
          <button onClick={() => dispatch(setIsSigninDialog(false))}> <CancelIcon /> </button>
        </div>

        {isSigning ? <Signin /> : <Signup />}
      </div>
    </div>
  );
};

const Signup = () => {
  const handleSubmit = () => {};

  return (
    <div className={css.signin}>
      <h2> Join Medium. </h2>
      <form onSubmit={handleSubmit}>
        <div className={css.control}>
          <input type="text" id="name" placeholder="Your name" />
        </div>
        <div className={css.control}>
          <input type="email" id="email" placeholder="Your email" />
        </div>
        <div className={css.control}>
          <input type="password" id="password" placeholder="Password" />
        </div>
        <div className={`${css.control} ${css.action}`}>
          <button>Sign In</button>
        </div>
      </form>
      <div className={css.terms}>
        <p>
          Click “Sign Up” to agree to Medium’s Terms of Service and acknowledge
          that Medium’s Privacy Policy applies to you.
        </p>
      </div>
    </div>
  );
};

const Signin = () => {
  const handleSubmit = () => {};

  return (
    <div className={css.signin}>
      <h2> Welcome back. </h2>
      <form onSubmit={handleSubmit}>
        <div className={css.control}>
          <input type="email" id="email" placeholder="Your email" />
        </div>
        <div className={css.control}>
          <input type="password" id="password" placeholder="Password " />
        </div>
        <div className={`${css.control} ${css.action}`}>
          <button>Sign In</button>
        </div>
      </form>
      <div className={css.terms}>
        <p>
          Click “Sign In” to agree to Medium’s Terms of Service and acknowledge
          that Medium’s Privacy Policy applies to you.
        </p>
      </div>
    </div>
  );
};

export default Dialog;
