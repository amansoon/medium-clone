import { useState, useEffect} from "react";

import css from "../styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";

import logo from "../assets/image/logo.svg";

import { useSelector, useDipatch, useDispatch } from "react-redux";
import {setIsSigninDialog} from "../features/app/appSlice" ;


const Navbar = () => {
  const [bg, setBg] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    window.onscroll = (e) => {
      if (window.scrollY > 440) {
        setBg('white');
      }
      else {
        setBg('orange');
      }
    }
  }, []);


  return (
    <section className={`section ${css.navbar_s} ${bg==='white' ? css.white: ''}`}>
      <div className={`section-inner`}>
        <div className="grid">
          <nav className={css.navbar} >
            <a href="/" className={css.logo}>
              <Image src={logo} />
            </a>
            <ul>
              <li> 
                <Link href='/'> Our story </Link>   
              </li>
              <li>
                <Link href='/'> Membership </Link>  
              </li>
              <li> 
                <Link href='/story'> Write </Link>  
              </li>
              <li> 
                <button onClick={() => dispatch(setIsSigninDialog(true))}>
                  Sign In
                </button>
              </li>
              <li>
                <button onClick={() => dispatch(setIsSigninDialog(true))}>
                  Get started
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};


export default Navbar;