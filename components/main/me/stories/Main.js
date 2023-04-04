import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";

import css from "./main.module.css";
import Link from "next/dist/client/link";

import {
  RightArrowIcon,
  LeftArrowIcon,
  ThreeDotIcon,
  DownArrowIcon,
  ShareIcon,
} from "../../../../assets/icon/medium-icons";

const tabs = [
  { tabname: "drafts", href: "/me/stories/drafts", total: 2 },
  { tabname: "published", href: "/me/stories/public", total: 1 },
  { tabname: "responses", href: "/me/stories/responses", total: 4 },
];

import drafts from "../../../../assets/data/stories/drafts";
import publisehd from "../../../../assets/data/stories/published";
import responses from "../../../../assets/data/stories/responses";

import Layout from "../../../layout/main/Layout";

function Main() {
  const [slug, setSlug] = useState();
  const [activeTab, setActiveTab] = useState("drafts");
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroller = useRef();
  const scroller_items = useRef();

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { tab } = router.query;
      if (tab) {
        setSlug(tab);
      }
    }
  }, [router]);

  useEffect(() => {
    if (slug === "public") {
      setActiveTab("published");
    }
    if (slug === "drafts") {
      setActiveTab("drafts");
    }
    if (slug === "responses") {
      setActiveTab("responses");
    }
  }, [slug]);

  useEffect(() => {
    toggleArrow();
  }, []);

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
      <section className={`${css.section}`}>
        <div className={css.inner}>
          <div className={css.tabbar}>
            <div className={css.header}>
              <div className={css.heading}>
                <h1> Your stories </h1>
              </div>
              <div className={css.links}>
                <Link href="/">
                  <a href="" className={css.write}>
                    Write a story
                  </a>
                </Link>
                <Link href="/">
                  <a href="" className={css.import}>
                    Import a story
                  </a>
                </Link>
              </div>
            </div>
            <div className={css.scroller} onScroll={toggleArrow} ref={scroller}>
              <div className={css.scroller_items} ref={scroller_items}>
                {tabs.map((tab, index) => {
                  const { tabname, href, total } = tab;
                  return (
                    <div
                      className={`${css.tab} ${
                        tabname === activeTab ? css.active : ""
                      }`}
                      key={index}
                    >
                      <Link href={href}>
                        <a
                          className={`${css.link} ${
                            tabname === activeTab ? css.active : ""
                          }`}
                        >
                          {tabname} {total}
                        </a>
                      </Link>
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

          <div className={css.tabpanel}>
            {slug === "drafts"
              ? drafts.map((draft) => {
                  const { id, title, text, date, read, words } = draft;
                  return (
                    <div className={css.story} key={id}>
                      <div className={css.body}>
                        <h3 className={css.title}>
                          <Link href="">{title}</Link>
                        </h3>
                        <div className={css.text}>
                          <h3>
                            <Link href="">{text}</Link>
                          </h3>
                        </div>
                      </div>
                      <div className={css.about}>
                        <div className={css.info}>
                          <div className={css.last_edit}>
                            <span> {date} </span>
                          </div>
                          <div className={css.dot}>
                            <span> · </span>
                          </div>
                          <div>
                            <span> {read} </span>
                            <span> ({words} words) so far </span>
                          </div>
                        </div>
                        <div className={`${css.icon} ${css.down}`}>
                          <button>
                            <span>
                              <DownArrowIcon />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              : ""}

            {slug === "public"
              ? publisehd.map((story) => {
                  const { id, title, text, date, read } = story;
                  return (
                    <div className={css.story} key={id}>
                      <div className={css.body}>
                        <h3 className={css.title}>
                          <Link href="">{title}</Link>
                        </h3>
                        <div className={css.text}>
                          <h3>
                            <Link href="">{text}</Link>
                          </h3>
                        </div>
                      </div>
                      <div className={css.about}>
                        <div className={css.info}>
                          <div className={css.last_edit}>
                            <span> {date} </span>
                          </div>
                          <div className={css.dot}>
                            <span> · </span>
                          </div>
                          <div>
                            <span> {read} </span>
                            {/* <span> ({words} words) so far </span> */}
                          </div>
                        </div>
                        <div className={`${css.icon} ${css.share}`}>
                          <button>
                            <span>
                              <ShareIcon />
                            </span>
                          </button>
                        </div>
                        <div className={`${css.icon} ${css.menu}`}>
                          <button>
                            <span>
                              <ThreeDotIcon />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              : ""}

            {slug === "responses"
              ? responses.map((responses) => {
                  const { id, text, date, read } = responses;
                  return (
                    <div className={css.story} key={id}>
                      <div className={css.body}>
                        <h3 className={css.title}>
                          <Link href="">{text}</Link>
                        </h3>
                      </div>
                      <div className={css.about}>
                        <div className={css.info}>
                          <div className={css.last_edit}>
                            <span> {date} </span>
                          </div>
                          <div className={css.dot}>
                            <span> · </span>
                          </div>
                          <div>
                            <span> {read} </span>
                            {/* <span> ({words} words) so far </span> */}
                          </div>
                        </div>
                        <div className={`${css.icon} ${css.share}`}>
                          <button>
                            <span>
                              <ShareIcon />
                            </span>
                          </button>
                        </div>
                        <div className={`${css.icon} ${css.menu}`}>
                          <button>
                            <span>
                              <ThreeDotIcon />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>

          <div className={css.footer}>
            <div className={css.msg}>
              <p> You're all caught up </p>
            </div>
            <div className={css.stats}>
              <Link href="./stats">
                <a>
                  <p> Your stats </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Main;
