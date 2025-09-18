import { cn } from "@/lib/utils/cn.ts";
import type { ButtonProps } from "./Button.types";
import "./Button.sass";

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  className,
  onClick,
  children,
  variant,
}) => {
  return (
    <button
      type={type}
      className={cn("button", variant && `button--${variant}`, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
