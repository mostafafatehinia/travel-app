import { twMerge } from "tailwind-merge";

import { ButtonProps } from "./types";

export const Button = ({ startContent, children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        "inline-flex w-auto gap-1 rounded-lg border-2 border-blue-500 px-3 py-2 text-lg text-blue-500 transition-all duration-150 focus:ring focus:ring-blue-300 focus:ring-offset-2",
        props.className,
      )}
    >
      {startContent && <span>{startContent}</span>}
      <span>{children}</span>
    </button>
  );
};
