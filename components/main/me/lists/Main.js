import React from "react";

import { useSelector } from "react-redux";

import Image from "next/image";

import css from "./main.module.css";
import Link from "next/dist/client/link";

import {
  LockIcon,
} from "../../../../assets/icon/medium-icons";

const tabs = [
  { tabname: "saved", href: "/me/lists" },
  { tabname: "highlights", href: "/me/list/highlights" },
];


import lists from "../../../../assets/data/lists";

import Layout from "../../../layout/main/Layout"


function Main() {
  const {username} = useSelector((state) => state.user);

  return (
    <Layout>
      <section className={`${css.section}`}>
        <div className={css.inner}>
          <div className={css.tabbar}>
            <div className={css.header}>
              <div className={css.heading}>
                <h1> Your lists </h1>
              </div>
              <div className={css.links}>
                <Link href="/">
                  <a href="" className={css.newList}>
                    New list
                  </a>
                </Link>
              </div>
            </div>
            <div className={css.scroller}>
              <div className={css.scroller_items}>
                {tabs.map((tab, index) => {
                  const { tabname, href } = tab;
                  if (tabname === "saved") {
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
            {lists.map((list) => {
              const { total, listname, thumbnails } = list;
              const list_id = listname.replaceAll(" ", "-");
              return (
                <Link href={`/${username}/list/${list_id}`}>
                  <a>
                    <div className={css.list}>
                      <div className={css.about}>
                        <h2> {listname} </h2>
                        <div className={css.bottom}>
                          <div className={css.view}>
                            <Link href="/">
                              <a>View list</a>
                            </Link>
                          </div>
                          <div className={css.total_stories}>
                            <p> {total} stories </p>
                            <div className={css.icon}>
                              <span>
                                <LockIcon />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={css.thumbnails}>
                        {[0, 1, 2].map((index) => {
                          const thumbnail = thumbnails[index];
                          if (thumbnail) {
                            return (
                              <div className={css.thumbnail}>
                                <Image src={thumbnail} layout="fill" />
                              </div>
                            );
                          } else {
                            return (
                              <div className={`${css.thumbnail} ${css.bg}`}>
                                <div className={css.ellipse}></div>
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </a>
                </Link>
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
