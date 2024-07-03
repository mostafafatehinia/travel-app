"use client";
import {
  Children,
  ReactElement,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";

import { twMerge } from "tailwind-merge";

import { ChevronDown } from "@/Icons";

import { Option } from "./Option";
import { DropdownProps, OptionProps } from "./types";

export const Dropdown = ({
  placeholder = "Select",
  children,
  className,
  optionsClassName,
  selected,
  required,
  errorMessage,
  setSelected,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);

  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleOptionClick = (label: string) => {
    setSelected(label);
    setOpen(false);
  };

  const options = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === Option) {
      return cloneElement(child as ReactElement<OptionProps>, {
        onClick: () => handleOptionClick(child.props.children),
        selected: selected === child.props.children,
      });
    }
    return child;
  });

  return (
    <div ref={dropDownRef} className="relative w-full">
      <button
        type="button"
        className={twMerge(
          `inline-flex h-[60px] w-full items-center justify-between gap-3 rounded-xl border border-gray-300 px-2 text-lg font-semibold outline-none transition-all duration-200 focus:ring focus:ring-blue-500 focus:ring-offset-2 
          ${required ? "ring-2 ring-red-400 ring-offset-2" : ""}
          `,
          className,
        )}
        onClick={handleToggle}
      >
        <p className={selected ? "text-gray-800" : "text-gray-400"}>
          {selected || placeholder}
        </p>
        <div
          className={`text-gray-500 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
        >
          <ChevronDown />
        </div>
      </button>
      <div
        className={twMerge(
          `scrollbar absolute left-0 right-0 top-[64px] max-h-[200px] transform overflow-y-scroll rounded-xl border border-gray-200 bg-white ${open ? "animate-slide-in" : "animate-slide-out"}`,
          optionsClassName,
        )}
      >
        {options}
      </div>
      {errorMessage && (
        <p className="absolute left-0 top-[68px] text-red-400">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

Dropdown.Option = Option;
