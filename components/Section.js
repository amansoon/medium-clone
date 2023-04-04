import css from "../styles/globals.css";
const Section = ({children}) => {
  return (
    <section className={`section ${css.hero_s}`}>
      <div className={`section-inner ${css.hero_s_inner}`}>
        <div className="grid">
           {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
