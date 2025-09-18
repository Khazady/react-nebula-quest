import { cn } from "@/lib/utils/cn.ts";
import type { LinkProps } from "./Link.types";
import "./Link.sass";

export const Link: React.FC<LinkProps> = ({
  href,
  onClick,
  className,
  children,
}) => {
  return (
    <a href={href} onClick={onClick} className={cn("link", className)}>
      {children}
    </a>
  );
};
