import React, { useRef, useState, useEffect } from "react";

import Image from "next/image";

import {
  AddIcon,
  RightArrowIcon,
  LeftArrowIcon,
  SaveIcon,
  RemoveIcon,
  ThreeDotIcon,
} from "../../../../assets/icon/medium-icons";

import css from "./main.module.css";
import Link from "next/dist/client/link";

import stories from "../../../../assets/data/forYou_stories";

const tabs = [
  { tabname: "For you" },
  { tabname: "Following" },
  { tabname: "Freelancing" },
  { tabname: "Mental Health" },
  { tabname: "Blockchain" },
  { tabname: "Mindfulness" },
  { tabname: "Technology" },
  { tabname: "Programming" },
  { tabname: "Design" },
  { tabname: "Psychology" },
];

import Layout from "../../../layout/main/Layout";


function Main() {
  const [activeTab, setActiveTab] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroller = useRef();
  const scroller_items = useRef();

  console.log(showLeftArrow);

  const toggleArrow = () => {
    const element = scroller.current;
    const items = scroller_items.current;
    if (element) {
      // toggle left arrow
      if (element.scrollLeft > 2) {
        setShowLeftArrow(true);
      } else {
        setShowLeftArrow(false);
      }

      console.log("difference", items.clientWidth - element.scrollLeft);
      console.log("element", element.clientWidth);
      // toggle right arrow
      if (items.clientWidth - element.scrollLeft <= element.clientWidth) {
        setShowRightArrow(false);
      } else {
        setShowRightArrow(true);
      }
    }
  };

  useEffect(() => {
    console.log(showLeftArrow);
  }, [showLeftArrow]);

  const scrollLeft = () => {
    const element = scroller.current;
    if (element) {
      element.scrollLeft = element.scrollLeft - 100;
    }
  };

  const scrollRight = () => {
    const element = scroller.current;
    if (element) {
      element.scrollLeft = element.scrollLeft + 100;
    }
  };

  return (
    <Layout>
      <section className={css.section}>
        <div className={css.inner}> </div>
      </section>

      <section className={`${css.section} ${css.tab_section}`}>
        <div className={css.inner}>
          <div className={css.wrapper} onScroll={toggleArrow} ref={scroller}>
            <div className={css.scroller_items} ref={scroller_items}>
              <div className={css.add_icon}>
                <span>
                  <AddIcon />
                </span>
              </div>
              {tabs.map(({ tabname }, index) => {
                return (
                  <div
                    className={`${css.tab} ${
                      activeTab === index ? css.active : ""
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    <Link href="">{tabname}</Link>
                  </div>
                );
              })}
            </div>
            {showLeftArrow ? (
              <div className={`${css.arrow} ${css.left}`}>
                <button className={css.btn} onClick={scrollLeft}>
                  <LeftArrowIcon />
                </button>
              </div>
            ) : (
              ""
            )}
            {showRightArrow ? (
              <div className={`${css.arrow} ${css.right}`}>
                <button className={css.btn} onClick={scrollRight}>
                  <RightArrowIcon />
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>

      <section className={`${css.section} ${css.stories_section}`}>
        <div className={css.inner}>
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
                        <div className={css.info}>
                          <Link href={`/${username}/${story_id}`}>
                            <a>
                              <span> {info} </span>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className={css.right}>
                        <div className={css.save}>
                          <button className={css.btn}>
                            <SaveIcon />
                          </button>
                        </div>
                        <div className={css.ignore}>
                          <button className={css.btn}>
                            <RemoveIcon />
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
}

export default Main;
