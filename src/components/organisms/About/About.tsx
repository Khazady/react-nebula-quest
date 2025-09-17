import {dictionary} from "@/lib/dictionary";
import {ReadMore} from "@/components/molecules";
import "./About.sass";


export const About = () => {
  const {about} = dictionary;

  return (
    <section className="about">
      <h2 className="about__title">{about.title}</h2>
      <p className="about__text">{about.text}</p>
      <ReadMore
        moreLabel={about.readMore}
        lessLabel={about.readLess}
        buttonClassName="about__button"
      >
        <p className="about__text readmore__content">{about.extraText}</p>
      </ReadMore>
    </section>
  );
};
