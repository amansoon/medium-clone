import React, { useRef, useState, useEffect } from "react";

import { useSelector } from "react-redux";

import Image from "next/image";

import css from "./main.module.css";
import Link from "next/dist/client/link";

import {
  AddIcon,
  RightArrowIcon,
  LeftArrowIcon,
  SaveIcon,
  RemoveIcon,
  ThreeDotIcon,
  LockIcon,
} from "../../../../assets/icon/medium-icons";

import lists from "../../../../assets/data/lists";
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
      <Tabbar tabs={tabs} currentTab={"Lists"} />
      <section className={`${css.section}`}>
        <div className={css.inner}>
          {lists.length > 0 ? (
            <div className={css.lists}>
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
          ) : (
            ""
          )}
        </div>
      </section>
    </Layout>
  );
}

export default Main;
