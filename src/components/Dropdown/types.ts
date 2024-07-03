import { ReactNode } from "react";

import { BaseComponentProps } from "../types";

export interface DropdownProps extends BaseComponentProps {
  selected?: string;
  setSelected: (value?: string) => void;
  placeholder?: string;
  optionsClassName?: string;
  required?: boolean;
  Option?: ReactNode;
  errorMessage?: string;
}

export interface OptionProps extends BaseComponentProps {
  onClick?: () => void;
  value?: string;
  selected?: boolean;
}
