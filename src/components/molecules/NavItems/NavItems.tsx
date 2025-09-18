import { cn } from "@/lib/utils/cn.ts";
import { Children, type FC } from "react";
import type { NavItemsProps } from "./NavItems.types";
import "./NavItems.sass";

export const NavItems: FC<NavItemsProps> = ({
  children,
  orientation = "horizontal",
  className,
}) => {
  return (
    <nav
      className={cn(
        "nav-items",
        orientation === "vertical" && "nav-items--vertical",
        orientation === "horizontal" && "nav-items--horizontal",
        className,
      )}
    >
      <ul className="nav-items__list">
        {Children.map(children, (child) => (
          <li className="nav-items__item">{child}</li>
        ))}
      </ul>
    </nav>
  );
};
