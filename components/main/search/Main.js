import { useState } from "react";
import { useRouter } from "next/router";

import Layout from "../../layout/main/Layout";
import Tabbar from "./components/tabbar/Tabbar";
import RecentSearches from "./components/recent/RecentSearches";
import css from "./main.module.css";

import Link from "next/link";
import Image from "next/image";
import Searchbar from "./components/searchbar/Searchbar";

import stories from "../../../assets/data/forYou_stories";

import { SaveIcon, ThreeDotIcon, DownArrowIcon, SaveIconFill } from "../../../assets/icon/medium-icons";

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
            {q ? <Tabbar activeTab={"stories"} /> : ""}
          </div>

          {!q ? <RecentSearches /> : <Stories />}
        </div>
      </section>
    </Layout>
  );
};

const Stories = () => {
  if (stories.length > 0) {
    return (
      <div className={css.stories}>
        {stories.map((story, index) => {
          return <Story story={story} key={index} />
        })}
      </div>
    );
  }
};


const Story = ({story}) => {
  const [isLoading, setIsLoading] = useState(false) ;
  const [isSaved, setIsSaved] = useState(false);

  const {
    avatar,
    author,
    date,
    title,
    text,
    thumbnail,
    duration,
    topic,
    info,
  } = story;

  const story_id = title.replaceAll(" ", "-");
  const username = "@" + author.replaceAll(" ", "-").toLowerCase();


  return (
    <div className={css.story}>
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
      <article className={css.content}>
        <div className={css.header}>
          <div className={css.avatar}>
            <Link href={`/${username}`}>
              <a>
                <Image src={avatar} layout="fill" alt="author" />
              </a>
            </Link>
          </div>
          <div className={css.author}>
            <div>
              <Link href={`/${username}`}>
                <a>{author}</a>
              </Link>
            </div>
            <div className={css.dot}> · </div>
            <div className={css.date}>
              <Link href={`/${username}/${story_id}`}>
                <a>{date}</a>
              </Link>
            </div>
          </div>
        </div>
        <div className={css.body}>
          <div className={css.left}>
            <Link href={`/${username}/${story_id}`}>
              <a>
                <div>
                  <div className={css.title}>
                    <h2>{title}</h2>
                  </div>
                  <div className={css.text}>
                    <p>{text}</p>
                  </div>
                </div>
              </a>
            </Link>
            <div className={css.footer}>
              <div className={css.left}>
                <div className={css.tag}>
                  <Link href={"/gere"}>
                    <a>
                      <span> {topic} </span>
                    </a>
                  </Link>
                </div>
                <div className={css.duration}>
                  <Link href={`/${username}/${story_id}`}>
                    <a>
                      <span> {duration} read </span>
                    </a>
                  </Link>
                </div>
                <div className={css.dot}> · </div>
              </div>
              <div className={css.right}>
                <div className={css.save}>
                  <button className={css.btn} onClick={() => setIsSaved(!isSaved)}>
                    {isSaved ? <SaveIconFill /> : <SaveIcon />} 
                  </button>
                </div>
                <div className={css.menu}>
                  <button className={css.btn}>
                    <ThreeDotIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={css.right}>
            <Link href={`/${username}/${story_id}`}>
              <a>
                <div className={css.thumbnail}>
                  <Image src={thumbnail} layout="fill" alt="thumbnail" />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}


export default Main;
