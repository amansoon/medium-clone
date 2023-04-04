import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import css from "./tabbar.module.css";

const Tabbar = ({ activeTab }) => {
  const router = useRouter();
  const {topic} = router.query;
  let query;

  if (topic) {
    query = topic.replaceAll(" ", "-");
  }

  const tabs = [
    { tabname: "Trending", href: `/tag/${query}/` },
    { tabname: "Latest", href: `/tag/${query}/latest` },
    { tabname: "Best", href: `/tag/${query}/top` },
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
