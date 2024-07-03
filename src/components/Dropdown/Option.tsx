import { twMerge } from "tailwind-merge";

import { OptionProps } from "./types";

export const Option = ({
  value,
  children,
  selected,
  className,
  onClick,
}: OptionProps) => {
  return (
    <option
      className={twMerge(
        `h-12 cursor-pointer rounded-md p-2 transition-all duration-200 hover:bg-blue-100 ${selected ? "bg-blue-100" : ""}`,
        className,
      )}
      {...{ value, children, onClick }}
    />
  );
};
