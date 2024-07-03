import { ComponentProps } from "react";

export interface InputProps extends ComponentProps<"input"> {
  errorMessage?: string;
}
