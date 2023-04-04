import { useState } from "react";
import css from "./header.module.css";

import Link from "next/link";

import { MediumLogo2 } from "../../../assets/icon/medium-icons";

import { useSelector, useDispatch } from "react-redux";
import { setIsSigninDialog } from "../../../features/app/appSlice";


const Bottombar = () => {
  const { isSignin } = useSelector((state) => state.app);
  const [activeTab, setActiveTab] = useState("");

  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <div className={css.header}>
        <Link href="/">
          <a className={css.logo}>
            <MediumLogo2 />
          </a>
        </Link>

        {isSignin ? (
          <div className={css.btnset}>
            <Link href="/">
              <a className={`${css.btn} ${css.access}`}>
                Get unliminted access
              </a>
            </Link>

            <Link href="/">
              <a className={`${css.btn} ${css.upgrade}`}> Upgrade </a>
            </Link>
          </div>
        ) : (
          <div className={css.btnset}>
            <button className={`${css.btn} ${css.signin}`} onClick={()=> dispatch(setIsSigninDialog(true))} > Sign In </button>
            <button className={css.btn} onClick={()=> dispatch(setIsSigninDialog(true))}> Get Started </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bottombar;
