import { useState } from "react";
import { useRouter } from "next/router";

import Layout from "../../../layout/main/Layout";
import Tabbar from "../components/tabbar/Tabbar";
import RecentSearches from "../components/recent/RecentSearches";
import css from "./main.module.css";

import Link from "next/link";
import Searchbar from "../components/searchbar/Searchbar";
import { DownArrowIcon } from "../../../../assets/icon/medium-icons";

const topics = [
  { id: 1, text: "Mind", href: "" },
  { id: 2, text: "Mindfulness", href: "" },
  { id: 3, text: "Mindful Living", href: "" },
  { id: 4, text: "Mind Control", href: "" },
  { id: 5, text: "Mind Body", href: "" },
  { id: 6, text: "Mind Cafe", href: "" },
  { id: 7, text: "Mindset matters", href: "" },
  { id: 8, text: "Mindset Games", href: "" },
  { id: 9, text: "Mind Power", href: "" },
  { id: 10, text: "Mind Map", href: "" },
  { id: 11, text: "Mind Control", href: "" },
  { id: 12, text: "Mind Body", href: "" },
  { id: 13, text: "Mind Cafe", href: "" },
  { id: 14, text: "Mindset matters", href: "" },
  { id: 15, text: "Mindset Games", href: "" },
  { id: 16, text: "Mind Power", href: "" },
  { id: 17, text: "Mind Map", href: "" },
  { id: 18, text: "Mind Cafe", href: "" },
  { id: 19, text: "Mindset matters", href: "" },
  { id: 20, text: "Mindset Games", href: "" },
  { id: 21, text: "Mind Power", href: "" },
  { id: 22, text: "Mind Map", href: "" },
  { id: 23, text: "Mind Control", href: "" },
  { id: 24, text: "Mind Body", href: "" },
  { id: 25, text: "Mind Cafe", href: "" },
];

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
            {q ? <Tabbar activeTab={"topics"} /> : ""}
          </div>

          {!q ? <RecentSearches /> : <Topics />}

        </div>
      </section>
    </Layout>
  );
};


const Topics = () => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className={css.topics}>
      {topics.map((topic) => {
        return <Topic topic={topic} />;
      })}
      <div className={css.over}>
        <div className={css.action}>
          <button
            className={css.showMore}
            onClick={() => setIsLoading(!isLoading)}
          >
            {isLoading ? "Loading..." : "Show more"}
            {!isLoading ? (
              <span className={css.icon}>
                <DownArrowIcon/>
              </span>
            ) : (
              ""
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const Topic = ({ topic }) => {
  const { id, text, href } = topic;
  return (
    <div className={css.topic} key={id}>
      <Link href={href}>
        <a>
          <span> {text} </span>
        </a>
      </Link>
    </div>
  );
};

export default Main;
