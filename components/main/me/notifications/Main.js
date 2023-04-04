import React, { useRef, useState, useEffect } from "react";

import Image from "next/image";

import css from "./main.module.css";
import Link from "next/dist/client/link";

import {
  LeftArrowIcon,
  SaveIcon,
  RemoveIcon,
  ThreeDotIcon,
  RightArrowIcon,
} from "../../../../assets/icon/medium-icons";

import notifications from "../../../../assets/data/notifications";

const tabs = [{ tabname: "All" }, { tabname: "Response" }];

import Layout from "../../../layout/main/Layout";

// DEMO START

function Main() {
  const [dataArr, setDataArr] = useState(notifications);
  const [activeTab, setActiveTab] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    if (activeTab === 0) {
      setDataArr(notifications);
    } else {
      const responses = notifications.filter((item) => item.type === "respond");
      setDataArr(responses);
    }
  }, [activeTab]);

  const scroller = useRef();
  const scroller_items = useRef();

  useEffect(() => {
    toggleArrow();
  }, []);

  const toggleArrow = () => {
    const element = scroller.current;
    const items = scroller_items.current;
    if (element) {
      // toggle left arrow
      if (element.scrollLeft > 2) {
        console.log(element.scrollLeft);
        setShowLeftArrow(true);
      } else {
        setShowLeftArrow(false);
      }
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
                <h1> Notifications </h1>
              </div>
            </div>
            <div className={css.scroller} onScroll={toggleArrow} ref={scroller}>
              <div className={css.scroller_items} ref={scroller_items}>
                {tabs.map(({ tabname }, index) => {
                  return (
                    <div className={css.tab}>
                      <button
                        className={`${css.btn} ${
                          activeTab === index ? css.active : ""
                        }`}
                        onClick={() => setActiveTab(index)}
                      >
                        {tabname}
                      </button>
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
            {dataArr.map((item) => {
              const { id, author, avatar, type, to, date } = item;
              return (
                <div className={css.item} key={id}>
                  <div className={css.avatar}>
                    <Link href="/">
                      <a className={css.link}>
                        <Image src={avatar} layout="fill" />
                      </a>
                    </Link>
                  </div>
                  <Link href="/">
                    <a>
                      <div className={css.info}>
                        <div className={css.reaction}>
                          <span className={css.author}> {author} </span>
                          {type === "clap" ? "clapped for" : "responded to"}
                          <span className={css.to}> {to} </span>
                        </div>
                        <div className={css.date}>{date}</div>
                      </div>
                    </a>
                  </Link>
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

// DEMO END

/*
function Main() {
  const [dataArr, setDataArr] = useState(notifications) ;
  const [activeTab, setActiveTab] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(()=>{
    if(activeTab === 0) {
      setDataArr(notifications) ;
    }
    else {
      const responses = notifications.filter((item) => item.type === 'respond') ;
      setDataArr(responses);
    }
  }, [activeTab])

  const scroller = useRef();
  const scroller_items = useRef();

  useEffect(() => {
    toggleArrow();
  }, []);

  const toggleArrow = () => {
    const element = scroller.current;
    const items = scroller_items.current;
    if (element) {
      // toggle left arrow
      if (element.scrollLeft > 2) {
        console.log(element.scrollLeft);
        setShowLeftArrow(true);
      } else {
        setShowLeftArrow(false);
      }
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
    <div className={css.main}>
      <div className={css.main_inner}>
        <section className={`${css.section}`}>
          <div className={css.inner}>
            <div className={css.tabbar}>
              <div className={css.header}>
                <div className={css.heading}>
                  <h1> Notifications </h1>
                </div>
              </div>
              <div
                className={css.scroller}
                onScroll={toggleArrow}
                ref={scroller}
              >
                <div className={css.scroller_items} ref={scroller_items}>
                  {tabs.map(({ tabname }, index) => {
                    return (
                      <div className={css.tab}>
                        <button
                          className={`${css.btn} ${
                            activeTab === index ? css.active : ""
                          }`}
                          onClick={() => setActiveTab(index)}
                        >
                          {tabname}
                        </button>
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
              {dataArr.map((item) => {
                const {id, author, avatar, type, to, date} = item ;
                return (
                  <div className={css.item} key={id}>
                    <div className={css.avatar}>
                      <Link href='/'>
                        <a className={css.link}>
                          <Image src={avatar} layout='fill' />
                        </a>
                      </Link>
                    </div>
                    <Link href='/'>
                      <a>
                        <div className={css.info}>
                          <div className={css.reaction}> 
                            <span className={css.author}> {author} </span>
                            {type === 'clap' ? 'clapped for' : 'responded to'}
                            <span className={css.to}> {to} </span>
                          </div>
                          <div className={css.date}>
                            {date}
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                )
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
*/

export default Main;
