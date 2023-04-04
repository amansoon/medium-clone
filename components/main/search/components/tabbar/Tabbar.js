import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import css from "./tabbar.module.css";

const Tabbar = ({ activeTab }) => {
  const router = useRouter();
  const { q } = router.query;
  let query;

  if (q) {
    query = q.replaceAll(" ", "+");
  }

  const tabs = [
    { tabname: "stories", href: `/search/posts${query ? "?q=" + query : ""}` },
    { tabname: "people", href: `/search/users${query ? "?q=" + query : ""}` },
    { tabname: "topics", href: `/search/tags${query ? "?q=" + query : ""}` },
  ];

  return (
    <div className={css.tabbar}>
      <div className={css.scroller}>
        <div className={css.scroller_items}>
          {tabs.map((tab, index) => {
            const { tabname, href } = tab;
            if (tabname === activeTab) {
              return (
                <div className={`${css.tab} ${css.active}`} key={index}>
                  <Link href={href}>
                    <a className={`${css.link} ${css.active}`}>{tabname}</a>
                  </Link>
                </div>
              );
            }
            return (
              <div className={css.tab} key={index}>
                <Link href={href}>
                  <a className={css.link}>{tabname}</a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tabbar;
