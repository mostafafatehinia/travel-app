"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FieldValues, useForm } from "react-hook-form";

import { Badge, Button, Card, Datepicker, Dropdown, Input } from "@/components";
import { Add, User, Users } from "@/Icons";
import { passengerSchema } from "@/validations/passenger";

import GENDER_OPTIONS from "../constants/globals.json";

export const PassengerForm = () => {
  const {
    watch,
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(passengerSchema),
  });

  const submitForm = (data: FieldValues) => alert(JSON.stringify(data));

  return (
    <Card>
      <form
        className="w-full space-y-8 xl:min-w-[1140px]"
        onSubmit={handleSubmit(submitForm)}
        autoComplete="off"
      >
        <div className="relative flex items-center gap-4">
          <div className="text-gray-700">
            <Users />
          </div>
          <div className="text-xl font-semibold text-gray-800">
            مشخصات مسافران
          </div>
          <div className="absolute -bottom-2 -right-8 -top-2 w-2 rounded-bl-lg rounded-tl-lg bg-gray-700" />
        </div>
        <div className="flex items-center justify-between">
          <Badge>بزرگسال</Badge>
          <button className="flex items-center gap-2 text-blue-500">
            <User />
            <div className="text-lg">انتخاب مسافران سابق</div>
          </button>
        </div>
        <div className="grid gap-4 xl:grid-cols-4">
          <Input
            {...register("name")}
            placeholder="نام فارسی"
            required={!!errors.name?.message}
            errorMessage={errors.name?.message?.toString()}
          />
          <Input
            {...register("family")}
            placeholder="نام خانوادگی فارسی"
            required={!!errors.family?.message}
            errorMessage={errors.family?.message?.toString()}
          />
          <Controller
            name="gender"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Dropdown
                {...field}
                placeholder="جنسیت"
                required={!!errors.gender?.message}
                errorMessage={errors.gender?.message?.toString()}
              >
                {GENDER_OPTIONS.map((gender, i) => (
                  <Dropdown.Option key={i} value={gender.value}>
                    {gender.label}
                  </Dropdown.Option>
                ))}
              </Dropdown>
            )}
          />
          <Input
            {...register("nationalId")}
            required={!!errors.nationalId?.message}
            placeholder="کد ملی"
            errorMessage={errors.nationalId?.message?.toString()}
          />
        </div>
        <div className="grid xl:grid-cols-4">
          <div className="space-y-3">
            <div className="text-sm text-gray-500">تاریخ تولد</div>
            <Datepicker
              date={watch("birthDate")}
              setDate={(value) => setValue("birthDate", value)}
              required={!!errors.birthDate?.message}
              errorMessage={errors.birthDate?.message?.toString()}
            />
          </div>
        </div>
        <hr className="h-px w-full bg-gray-300" />
        <Button
          startContent={<Add />}
          className="w-full justify-center xl:w-auto"
          type="submit"
        >
          اضافه کردن مسافر جدید
        </Button>
      </form>
    </Card>
  );
};
