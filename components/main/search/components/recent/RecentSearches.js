import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import css from "./recentSearches.module.css";

import { CancelIcon } from "../../../../../assets/icon/medium-icons";

const searches = [
  { id: 0, text: "Love" },
  { id: 1, text: "independence day of india" },
  { id: 2, text: "self help book" },
  { id: 3, text: "meditation" },
  { id: 4, text: "mindfulness" },
  { id: 5, text: "how to focus on one task" },
  { id: 6, text: "dreaming" },
  { id: 7, text: "variable in javascript" },
];

const RecentSearches = () => {
  const [recentSearches, setRecentSearches] = useState(searches);

  const deleteSearch = (id) => {
    const newSearches = recentSearches.filter((item) => item.id !== id);
    setRecentSearches(newSearches);
  };

  return (
    <div className={css.recent}>
      {recentSearches.map(({ id, text }) => {
        return (
          <>
            <div className={css.search}>
              <button className={css.btn}>
                <span> {text} </span>
              </button>
              <button className={css.btn} onClick={() => deleteSearch(id)}>
                <span className={css.icon}>
                  <CancelIcon />
                </span>
              </button>
            </div>
            <div className={css.divider}>
              <div className={css.hr}> </div>
            </div>
          </>
        );
      })}

      {recentSearches.length === 0 ? <div className={css.search}>
        <span> You have no recent searches </span>
      </div> : ""}

    </div>
  );
};

export default RecentSearches;
