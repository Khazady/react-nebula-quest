import { Button } from "@/components/atoms";
import { dictionary } from "@/lib/dictionary";
import "./Hero.sass";

export const Hero: React.FC = () => {
  const { hero } = dictionary;
  return (
    <section className="hero">
      <h1 className="hero__title">
        {hero.title}
        <span className="hero__title-accent">{hero.titleAccent}</span>
      </h1>
      <p className="hero__subtitle">
        {hero.subtitle}
        <span className="hero__subtitle-accent">{hero.subtitleAccent}</span>
      </p>
      <Button variant="primary" className="hero__button">
        {hero.button}
      </Button>
    </section>
  );
};
