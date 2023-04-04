import React, { useRef, useState, useEffect } from "react";

import Link from "next/dist/client/link";
import Image from "next/image";
import css from "./main.module.css";


import Layout from "../../../layout/main/Layout";
import Tabbar from "../components/tabbar/Tabbar";

import { useSelector, useDispatch } from "react-redux";
import {
  setIsFollowersDialog,
  setIsFollowingDialog
} from "../../../../features/app/appSlice";

import FollowersDialog from "../../../dialogs/followers/Dialog";
import FollowingDialog from "../../../dialogs/following/Dialog";

const tabs = [
  { tabname: "Home", href: `/@username` },
  { tabname: "Lists", href: `/@username/lists` },
  { tabname: "About", href: `/@username/about` },
];


function Main() {
  const dispatch = useDispatch();

  return (
    <Layout>
      <Tabbar tabs={tabs} currentTab={"About"} />

      <section className={`${css.section}`}>
        <div className={css.inner}>
          <div className={css.body}>
            <div className={css.wrapper}>
              <h2> Tell the world about yourself </h2>
              <div className={css.text}>
                <p>
                  Here’s where you can share more about yourself: your history,
                  work experience, accomplishments, interests, dreams, and more.
                  You can even add images and use rich text to personalize your
                  bio.
                </p>
              </div>
              <button>Get started</button>
            </div>
          </div>

          <div className={css.footer}>
            <button onClick={() => dispatch(setIsFollowersDialog(true))}>
              {"482"} Followers
            </button>
            <div className={css.dot}>
              <span> · </span>
            </div>
            <button onClick={() => dispatch(setIsFollowingDialog(true))}>
              {"7"} Following
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Main;
