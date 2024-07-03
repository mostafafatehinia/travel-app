export interface DatepickerProps {
  date?: string;
  setDate?: (value?: string) => void;
  required?: boolean;
  errorMessage?: string;
}
