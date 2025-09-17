import {dictionary} from "@/lib/dictionary";
import "./About.sass";


export const About = () => {
  const {about} = dictionary;

  return (
    <section className="about">
      <h2 className="about__title">{about.title}</h2>
      <p className="about__text">{about.text}</p>

      <input type="checkbox" id="readmore" className="about__toggle"/>
      <p className="about__text about__text--extra">{about.extraText}</p>
      <label htmlFor="readmore" className="about__button">
        <span className="about__button-label about__button-label--off">{about.readMore}</span>
        <span className="about__button-label about__button-label--on">{about.readLess}</span>
      </label>
    </section>
  );
};
