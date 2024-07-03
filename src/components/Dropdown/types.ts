import { BaseComponentProps } from "../types";

export interface DropdownProps extends BaseComponentProps {
  placeholder?: string;
  optionsClassName?: string;
}

export interface OptionProps extends BaseComponentProps {
  onClick?: () => void;
  value?: string;
  selected?: boolean;
}
