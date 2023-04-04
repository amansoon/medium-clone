import { useState } from "react";

import { useSelector } from "react-redux";

import css from "./rightbar.module.css";
import Link from "next/dist/client/link";
import Image from "next/dist/client/image";

import avatar from "../../../../assets/image/avatars/avatar-4.jpg";
import more_stories from "../../../../assets/data/more_stories";
import { MailIcon, ThreeDotIcon } from "../../../../assets/icon/medium-icons";

import { useDispatch } from "react-redux";
import { setIsFollowersDialog } from "../../../../features/app/appSlice";

import Layout from "../../../layout/rightbar/Layout";

const StoryRightbar = () => {
  const { name, username } = useSelector((state) => state.user);
  const [isFollowing, setIsFollowing] = useState(false);

  const dispatch = useDispatch();

  const followers = 340;
  const meUser = false;

  console.log(more_stories);

  return (
    <Layout>
      <div className={css.user}>
        <div className={css.avatar}>
          <Link href={`/${username}`}>
            <a>
              <Image src={avatar} layout="fill" />
            </a>
          </Link>
        </div>
        <div className={css.username}>
          <Link href={`/${username}`}>
            <a>{name}</a>
          </Link>
        </div>
        <div className={css.followers}>
          <button className={css.btn} onClick={() => dispatch(setIsFollowersDialog(true))} >{followers} Followers</button>
        </div>
        <div className={css.about}>
          <p>
            I write about programming, technology, and philosophy. Sometimes all
            at once.
          </p>
        </div>

        {meUser ? (
          <div className={css.action}>
            <Link href="/me/settings">
              <a className={css.link}>Edit profile</a>
            </Link>
          </div>
        ) : (
          <div className={css.action}>
            <button
              className={`${css.btn} ${css.follow} ${
                isFollowing ? css.true : ""
              }`}
              onClick={() => setIsFollowing(!isFollowing)}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
            <button className={`${css.btn} ${css.email}`}>
              <span className={css.icon}>
                <MailIcon />
              </span>
            </button>
          </div>
        )}
      </div>

      {/* ======== Lists ======== */}
      {more_stories.length > 0 ? (
        <div className={css.stories}>
          <div className={css.heading}> More from medium </div>
          {more_stories.map((story) => {
            const {thumbnail, author, avatar, title} = story;
            const userHref = '/@' + author.replaceAll(' ', '-') 
            const storyHref = '/@username/story-title' ;
            return (
              <div className={css.story}>
                <div className={css.content}>
                  <div className={css.author}> 
                    <div className={css.avatar}>
                      <Link href={userHref}>
                        <a>
                          <Image src={avatar} layout='fill' />
                        </a>
                      </Link>
                    </div>
                    <div className={css.name}>
                      <Link href={userHref}>
                        <a>
                          <span> {author} </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className={css.title}>
                    <Link href={storyHref}>
                      <h2> {title} </h2>
                    </Link>
                  </div>
                </div>
                <div className={css.thumbnail}>
                  <Link href={storyHref}>
                    <a>
                      <div className={css.thumbnail_wrapper}>
                        <Image src={thumbnail} layout='fill' />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : ''}
    </Layout>
  );
};

export default StoryRightbar;
