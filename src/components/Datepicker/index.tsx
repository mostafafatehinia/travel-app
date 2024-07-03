import MONTHS from "../../constants/months.json";
import { Dropdown } from "../Dropdown";

const DAYS = Array.from({ length: 31 }, (_, i) => ({
  label: i + 1,
  value: String(i + 1),
}));

const YEARS = Array.from({ length: 84 }, (_, i) => ({
  label: i + 1320,
  value: String(i + 1320),
}));

export const Datepicker = () => {
  return (
    <div className="flex w-full items-center rounded-xl border border-gray-200 xl:justify-between">
      <Dropdown placeholder="روز" className="border-none shadow-none">
        {DAYS.map((month, i) => (
          <Dropdown.Option key={i} value={month.value}>
            {month.label}
          </Dropdown.Option>
        ))}
      </Dropdown>
      <Dropdown
        placeholder="ماه"
        className="border-none shadow-none"
        optionsClassName="xl:w-[100px]"
      >
        {MONTHS.map((month, i) => (
          <Dropdown.Option key={i} value={month.value}>
            {month.label}
          </Dropdown.Option>
        ))}
      </Dropdown>
      <Dropdown placeholder="سال" className="border-none shadow-none">
        {YEARS.map((month, i) => (
          <Dropdown.Option key={i} value={month.value}>
            {month.label}
          </Dropdown.Option>
        ))}
      </Dropdown>
    </div>
  );
};
