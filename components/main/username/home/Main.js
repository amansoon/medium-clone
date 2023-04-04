import React, { useRef, useState, useEffect } from "react";

import { useSelector } from "react-redux";

import Image from "next/image";

import css from "./main.module.css";
import Link from "next/dist/client/link";

import { SaveIcon, ThreeDotIcon } from "../../../../assets/icon/medium-icons";

import stories from "../../../../assets/data/forYou_stories";

import Layout from "../../../layout/main/Layout";
import Tabbar from "../components/tabbar/Tabbar";

const tabs = [
  { tabname: "Home", href: `/@username` },
  { tabname: "Lists", href: `/@username/lists` },
  { tabname: "About", href: `/@username/about` },
];

function Main() {
  const { username, name } = useSelector((state) => state.user);

  return (
    <Layout>
      <Tabbar tabs={tabs} currentTab={"Home"} />
      <section className={`${css.section}`}>
        <div className={css.inner}>
          {stories.length > 0 ? (
            <div className={css.stories}>
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
                const username =
                  "@" + author.replaceAll(" ", "-").toLowerCase();

                return (
                  <article className={css.story} key={index}>
                    <div className={css.date}>
                      <Link href={`/${username}/${story_id}`}>
                        <a>{date}</a>
                      </Link>
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
          ) : (
            ""
          )}
        </div>
      </section>
    </Layout>
  );
}

export default Main;
