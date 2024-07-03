import * as z from "zod";

const calculateCheckDigit = (nationalIdWithoutCheckDigit: string): string => {
  const coefficients = [10, 9, 8, 7, 6, 5, 4, 3, 2];
  const nationalIdDigits = nationalIdWithoutCheckDigit.split("").map(Number);
  let sum = 0;
  for (let i = 0; i < coefficients.length; i++) {
    sum += nationalIdDigits[i] * coefficients[i];
  }
  const remainder = sum % 11;
  if (remainder < 2) {
    return `${remainder}`;
  } else {
    return `${11 - remainder}`;
  }
};

export const passengerSchema = z.object({
  name: z.string().min(1, { message: "فیلد الزامی" }),
  family: z.string().min(1, { message: "فیلد الزامی" }),
  gender: z.string().min(1, { message: "فیلد الزامی" }),
  nationalId: z
    .string()
    .min(1, { message: "فیلد الزامی" })
    .refine(
      (id) => {
        if (id.length !== 10) return false;

        const regionCode = id.substr(0, 3);
        const birthDatePart = id.substr(3, 6);
        const checkDigit = id.substr(9, 1);

        if (!/^\d+$/.test(regionCode)) return false;

        if (!/^\d+$/.test(birthDatePart)) return false;

        const calculatedCheckDigit = calculateCheckDigit(id.substr(0, 9));
        if (checkDigit !== calculatedCheckDigit) return false;

        return true;
      },
      {
        message: "کد ملی نا معتبر",
      },
    ),
  birthDate: z.string({ message: "فیلد الزامی" }),
});
