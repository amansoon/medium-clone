import css from "./layout.module.css";

const Layout = ({children}) => {
  return (
    <div className={css.main}>
      <div className={css.main_inner}>

        {children}

      </div>
    </div>
  );
};

export default Layout;
