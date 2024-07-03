import { BaseComponentProps } from "../types";

export const Card = ({ children }: BaseComponentProps) => {
  return (
    <div className="mx-8 w-full rounded-lg border border-gray-200 bg-white px-8 py-4 shadow-sm xl:w-fit">
      {children}
    </div>
  );
};
