import rocketUrl from "@/assets/images/footer/rocket.webp";
import "./Footer.sass";
import { dictionary } from "@/lib/dictionary.ts";

export const Footer = () => {
  const { footer } = dictionary;

  return (
    <footer className="footer">
      <img src={rocketUrl} alt="rocket" className="footer__rocket" />
      <p className="footer__text">{footer.text}</p>
    </footer>
  );
};
