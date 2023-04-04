import { useState } from "react";

import Layout from "../../layout/rightbar/Layout";
import css from "./rightbar.module.css";

import Link from "next/link";
import Image from "next/image";

import stories from "../../../assets/data/forYou_stories";

import avatar1 from "../../../assets/image/avatars/avatar-1.jpg";
import avatar2 from "../../../assets/image/avatars/avatar-2.jpg";
import avatar3 from "../../../assets/image/avatars/avatar-3.jpg";
import avatar4 from "../../../assets/image/avatars/avatar-4.jpg";
import avatar5 from "../../../assets/image/avatars/avatar-5.jpg";
import avatar6 from "../../../assets/image/avatars/avatar-6.jpg";
import avatar7 from "../../../assets/image/avatars/avatar-7.jpg";
import avatar8 from "../../../assets/image/avatars/avatar-8.jpg";
import avatar9 from "../../../assets/image/avatars/avatar-9.jpg";
import avatar10 from "../../../assets/image/avatars/avatar-10.jpg";
import avatar11 from "../../../assets/image/avatars/avatar-11.jpg";
import avatar12 from "../../../assets/image/avatars/avatar-12.jpg";

const avatars = [
  avatar1,
  avatar4,
  avatar5,
  avatar8,
  avatar3,
  avatar6,
  avatar9,
  avatar10,
  avatar12,
  avatar2,
  avatar7,
  avatar11,
];

const relatedTopics = [
  { id: 1, tag: "Love", href: "/tag/love" },
  { id: 1, tag: "Love Story", href: "/tag/love-story" },
  { id: 1, tag: "Love Psychology", href: "/tag/love-psychology" },
  { id: 1, tag: "Love Letter", href: "/tag/love-letter" },
  { id: 1, tag: "Love Relationships", href: "/tag/love-relationships" },
  { id: 1, tag: "Love Kiss", href: "/tag/love-kiss" },
  { id: 1, tag: "Love Romance", href: "/tag/love-romance" },
  { id: 1, tag: "Self Love", href: "/tag/self-love" },
  { id: 1, tag: "Love Yourself", href: "/tag/love-yourself" },
  { id: 1, tag: "Love Me", href: "/tag/love-me" },
];

const Rightbar = () => {
  return (
    <Layout>
      <Stats />
      <RelatedTopics />
    </Layout>
  );
};

// STATS

const Stats = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.stats}>
        <div className={css.info}>
          <div className={css.data}>
            <h2> 299K </h2>
            <div className={css.text}> Stories </div>
          </div>
          <div className={css.data}>
            <h2> 89K </h2>
            <div className={css.text}> Writers </div>
          </div>
        </div>
        <div className={css.avatars}>
          <div className={css.grid}>
            {avatars.map((avatar, index) => {
              return (
                <div
                  className={css.avatar}
                  style={{ zIndex: avatars.length - index }}
                >
                  <Image src={avatar} layout="fill" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// =========== RELATED TOPICS ==========

const RelatedTopics = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.title}>
        <h2> Related topics </h2>
      </div>

      <div className={css.topics}>
        {relatedTopics.map((topic) => {
          const { id, tag, href } = topic;
          return (
            <div className={css.topic} key={id}>
              <Link href={href}>
                <a>
                  <span> {tag} </span>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rightbar;
