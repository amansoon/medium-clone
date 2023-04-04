import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { SearchIcon } from "../../../../../assets/icon/medium-icons";

import css from "./searchbar.module.css";

// ========== Search bar ===========
const Searchbar = () => {
  const router = useRouter();
  const { q } = router.query;

  const [query, setQuery] = useState(q);

  useEffect(()=>{
    setQuery(q);
  }, [q])

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentPath = router.pathname;
    let q = "";

    if (query) {
      const regx = / {1,}/g;
      q = query.trim().replaceAll(regx, "+");
    }

    if (currentPath.startsWith("/search")) {
      if (q) {
        router.push(`${currentPath}?q=${q}`);
      } else {
        router.push(currentPath);
      }
    } else {
      if (q) {
        router.push(`/search?q=${q}`);
      } else {
        router.push("/search");
      }
    }
  };

  return (
    <div className={css.search}>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.icon}>
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Searchbar;
