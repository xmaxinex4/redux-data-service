import { IFieldType } from "./IFieldType";
import { isDate } from "validate.js";
import { format, parse } from "date-fns";

export const DateField: IFieldType<Date> = {
  serialize: true,
  defaultValidationRules: { datetime: { dateOnly: true } },
  defaultValue: null,
  isValidType: (value) => value == null || isDate(value),
  transform: (date: Date) => date != null ? format(date, "YYYY-MM-DD") : null,
  normalize: (value: string | any): Date => (
    isDate(value)
      ? value
      : (value != null
        ? parse(value, "YYYY-MM-DD", new Date())
        : null
      )
  ),
};
