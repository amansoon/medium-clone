import { useState } from "react";
import { useRouter } from "next/router";

import Layout from "../../layout/rightbar/Layout";
import css from "./rightbar.module.css";

import Link from "next/link";
import Image from "next/image";

import stories from "../../../assets/data/forYou_stories";
import users from "../../../assets/data/followers";

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
      <StoriesMatches />
      <TopicsMatches />
      <PeopleMatches />
    </Layout>
  );
};

// ========== Stories matches =========

const StoriesMatches = () => {
  const router = useRouter();
  const { q } = router.query;

  return (
    <div className={`${css.wrapper} ${css.storiesWrapper}`}>
      <div className={css.title}>
        <h2> Posts matching love </h2>
      </div>
      <div className={css.stories}>
        {stories.map((story, index) => {
          const { name, avatar, author, title, duration } = story;
          if (index < 3) {
            return (
              <div className={css.story}>
                <div className={css.author}>
                  <div className={css.avatar}>
                    <Link href={""}>
                      <a>
                        <Image src={avatar} layout="fill" />
                      </a>
                    </Link>
                  </div>
                  <div className={css.name}>
                    <Link href={""}>
                      <a>
                        <h4> {author} </h4>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className={css.heading}>
                  <h3> {title} </h3>
                </div>
                <div className={css.info}>
                  <span> Aug 1, 2017 </span>
                  <div className={css.dot}>
                    <span> · </span>
                  </div>
                  <span> {duration} </span>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className={css.footer}>
        <Link href={"/search/posts?q=" + q}>
          <a>
            <span> See all </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

// ========== TOPICS Matches ==========

const TopicsMatches = () => {
  const router = useRouter();
  const { q } = router.query;

  return (
    <div className={css.wrapper}>
      <div className={css.title}>
        <h2> Topics matching love </h2>
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
      <div className={css.footer}>
        <Link href={"/search/tags?q=" + q}>
          <a>
            <span> See all </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

// ========== PEOPLE MATCHES ==========

const PeopleMatches = () => {
  const router = useRouter();
  const { q } = router.query;

  return (
    <div className={`${css.wrapper} ${css.people}`}>
      <div className={css.title}>
        <h2> People matching love </h2>
      </div>
      <div className={css.users}>
        {users.map((user, index) => {
          if (index < 3) {
            return <User user={user} />;
          }
        })}
      </div>
      <div className={css.footer}>
        <Link href={"/search/users?q=" + q}>
          <a>
            <span> See all </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

const User = ({ user }) => {
  const { name, avatar, bio } = user;
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className={css.user}>
      <div className={css.content}>
        <div className={css.avatar}>
          <Link href={""}>
            <a>
              <Image src={avatar} layout="fill" />
            </a>
          </Link>
        </div>
        <div className={css.info}>
          <Link href={""}>
            <a>
              <h3> {name} </h3>
              {bio ? (
                <div className={css.bio}>
                  <p> {bio} </p>
                </div>
              ) : (
                ""
              )}
            </a>
          </Link>
        </div>
      </div>
      <button
        className={`${css.btn} ${isFollowing ? css.following : css.follow}`}
        onClick={() => setIsFollowing(!isFollowing)}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default Rightbar;
