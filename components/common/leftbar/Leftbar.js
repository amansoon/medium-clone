import { useState, useEffect, useRef } from "react";
import css from "./leftbar.module.css";

import Link from "next/link";
import Image from "next/image";

import logo2 from "../../../assets/medium2.svg";

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
  StarIcon,
  MediumLogo,
  MediumLogo2,
} from "../../../assets/icon/medium-icons";

import profilePhoto from "../../../assets/image/avatars/avatar-1.jpg";

import { useSelector, useDispatch } from "react-redux";
import { setShowLaunchpadMenu } from "../../../features/app/appSlice";

const Leftbar = () => {
  const [activeTab, setActiveTab] = useState("");

  const { showLaunchpadMenu } = useSelector((state) => state.app);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(showLaunchpadMenu);
  }, [showLaunchpadMenu]);

  return (
    <div className={css.container}>
      <div className={css.leftbar}>
        <div className={css.logo}>
          <Link href="/">
            <a>
              <MediumLogo2 />
            </a>
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/">
              <a
                className={`${css.icon} ${
                  activeTab === "home" ? css.active : null
                }`}
                onClick={() => setActiveTab("home")}
              >
                {activeTab === "home" ? <HomeIconFill /> : <HomeIcon />}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/me/notifications">
              <a
                className={`${css.icon} ${
                  activeTab === "notification" ? css.active : null
                }`}
                onClick={() => setActiveTab("notification")}
              >
                {activeTab === "notification" ? <BellIconFill /> : <BellIcon />}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/me/lists">
              <a
                className={`${css.icon} ${
                  activeTab === "bookmark" ? css.active : null
                }`}
                onClick={() => setActiveTab("bookmark")}
              >
                {activeTab === "bookmark" ? (
                  <BookmarkIconFill />
                ) : (
                  <BookmarkIcon />
                )}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/me/stories/drafts">
              <a
                className={`${css.icon} ${
                  activeTab === "stories" ? css.active : null
                }`}
                onClick={() => setActiveTab("stories")}
              >
                {activeTab === "stories" ? (
                  <StoriesIconFill />
                ) : (
                  <StoriesIcon />
                )}
              </a>
            </Link>
          </li>
          <li>
            <span className={css.hr}> </span>
          </li>
          <li>
            <Link href="/new-story">
              <a className={css.icon}>
                <WriteIcon />
              </a>
            </Link>
          </li>
        </ul>

        <div className={css.profile}>
          <div>
            <button
              onClick={() => dispatch(setShowLaunchpadMenu(!showLaunchpadMenu))}
            >
              <div className={css.avatar}>
                <Image src={profilePhoto} layout="fill" />
              </div>
            </button>
          </div>

          {showLaunchpadMenu ? <LaunchpadMenu /> : ""}
        </div>
      </div>
    </div>
  );
};

const LaunchpadMenu = () => {
  const { username } = useSelector((state) => state.user);


  return (
    <div className={css.info}>
      <div className={css.wrapper}>
        <div className={css.content}>
          <ul>
            <ul>
              <li>
                <Link href="/">
                  <a>
                    <div className={css.text}>
                      <p> Medium Partner Program </p>
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
                      <div className={css.icon}>
                        <StarIcon />
                      </div>
                      <p> Become a member </p>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
            <hr />
            <ul>
              <li>
                <button>
                  <div className={css.text}>
                    <p> Sign out </p>
                  </div>
                </button>
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
                      <p> Manage publications </p>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <div className={css.text}>
                      <p> Stats </p>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/me/settings">
                  <a>
                    <div className={css.text}>
                      <p> Settings </p>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
            <hr />
            <ul>
              <li>
                <div className={css.text}>
                  <p> Aman Ghanghoriya </p>
                  <p> amanghanghoriya2@gmail.com </p>
                </div>
                <Link href={`/${username}`}>
                  <a>
                    <div> View profile </div>
                  </a>
                </Link>
              </li>
            </ul>
          </ul>
        </div>
        <div className={css.arrow}></div>
      </div>
    </div>
  );
};

export default Leftbar;
