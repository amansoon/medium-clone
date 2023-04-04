import { useState, useEffect } from "react";
import Image from "next/image";

import css from "./dialog.module.css";
import followers from "../../../assets/data/followers";
import Link from "next/link";
import { CancelIcon } from "../../../assets/icon/medium-icons";

import { useDispatch } from "react-redux";
import {setIsFollowingDialog} from "../../../features/app/appSlice" ;



const Dialog = () => {
  const dispatch = useDispatch() ;

  return (
    <div className={css.dialog}>
      <div className={css.wrapper}>


        <div className={css.content}>

          <div className={css.cancel}>
            <button className={css.btn} onClick={() => dispatch(setIsFollowingDialog(false))}>
              <span className={css.icon}>
                <CancelIcon />
              </span>
            </button>
          </div>

          <div className={css.heading}>
            <h2> 6 Following </h2>
          </div>

          {followers.map((follower, index) => {
            return <Following follower={follower} key={index} />;
          })}
          
          <footer className={css.footer}>
            <button> Show more </button>
          </footer>

        </div>
      </div>
    </div>
  );
};

const Following = ({ follower }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const { avatar, name, bio, href } = follower;

  return (
    <div className={css.following}>
      <div className={css.info}>
        <div className={css.avatar}>
          <Image src={avatar} layout="fill" />
        </div>
        <div className={css.intro}>
          <Link href={href}>
            <a>
              <h2> {name} </h2>
            </a>
          </Link>
          <p> {bio} </p>
        </div>
      </div>
      <div className={css.actions}>
        <button
          className={`${css.btn} ${isFollowing ? css.follow : css.following}`}
          onClick={() => setIsFollowing(!isFollowing)}
        >
          {isFollowing ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
};

export default Dialog;
