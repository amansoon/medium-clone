import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import Layout from "../../../layout/main/Layout";
import css from "./main.module.css";

import avatar from "../../../../assets/image/avatars/avatar-1.jpg";
import {
  FacebookIcon,
  LinkedInIcon,
  LinkIcon,
  ThreeDotIcon,
  TwitterIcon,
  SaveIcon,
  PlayOffIcon,
  PlayOnIcon,
  RemoveIcon,
} from "../../../../assets/icon/medium-icons";

const Main = () => {
  const [playAudio, setPlayAudio] = useState(false);
  // duration: 3min, played: 0 second
  const [audio, setAudio] = useState({
    started: false,
    playing: false,
    duration: 3,
    played: 0,
  });

  const [isFollowing, setIsFollowing] = useState(false);

  const [isSaved, setIsSaved] = useState(false);

  const meUser = true;

  return (
    <Layout>
      <section className={`${css.section} ${css.topbar_section}`}>
        <div className={css.inner}>
          <div className={css.topbar}>
            <div className={css.wrapper}>
              <div className={css.first}>
                <div className={css.about}>
                  <div className={css.avatar_wrapper}>
                    <Link href="/story">
                      <a className={css.avatar}>
                        <Image src={avatar} layout="fill" />
                      </a>
                    </Link>
                  </div>
                  <div className={css.content}>
                    <div className={css.author}>
                      <div>
                        <Link href="/">
                          <a className={css.name}> Har Narayan Singh </a>
                        </Link>
                      </div>
                      <button
                        className={`${css.follow} ${
                          isFollowing ? css.true : ""
                        }`}
                        onClick={() => setIsFollowing(!isFollowing)}
                      >
                        {isFollowing ? "Following" : "Follow"}
                      </button>
                    </div>

                    <div className={css.info}>
                      <span> Jul 23 </span>
                      <div className={css.dot}>
                        <span>·</span>
                      </div>
                      <span> 3 min read </span>
                      <div className={css.dot}>
                        <span>·</span>
                      </div>
                      <span
                        className={css.play}
                        onClick={() => setPlayAudio(!playAudio)}
                      >
                        <span className={css.icon}>
                          {playAudio ? <PlayOnIcon /> : <PlayOffIcon />}
                        </span>
                        <span className={css.text}>
                          {audio.started ? audio.duration : `Listen`}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className={css.actions}>
                  <div className={css.btn_list}>
                    <div className={css.btn_div}>
                      <button>
                        <span className={css.icon}>
                          <TwitterIcon />
                        </span>
                      </button>
                    </div>
                    <div className={css.btn_div}>
                      <button>
                        <span className={css.icon}>
                          <FacebookIcon />
                        </span>
                      </button>
                    </div>
                    <div className={css.btn_div}>
                      <button>
                        <span className={css.icon}>
                          <LinkedInIcon />
                        </span>
                      </button>
                    </div>
                    <div className={css.btn_div}>
                      <button>
                        <span className={css.icon}>
                          <LinkIcon />
                        </span>
                      </button>
                    </div>
                    <div className={css.btn_div}>
                      <button>
                        <span className={css.icon}>
                          <SaveIcon />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className={`${css.more_btn}`}>
                    <button>
                      <span className={css.icon}>
                        <ThreeDotIcon />
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className={css.second}>
                <div className={`${css.btn_div} ${css.saveStory}`}>
                  <button onClick={() => setIsSaved(!isSaved)}>
                    <span className={css.icon}>
                      {isSaved ? <SaveIconFill /> : <SaveIcon />}
                    </span>
                    save
                  </button>
                </div>
                <div className={css.btn_div}>
                  <button>
                    <span className={css.icon}>
                      <TwitterIcon />
                    </span>
                  </button>
                </div>
                <div className={css.btn_div}>
                  <button>
                    <span className={css.icon}>
                      <FacebookIcon />
                    </span>
                  </button>
                </div>
                <div className={css.btn_div}>
                  <button>
                    <span className={css.icon}>
                      <LinkedInIcon />
                    </span>
                  </button>
                </div>
                <div className={css.btn_div}>
                  <button>
                    <span className={css.icon}>
                      <LinkIcon />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${css.section} ${css.stories_section}`}>
        <div className={css.inner}></div>
      </section>
    </Layout>
  );
};

export default Main;
