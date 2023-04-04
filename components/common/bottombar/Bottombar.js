import { useState, useEffect } from "react";
import css from "./bottombar.module.css";

import Link from "next/link";
import Image from "next/image";

import logo2 from "../../../assets/medium2.svg";
import avatar from "../../../assets/image/avatars/avatar-3.jpg";
import { StarIcon, StatsIcon } from "../../../assets/icon/medium-icons";

import { useSelector, useDispatch } from "react-redux";
import { setShowLaunchpadMenu } from "../../../features/app/appSlice";

import {
  HomeIcon,
  HomeIconFill,
  BellIcon,
  BellIconFill,
  BookmarkIcon,
  BookmarkIconFill,
  StoriesIcon,
  StoriesIconFill,
  WriteIcon,
  SearchIcon,
  HomeCurvedFillIcon,
  HomeCurvedIcon,
  BookmarkCurvedIcon,
  SearchCurvedFillIcon,
  SearchCurvedIcon,
} from "../../../assets/icon/medium-icons";

const Bottombar = () => {
  const [activeTab, setActiveTab] = useState("");

  const { showLaunchpadMenu } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(showLaunchpadMenu);
  }, [showLaunchpadMenu]);

  return (
    <div className={css.container}>
      <div className={css.bottombar}>
        <div className={css.wrapper}>
          <Link href="/">
            <a
              className={`${css.tab} ${activeTab === "home" ? css.active : ""}`}
              onClick={() => setActiveTab("home")}
            >
              {activeTab === "home" ? (
                <HomeCurvedFillIcon />
              ) : (
                <HomeCurvedIcon />
              )}
            </a>
          </Link>

          <Link href="/search">
            <a
              className={`${css.tab} ${
                activeTab === "search" ? css.active : ""
              }`}
              onClick={() => setActiveTab("search")}
            >
              {activeTab === "search" ? (
                <SearchCurvedFillIcon />
              ) : (
                <SearchCurvedIcon />
              )}
            </a>
          </Link>

          <Link href="/me/lists">
            <a className={css.tab} onClick={() => setActiveTab("bookmark")}>
              <BookmarkCurvedIcon />
            </a>
          </Link>

          <div
            className={`${css.tab} ${css.profile}`}
            onClick={() => dispatch(setShowLaunchpadMenu(!showLaunchpadMenu))}
          >
            <div className={css.avatar}>
              <Image src={avatar} layout="fill" />
            </div>
          </div>
        </div>
      </div>

      {showLaunchpadMenu ? <LaunchpadMenu /> : ""}
    </div>
  );
};

const LaunchpadMenu = () => {
  return (
    <div className={css.launchpadMenu}>
      <div className={css.wrapper}>
        <div className={css.header}>
          <Link href="/">
            <a className={css.logo}>
              <Image src={logo2} />
            </a>
          </Link>

          <Link href="/">
            <a className={css.access}> Get unliminted access </a>
          </Link>

          <Link href="/">
            <a className={css.upgrade}> Upgrade </a>
          </Link>
        </div>
        <div className={css.space}></div>
        <div className={css.menu}>
          <ul>
            <ul>
              <li>
                <div className={css.text}>
                  <p> Aman Ghanghoriya </p>
                  <p> amanghanghoriya2@gmail.com </p>
                </div>
                <Link href="/">
                  <a>
                    <div> View profile </div>
                  </a>
                </Link>
              </li>
            </ul>
            <hr />
            <ul>
              <li>
                <Link href="/">
                  <a>
                    <div className={css.text}>
                      <div className={css.icon}>
                        <BellIcon />
                      </div>
                      <p> Notifications </p>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <div className={css.text}>
                      <div className={css.icon}>
                        <StoriesIcon />
                      </div>
                      <p> Stories </p>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <div className={css.text}>
                      <div className={css.icon}>
                        <StatsIcon />
                      </div>
                      <p> Stats </p>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
            <hr />
            <ul>
              <li>
                <Link href="/me/settings">
                  <a>
                    <div className={css.text}>
                      <p> Settings </p>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <div className={css.text}>
                      <p> Manage publications </p>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <div className={css.text}>
                      <p> Refine recommendations </p>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <div className={css.text}>
                      <p> Sign out </p>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
            <hr />
            <ul>
              <li>
                <Link href="/">
                  <a>
                    <div className={css.text}>
                      <div className={css.icon}>
                        <StarIcon />
                      </div>
                      <p> Become a member </p>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <button>
                  <div className={css.text}>
                    <p> Gift a membership </p>
                  </div>
                </button>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <div className={css.text}>
                      <p> Medium Partner Program </p>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
            <hr />
            <ul>
              <li>
                <Link href="/">
                  <a>
                    <div className={css.text}>
                      <p> Help </p>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <div className={css.text}>
                      <p> Privacy </p>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <div className={css.text}>
                      <p> Terms </p>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bottombar;
