import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import css from "./layout.module.css";
import { SearchIcon } from "../../../assets/icon/medium-icons";

import { useSelector, useDispatch } from "react-redux";
import { setIsSigninDialog } from "../../../features/app/appSlice";

const footerData = [
  "Help",
  "Status",
  "Writers",
  "Blog",
  "Careers",
  "Privacy",
  "Terms",
  "About",
  "Knowable",
];

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <div className={css.rightbar}>
        <div className={css.content}>
          <Controls />
          <Searchbar />

          {children}
        </div>

        <footer className={css.footer}>
          <ul>
            {footerData.map((item) => {
              return (
                <li>
                  <Link href="/">
                    <a className={css.link}> {item} </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </footer>
      </div>
    </div>
  );
};

// =========== Control buttons ===========
const Controls = () => {
  const { isSignin } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  return (
    <div className={css.controls}>
      {isSignin ? (
        <div className={css.btn_set}>
          <Link href="/plans">
            <a className={css.btn}>
              <span> Get unliminted access </span>
            </a>
          </Link>
        </div>
      ) : (
        <div className={css.btn_set}>
          <button
            className={css.btn}
            onClick={() => dispatch(setIsSigninDialog(true))}
          >
            <span> Get started </span>
          </button>
          <button
            className={css.signin_btn}
            onClick={() => dispatch(setIsSigninDialog(true))}
          >
            <span> Sign In </span>
          </button>
        </div>
      )}
    </div>
  );
};

// ========== Search bar ===========
const Searchbar = () => {
  const router = useRouter();
  const { q } = router.query;

  const [query, setQuery] = useState(q);

  useEffect(()=>{
    setQuery(q);
  }, [q])

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentPath = router.pathname;
    let q = "";

    if (query) {
      const regx = / {1,}/g;
      q = query.trim().replaceAll(regx, "+");
    }

    if (currentPath.startsWith("/search")) {
      if (q) {
        router.push(`${currentPath}?q=${q}`);
      } 
      else {
        router.push(currentPath);
      }
    } 
    else {
      if (q) {
        router.push(`/search?q=${q}`);
      } 
      else {
        router.push("/search");
      }
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.search}>
        <div className={css.icon}>
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Layout;
