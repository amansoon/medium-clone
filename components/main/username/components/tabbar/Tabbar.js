import css from "./tabbar.module.css";
import Link from "next/link";

import { ThreeDotIcon } from "../../../../../assets/icon/medium-icons";

const Tabbar = ({ tabs, currentTab }) => {
  const name = "Aman Ghanghoriya";

  return (
    <section className={`${css.section}`}>
      <div className={css.inner}>
        <div className={css.tabbar}>
          <div className={css.header}>
            <div className={css.heading}>
              <h1> {name} </h1>
            </div>
            <button className={`${css.btn} ${css.menu}`}>
              <div className={css.icon}>
                <ThreeDotIcon />
              </div>
            </button>
          </div>
          <div className={css.scroller}>
            <div className={css.scroller_items}>
              {tabs.map((tab, index) => {
                const { tabname, href } = tab;
                if (tabname === currentTab) {
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
      </div>
    </section>
  );
};

export default Tabbar;
