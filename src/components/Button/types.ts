import { ComponentProps, ReactNode } from "react";

export interface ButtonProps extends ComponentProps<"button"> {
  startContent?: ReactNode;
}
