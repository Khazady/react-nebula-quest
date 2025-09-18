import { cn } from "@/lib/utils/cn.ts";
import type { ReadMoreProps } from "./ReadMore.types";
import "./ReadMore.sass";

export const ReadMore: React.FC<ReadMoreProps> = ({
  moreLabel,
  lessLabel,
  id = "readmore",
  buttonClassName,
  children,
}) => {
  return (
    <>
      <input type="checkbox" id={id} className="readmore__toggle" />
      {children}
      <label htmlFor={id} className={cn("readmore__button", buttonClassName)}>
        <span className="readmore__button-label readmore__button-label--off">
          {moreLabel}
        </span>
        <span className="readmore__button-label readmore__button-label--on">
          {lessLabel}
        </span>
      </label>
    </>
  );
};
