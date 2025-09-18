import card1 from "@/assets/images/offers/card-1.webp";
import card2 from "@/assets/images/offers/card-2.webp";
import card3 from "@/assets/images/offers/card-3.webp";
import card4 from "@/assets/images/offers/card-4.webp";
import {OfferCard} from "@/components/molecules";
import {dictionary} from "@/lib/dictionary.ts";
import "./Offers.sass";

export const Offers = () => {
  const {offers} = dictionary;
  const images = [card1, card2, card3, card4];

  return <section className="offers">
    <h2 className="offers__title">{offers.title}</h2>
    {offers.items.map((offer, idx) => {
      const isFeatured = idx === 0 || idx === offers.items.length - 1;
      return (
        <OfferCard
          key={idx}
          {...offer}
          imageUrl={images[idx % images.length]}
          featured={isFeatured}
        />
      );
    })}
  </section>;
};
