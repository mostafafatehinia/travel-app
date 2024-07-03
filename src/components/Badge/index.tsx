import { BaseComponentProps } from "../types";

export const Badge = ({ children }: BaseComponentProps) => {
  return (
    <div className="w-fit rounded-full border border-gray-200 px-4 py-2 text-lg text-gray-800">
      {children}
    </div>
  );
};
