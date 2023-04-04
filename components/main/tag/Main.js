import { useState } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import Image from "next/image";

import Layout from "../../layout/main/Layout";
import Tabbar from "./components/tabbar/Tabbar"
import css from "./main.module.css";

import {TagIcon, DownArrowIcon, SaveIcon, SaveIconFill, ThreeDotIcon} from "../../../assets/icon/medium-icons";

import avatar1 from "../../../assets/image/avatars/avatar-1.jpg";
import avatar2 from "../../../assets/image/avatars/avatar-2.jpg";
import avatar3 from "../../../assets/image/avatars/avatar-4.jpg";

import stories from "../../../assets/data/forYou_stories";




const Main = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const router = useRouter() ;

  let {topic} = router.query ;

  if(topic) {
    topic = topic.replaceAll('-', ' ');
  }

  return (
    <Layout>
      <section className={css.section}>
        <div className={css.inner}>

          {/* ----- topbar ----- */}
          <div className={css.topbar}>
            <div className={css.header}>
              <div className={css.heading}>
                <div className={css.tag}>
                  <span className={css.icon}> 
                    <TagIcon />
                  </span>
                </div>
                <div className={css.topic}>
                  <h1> {topic} </h1>
                </div>
              </div>
              <div className={css.info}>
                <div className={css.avatars}>
                  <div className={css.avatar}>
                    <Image src={avatar1} layout='fill' />
                  </div>
                  <div className={css.avatar}>
                    <Image src={avatar2} layout='fill' />
                  </div>
                  <div className={css.avatar}>
                    <Image src={avatar3} layout='fill' />
                  </div>
                </div>
                <div className={css.stats}>
                  <div className={css.data}>
                    <span> 229K </span>
                    <span> Stories </span>
                  </div>
                  <div className={css.data}>
                    <span> 89K </span>
                    <span> Writers </span>
                  </div>
                </div>
              </div>
              <div className={css.actions}>
                <div className={css.wrapper}> 
                  <button className={`${css.btn} ${isFollowing ? css.outline : ''}`} onClick={() => setIsFollowing(!isFollowing)} >
                    {isFollowing ? 'Following' : 'Follow'} 
                  </button>
                </div>
                <div className={css.wrapper}> 
                  <Link href={'/new-story'}>
                    <a>
                      <button className={`${css.btn} ${css.outline}`}> Start writing </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={css.tabbar}>
              <Tabbar activeTab={'Trending'} />
            </div>
          </div>

          {/* ----- stories ----- */}
          <Stories />

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
