import {cn} from "@/lib/utils/cn.ts";
import type {ButtonProps} from "./Button.types";
import "./Button.sass";

export const Button: React.FC<ButtonProps> = ({type = 'button', className, onClick, children}) => {
  return (
    <button type={type} className={cn('button', className)} onClick={onClick}>
      {children}
    </button>
  );
};

