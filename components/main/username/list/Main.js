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
  RemoveIcon,
} from "../../../../assets/icon/medium-icons";

import stories from "../../../../assets/data/forYou_stories";

const Main = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const meUser = false;

  return (
    <Layout>
      <section className={`${css.section} ${css.header_section}`}>
        <div className={css.inner}>
          <div className={css.topbar}>
            <div className={css.info}>
              <div className={css.avatar}>
                <Link href={"/@username"}>
                  <a>
                    <Image src={avatar} layout="fill" />
                  </a>
                </Link>
              </div>
              <div className={css.about}>
                <div className={css.author}>
                  <Link href={"/@username"}>
                    <a className={css.name}>
                      <span> {"Aman Ghanghoriya"} </span>
                    </a>
                  </Link>
                  {!meUser ? (
                    <button
                      className={`${css.btn} ${
                        isFollowing ? css.outline : css.bg
                      }`}
                      onClick={() => setIsFollowing(!isFollowing)}
                    >
                      {isFollowing ? "Following" : "Follow"}
                    </button>
                  ) : (
                    ""
                  )}
                </div>
                <div className={css.list}>
                  <p> {"Mar 23"} </p>
                  <div className={css.dot}>
                    <span> · </span>
                  </div>
                  <p> {"9"} stories </p>
                </div>
              </div>
            </div>
            <div className={css.actions}>
              {!meUser ? (
                <ul>
                  <li>
                    <button className={css.btn}>
                      <span className={css.icon}>
                        <TwitterIcon />{" "}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className={css.btn}>
                      <span className={css.icon}>
                        <FacebookIcon />{" "}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className={css.btn}>
                      <span className={css.icon}>
                        <LinkedInIcon />{" "}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className={css.btn}>
                      <span className={css.icon}>
                        <LinkIcon />{" "}
                      </span>
                    </button>
                  </li>
                </ul>
              ) : (
                ""
              )}
              <div className={css.menu}>
                <button className={css.btn}>
                  <span className={css.icon}>
                    {" "}
                    <ThreeDotIcon />{" "}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${css.section} ${css.stories_section}`}>
        <div className={css.inner}>
          <header className={css.header}>
            <div className={css.title}>
              <h2> Think Differently </h2>
            </div>
            {!meUser ? (
              <div className={css.actions}>
                <ul>
                  <li>
                    <button className={css.btn}>
                      <span className={css.icon}>
                        <TwitterIcon />{" "}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className={css.btn}>
                      <span className={css.icon}>
                        <FacebookIcon />{" "}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className={css.btn}>
                      <span className={css.icon}>
                        <LinkedInIcon />{" "}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className={css.btn}>
                      <span className={css.icon}>
                        <LinkIcon />{" "}
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
            <div className={css.hr}> </div>
          </header>

          {/* stories */}
          {stories.map((story, index) => {
            const {
              avatar,
              author,
              date,
              title,
              text,
              thumbnail,
              duration,
              topic,
              info,
            } = story;

            const story_id = title.replaceAll(" ", "-");
            const username = "@" + author.replaceAll(" ", "-").toLowerCase();

            return (
              <article className={css.story} key={index}>
                <div className={css.header}>
                  <div className={css.avatar}>
                    <Link href={`/${username}`}>
                      <a>
                        <Image src={avatar} layout="fill" alt="author" />
                      </a>
                    </Link>
                  </div>
                  <div className={css.author}>
                    <div>
                      <Link href={`/${username}`}>
                        <a>{author}</a>
                      </Link>
                    </div>
                    <div className={css.dot}> · </div>
                    <div className={css.date}>
                      <Link href={`/${username}/${story_id}`}>
                        <a>{date}</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={css.body}>
                  <div className={css.left}>
                    <Link href={`/${username}/${story_id}`}>
                      <a>
                        <div>
                          <div className={css.title}>
                            <h2>{title}</h2>
                          </div>
                          <div className={css.text}>
                            <p>{text}</p>
                          </div>
                        </div>
                      </a>
                    </Link>

                    <div className={css.footer}>
                      <div className={css.left}>
                        <div className={css.tag}>
                          <Link href={"/gere"}>
                            <a>
                              <span> {topic} </span>
                            </a>
                          </Link>
                        </div>
                        <div className={css.duration}>
                          <Link href={`/${username}/${story_id}`}>
                            <a>
                              <span> {duration} read </span>
                            </a>
                          </Link>
                        </div>
                        <div className={css.dot}> · </div>
                      </div>
                      <div className={css.right}>
                        <div className={css.save}>
                          <button className={css.btn}>
                            <SaveIcon />
                          </button>
                        </div>
                        <div className={css.menu}>
                          <button className={css.btn}>
                            <ThreeDotIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={css.right}>
                    <Link href={`/${username}/${story_id}`}>
                      <a>
                        <div className={css.thumbnail}>
                          <Image
                            src={thumbnail}
                            layout="fill"
                            alt="thumbnail"
                          />
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Main;
