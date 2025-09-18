import {Button} from "@/components/atoms";
import {dictionary} from "@/lib/dictionary.ts";
import {cn} from "@/lib/utils/cn.ts";
import type {CSSProperties, FC} from "react";
import type {OfferCardProps} from "./OfferCard.types.ts";
import "./OfferCard.sass";

export const OfferCard: FC<OfferCardProps> = ({title, text, imageUrl, featured}) => {
  const {offers} = dictionary;

  const style = {
    ["--offer-background-img" as keyof CSSProperties]: `url(${imageUrl})`,
  } as CSSProperties;
  const className = cn("offer", featured && "offer--featured");

  return (
    <article className={className} style={style}>
      <h3 className="offer__title">{title}</h3>
      <p className="offer__text">{text}</p>
      <Button className="offer__button" variant='secondary'>{offers.button}</Button>
    </article>
  )
}
