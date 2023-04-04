import React from "react";

import css from "./main.module.css";
import Link from "next/dist/client/link";

import { DownArrowIcon } from "../../../../../assets/icon/medium-icons";

const tabs = [
  { tabname: "saved", href: "/me/lists" },
  { tabname: "highlights", href: "/me/list/highlights" },
];

import highlights from "../../../../../assets/data/highlights";

import Layout from "../../../../layout/main/Layout";

function Main() {
  return (
    <Layout>
      <section className={`${css.section}`}>
        <div className={css.inner}>
          <div className={css.tabbar}>
            <div className={css.header}>
              <div className={css.heading}>
                <h1> Your lists </h1>
              </div>
            </div>
            <div className={css.scroller}>
              <div className={css.scroller_items}>
                {tabs.map((tab, index) => {
                  const { tabname, href } = tab;
                  console.log(tabname, "highlights");
                  if (tabname === "highlights") {
                    return (
                      <div className={`${css.tab} ${css.active}`} key={index}>
                        <Link href={href}>
                          <a className={`${css.link} ${css.active}`}>
                            {tabname}
                          </a>
                        </Link>
                      </div>
                    );
                  }
                  return (
                    <div className={css.tab} key={index}>
                      <Link href={href}>
                        <a className={css.link}>{tabname}</a>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={css.tabpanel}>
            {highlights.map((item) => {
              const { id, author, title, marked_text, rest_text, text } = item;
              return (
                <div className={css.card}>
                  <div className={css.body}>
                    <span className={css.about}>
                      {" From "}
                      <Link href="/">
                        8 Lessons I Learned During My First Month at FAANG (as
                        an inexperienced new grad)
                      </Link>
                      {" by "}
                      <Link href="/">Rupesh Kumar Tiwari</Link>
                    </span>
                    <Link href="">
                      <a className={css.text}>
                        <p>
                          <mark> {marked_text} </mark> {rest_text}
                        </p>
                      </a>
                    </Link>
                  </div>
                  <div className={css.footer}>
                    <div className={css.icon}>
                      <button>
                        <DownArrowIcon />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
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
