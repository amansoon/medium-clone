
import css from "./rightbar.module.css";
import Link from "next/dist/client/link";
import Image from "next/dist/client/image";

import more_stories from "../../../assets/data/more_stories";

import Layout from "../../layout/rightbar/Layout";



const StoryRightbar = () => {
  return (
    <Layout>
      <div className={css.today_stories}>
        <h3>
          <span className={css.dot}> </span>
          what we reading today
        </h3>

        {more_stories.map((story, index) => {
          const { avatar, author, title } = story;
          if (index < 3) {
            const authorHref = "/@" + author.replaceAll(" ", "");
            const storyHref = '/' + authorHref + '/' + title.replaceAll(" ", "-");

            return (
              <div className={css.story} key={index}>
                <div className={css.author}>
                  <div className={css.avatar}>
                    <Link href={authorHref}>
                      <a>
                        <Image src={avatar} layout="fill" />
                      </a>
                    </Link>
                  </div>
                  <dir className={css.name}>
                    <Link href={authorHref}>
                      <a>
                        <span className={css.name}> {author} </span>
                      </a>
                    </Link>
                  </dir>
                </div>
                <div className={css.title}>
                  <Link href={storyHref}>
                    <a href="">
                      <h4>{title}</h4>    
                    </a>
                  </Link>
                </div>
              </div>
            );
          } else {
            return "";
          }
        })}

        <div className={css.link}>
          <Link href="/list-of-today-story"> See the full list </Link>
        </div>
      </div>
    </Layout>
  );
};


export default StoryRightbar;
