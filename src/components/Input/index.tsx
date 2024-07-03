import { forwardRef } from "react";

import { InputProps } from "./types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          className="h-[60px] w-full rounded-xl border border-gray-300 px-2 text-lg font-semibold text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 required:ring-2 required:ring-red-400 required:ring-offset-2 focus:ring focus:ring-blue-500 focus:ring-offset-2"
        />
        {errorMessage && (
          <p className="absolute left-0 top-[68px] text-red-400">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
