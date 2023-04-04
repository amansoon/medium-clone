import React, { useRef, useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import css from "../styles/newStory.module.css";

import { Bell2Icon, BiggerTextIcon, BlockquoteTextIcon, BoldTextIcon, ItalicTextIcon, LinkIcon, LinkTextIcon, MediumLogo, PrivateNoteIcon, SmallerTextIcon, ThreeDotIcon } from "../assets/icon/medium-icons";

import { useSelector } from "react-redux";

import avatar from "../assets/image/avatars/avatar-1.jpg";

import MyEditor from "../components/editor/MyEditor";





export default function NewStory() {
  const {name} = useSelector((state) => state.user);

  const handleTitleKeyDown = (e) => {
    if(e.keyCode == 13) {
      e.preventDefault();
    }
  }
  

  return (
    <div className={css.container}>
      <header className={css.header}>
        <div className={css.wrapper}>
          <div className={css.content}>
            <div className={css.left}>
              <div className={css.logo}>
                <Link href={'/'}>
                  <a>
                    <MediumLogo />
                  </a>
                </Link>
              </div>
              <div className={css.text}>
                <span> 
                  Draft in {name} 
                  <span className={css.status}> Saved </span>
                </span>
              </div>
            </div>
            <div className={css.right}>
              <div className={css.publish}> 
                <button className={css.btn}> Publish </button>
              </div>
              <div className={css.moreActions}> 
                <button className={css.btn}> 
                  <span className={css.icon}>
                    <ThreeDotIcon />
                  </span>
                </button>
              </div>
              <div className={css.profile}>
                <div className={css.notification}>
                  <button className={css.btn}>
                    <span className={css.icon}>
                      <Bell2Icon />
                    </span>
                  </button>
                </div>
                <div className={css.userActions}>
                  <button className={css.btn}>
                    <div className={css.avatar}>
                      <Image src={avatar} layout='fill' />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className={css.main}>
        <div className={css.wrapper}>

          <div className={css.handle} >
            <div className={css.text}>
              Title
            </div>
          </div>

          <article className={css.content}> 
            
            <div className={css.title}>
              <h1 contentEditable placeholder="Title" onKeyDown={handleTitleKeyDown}>

              </h1>

            </div>

            <MyEditor />


          </article>

        </div>
      </main>
    </div>
  );
}




