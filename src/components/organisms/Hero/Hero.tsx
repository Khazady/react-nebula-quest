import {Button} from "@/components/atoms";
import {dictionary} from "@/lib/dictionary";
import planetUrl from "./planet.webp";
import "./Hero.sass";

export const Hero: React.FC = () => {
  const {hero} = dictionary;
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          {hero.title}
          <span className="hero__title-accent">{hero.titleAccent}</span>
        </h1>
        <p className="hero__subtitle">
          {hero.subtitle}
          <span className="hero__subtitle-accent">{hero.subtitleAccent}</span>
        </p>
        <Button variant="primary">{hero.button}</Button>
      </div>
      <img className="hero__planet" src={planetUrl} alt="Planet"/>
    </section>
  );
};
