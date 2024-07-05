import { ReactNode } from "react";

import { BaseComponentProps } from "../types";

export interface DropdownProps extends BaseComponentProps {
  placeholder?: string;
  optionsClassName?: string;
  required?: boolean;
  Option?: ReactNode;
  errorMessage?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export interface OptionProps extends BaseComponentProps {
  onClick?: () => void;
  value?: string;
  selected?: boolean;
}
