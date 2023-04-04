import { useState } from "react";

import { useSelector } from "react-redux";

import css from "./rightbar.module.css";
import Link from "next/dist/client/link";
import Image from "next/dist/client/image";

import following from "../../../assets/data/following";

import avatar from "../../../assets/image/avatars/avatar-4.jpg";
import lists from "../../../assets/data/lists";
import { MailIcon, ThreeDotIcon } from "../../../assets/icon/medium-icons";

import Layout from "../../layout/rightbar/Layout";

import { useDispatch } from "react-redux";
import { setIsFollowersDialog } from "../../../features/app/appSlice";

const StoryRightbar = () => {
  const { name, username } = useSelector((state) => state.user);
  const [isFollowing, setIsFollowing] = useState(false);

  const dispatch = useDispatch();

  const followers = 340;
  const meUser = false;

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
          <button
            className={css.btn}
            onClick={() => dispatch(setIsFollowersDialog(true))}
          >
            {followers} Followers
          </button>
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

        {/* ======= Following ======== */}
        {following.length > 0 ? (
          <div className={css.following}>
            <div className={css.title}> Following </div>
            <ul>
              {following.map((user) => {
                const { name, href, avatar } = user;
                return (
                  <li>
                    <Link href={href}>
                      <a className={css.info}>
                        <div className={css.avatar}>
                          <Image src={avatar} layout="fill" />
                        </div>
                        <div className={css.name}>{name}</div>
                      </a>
                    </Link>
                    <button className={`${css.btn} ${css.menu}`}>
                      <span className={css.icon}>
                        <ThreeDotIcon />
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <button className={`${css.btn} ${css.seeAll}`}>
              {" "}
              See all (97){" "}
            </button>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* ======== Lists ======== */}
      {lists.length > 0 ? (
        <div className={css.lists}>
          <div className={css.title}> Lists </div>
          {lists.map((list, index) => {
            let { listname, total, thumbnails } = list;
            let href = "/@some-username/" + listname.replaceAll(" ", "-");
            return (
              <Link href={href} key={index}>
                <a>
                  <div className={css.list}>
                    <div className={css.thumbnails}>
                      {thumbnails.map((thumbnail, index) => {
                        return (
                          <div className={css.thumbnail} key={index}>
                            <Image src={thumbnail} layout="fill" />
                          </div>
                        );
                      })}
                    </div>
                    <div className={css.info}>
                      <h2> {listname} </h2>
                      <p> {total} stories </p>
                    </div>
                  </div>
                </a>
              </Link>
            );
          })}
          <button className={css.btn}> View All </button>
        </div>
      ) : (
        ""
      )}
    </Layout>
  );
};

export default StoryRightbar;
