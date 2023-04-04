import { useState } from "react";
// import css from "../../styles/story.module.css";
import css from "./main.module.css"

import Image from "next/dist/client/image";
import Link from "next/dist/client/link";

import avatar from "../../../assets/image/avatars/avatar-4.jpg"


import {
  FacebookIcon,
  HomeIcon,
  LinkedInIcon,
  LinkIcon,
  PlayOffIcon,
  PlayOnIcon,
  SaveIcon,
  SaveIconFill,
  StoriesIcon,
  ThreeDotIcon,
  TwitterIcon,
  WriteIcon,
} from "../../../assets/icon/medium-icons"

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

  return (
    <div className={css.main}>
      <div className={`${css.section} ${css.story_section}`}>
        <article>
          <header>
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
                      className={`${css.follow} ${isFollowing ? css.true : ""}`}
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
          </header>

          <section>
            <div className={css.title}>
              <div>
                <h1>
                  How to Get Premium Software Subscriptions for Free? Land a job
                  for starters
                </h1>
              </div>
              <div>
                <h2>
                  This article will tell you how to get some premium software
                  for free. This is a must for anyone who wants to save money.
                </h2>
              </div>
            </div>
            <div className={css.content}>
              <p>
                <span>H</span>
                ello, I am talking to you. Are you a student or a teacher? Are
                you a freelancer who is just starting a career? Do you need help
                saving money? Even if you are not anyone among them, reading
                this will get you some premium software for free.
              </p>
              <p>
                {" "}
                Let me tell you some best software in the market that offers a
                student discount. Some of them are exceptionally great. They
                will make your life much easier. This is the most advanced
                article on the web to date. I would suggest adding this article
                to your list. This is because I will update the list with time.
              </p>
              <h2>MICROSOFT OFFICE</h2>
              <p>
                {" "}
                You must be familiar with the Microsoft Office Bundle. It has MS
                Word, MS Excel, MS Powerpoint, MS Teams, MS OneNote and some
                other classroom tools. You need a .edu e-mail id for
                verification.{" "}
              </p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Main;
