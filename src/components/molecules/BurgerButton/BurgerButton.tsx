import MenuIcon from "@/assets/icons/Menu.svg?react";
import { Button } from "@/components/atoms";
import { cn } from "@/lib/utils/cn.ts";
import type { BurgerButtonProps } from "./BurgerButton.types";
import "./BurgerButton.sass";

export const BurgerButton: React.FC<BurgerButtonProps> = ({
  open,
  onToggle,
  className,
}) => {
  return (
    <Button
      className={cn("burger-button", open && "burger-button--open", className)}
      onClick={onToggle}
    >
      <MenuIcon className="burger-button__icon" />
    </Button>
  );
};
