import { useState } from "react";
import { useRouter } from "next/router";

import Image from "next/image";

import Layout from "../../../layout/main/Layout";
import Tabbar from "../components/tabbar/Tabbar";
import RecentSearches from "../components/recent/RecentSearches";
import css from "./main.module.css";

import Link from "next/link";
import Searchbar from "../components/searchbar/Searchbar";

import people from "../../../../assets/data/following";
import { DownArrowIcon } from "../../../../assets/icon/medium-icons";

const Main = () => {
  const router = useRouter();
  const { q } = router.query;

  console.log("q===", !q);

  return (
    <Layout>
      <section className={css.section}>
        <div className={css.inner}>
          {/* ===== searchbar  */}
          <div className={css.search}>
            <Searchbar />
          </div>

          <div className={css.topbar}>
            <div className={css.header}>
              {q ? (
                <h1>
                  <span className={css.search_text}> Search </span>
                  <span className={css.result_text}> Results for </span>
                  <span className={css.query_text}> {q} </span> 
                </h1>
              ) : (
                <h1> Recent searches </h1>
              )}
            </div>
            {q ? <Tabbar activeTab={"people"} /> : ""}
          </div>

          {!q ? (
            <RecentSearches />
          ) : (
            <div className={css.people}>
              {people.map((user) => {
                return <User user={user} />;
              })}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

const User = ({ user }) => {
  console.log(user);
  const { avatar, name, bio } = user;

  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={css.user}>
      <div className={css.over}>
        <div className={css.action}>
          <button
            className={css.showMore}
            onClick={() => setIsLoading(!isLoading)}
          >
            {isLoading ? "Loading..." : "Show more"}
            {!isLoading ? (
              <span className={css.icon}>
                <DownArrowIcon />
              </span>
            ) : (
              ""
            )}
          </button>
        </div>
      </div>
      <div className={css.wrapper}>
        <Link href={"/@username"}>
          <a>
            <div className={css.content}>
              <div className={css.avatar}>
                <Image src={avatar} layout="fill" />
              </div>
              <div className={`${css.info} ${css.inline}`}>
                <h2> {name} </h2>
                <div className={css.bio}>
                  <p> {bio} </p>
                </div>
              </div>
              <button
                className={`${css.btn} ${isFollowing ? css.following : css.follow}`}
                onClick={() => setIsFollowing(!isFollowing)}
              >
                {isFollowing ? "Following" : "Follow"}
              </button>
            </div>
            <div className={`${css.info} ${css.block}`}>
              <h2> {name} </h2>
              <div className={css.bio}>
                <p> {bio} </p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Main;
