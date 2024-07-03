import { InputProps } from "./types";

export const Input = ({ ...props }: InputProps) => {
  return (
    <input
      {...props}
      className="h-[60px] w-full rounded-xl border border-gray-300 px-2 text-lg font-semibold text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 required:ring-2 required:ring-red-400 required:ring-offset-2 focus:ring focus:ring-blue-500 focus:ring-offset-2"
    />
  );
};
