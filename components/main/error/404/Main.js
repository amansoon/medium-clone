import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";

import Image from "next/image";

import css from "./main.module.css";
import Link from "next/dist/client/link";

import { useSelector } from "react-redux";

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



function Main() {
  const tabs = [
    { tabname: "Home", href: `/${username}` },
    { tabname: "Lists", href: `/${username}/lists` },
    { tabname: "About", href: `/${username}/about` },
  ];

  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  const {username, name} = useSelector((state) => state.user)

  useEffect(()=>{
    const user = router.query.user ;
    if(user) {
      const [username, tab] = user ;
    }
  })




  useEffect(() => {
    router.push("", undefined, { shallow: true });
  }, []);

  const handleTabClick = (index, url) => {
    setActiveTab(index);
    router.push(url, { shallow: true });
  };

  return (
    <div className={css.main}>
      <div className={css.main_inner}>
        <section className={`${css.section}`}>
          <div className={css.inner}>
            <div className={css.tabbar}>
              <div className={css.header}>
                <div className={css.heading}>
                  <h1> {name} </h1>
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
                    const {tabname, href} = tab;
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
                      <div
                        className={css.tab} key={index}>
                        <Link href={href}>
                          <a className={css.link}>
                            {tabname}
                          </a>
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
                return (
                  <Link href="/">
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
      </div>
    </div>
  );
}

export default Main;
