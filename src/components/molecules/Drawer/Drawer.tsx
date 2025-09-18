import Cross from "@/assets/icons/Cross.svg?react";
import { Button } from "@/components/atoms";
import { cn } from "@/lib/utils/cn.ts";
import type { DrawerProps } from "./Drawer.types";
import "./Drawer.sass";

export const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  className,
  children,
}) => {
  return (
    <aside className={cn("drawer", open && "drawer--open", className)}>
      <div className="drawer__overlay" onClick={onClose} />
      <div className="drawer__panel">
        <Button className="drawer__close" onClick={onClose}>
          <Cross className="drawer__close-icon" />
        </Button>
        {children}
      </div>
    </aside>
  );
};
