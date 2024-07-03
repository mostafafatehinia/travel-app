"use client";
import { useEffect, useState } from "react";

import { DatepickerProps } from "./types";
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

export const Datepicker = ({
  date,
  required,
  errorMessage,
  setDate,
}: DatepickerProps) => {
  const [day, setDay] = useState<undefined | string>(date?.split("-")[2]);
  const [month, setMonth] = useState<undefined | string>(date?.split("-")[1]);
  const [year, setYear] = useState<undefined | string>(date?.split("-")[0]);

  useEffect(() => {
    if (year && day && month) {
      setDate?.(`${year}-${month}-${day}`);
    }
  }, [year, day, month]);

  return (
    <div
      className={`relative flex w-full items-center rounded-xl border border-gray-200 xl:justify-between
          ${required ? "ring-2 ring-red-400 ring-offset-2" : ""}
    `}
    >
      <Dropdown
        selected={day}
        setSelected={setDay}
        placeholder="روز"
        className="border-none shadow-none"
      >
        {DAYS.map((month, i) => (
          <Dropdown.Option key={i} value={month.value}>
            {month.label}
          </Dropdown.Option>
        ))}
      </Dropdown>
      <Dropdown
        selected={month}
        setSelected={setMonth}
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
      <Dropdown
        selected={year}
        setSelected={setYear}
        placeholder="سال"
        className="border-none shadow-none"
      >
        {YEARS.map((month, i) => (
          <Dropdown.Option key={i} value={month.value}>
            {month.label}
          </Dropdown.Option>
        ))}
      </Dropdown>
      {errorMessage && (
        <p className="absolute left-0 top-[68px] text-red-400">
          {errorMessage}
        </p>
      )}
    </div>
  );
};
