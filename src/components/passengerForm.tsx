"use client";
import { Badge, Button, Card, Datepicker, Dropdown, Input } from "@/components";
import { Add, User, Users } from "@/Icons";

import GENDER_OPTIONS from "../constants/globals.json";

export const PassengerForm = () => {
  return (
    <Card>
      <div className="w-full space-y-8 xl:min-w-[1140px]">
        <div className="flex items-center gap-4">
          <div className="text-gray-700">
            <Users />
          </div>
          <div className="text-xl font-semibold text-gray-800">
            مشخصات مسافران
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Badge>بزرگسال</Badge>
          <button className="flex items-center gap-2 text-blue-500">
            <User />
            <div className="text-lg">انتخاب مسافران سابق</div>
          </button>
        </div>
        <div className="grid gap-4 xl:grid-cols-4">
          <Input placeholder="نام فارسی" />
          <Input placeholder="نام خانوادگی فارسی" />
          <Dropdown placeholder="جنسیت">
            {GENDER_OPTIONS.map((gender, i) => (
              <Dropdown.Option key={i} value={gender.value}>
                {gender.label}
              </Dropdown.Option>
            ))}
          </Dropdown>
          <Input placeholder="کد ملی" />
        </div>
        <div className="grid xl:grid-cols-4">
          <div className="space-y-3">
            <div className="text-sm text-gray-500">تاریخ تولد</div>
            <Datepicker />
          </div>
        </div>
        <hr className="h-px w-full bg-gray-300" />
        <Button
          startContent={<Add />}
          className="w-full justify-center xl:w-auto"
        >
          اضافه کردن مسافر جدید
        </Button>
      </div>
    </Card>
  );
};
