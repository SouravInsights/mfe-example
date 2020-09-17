import { HTMLAttributes } from 'react';
import { FormikProps, FieldInputProps, FormikValues } from 'formik';

class T {}

export interface SelectProps {}

export interface StyledProps {
  error: string;
}

export type HighlightsSelectOptionTypes = {
  value: string;
  text: string;
};

export interface HighlightsSelectProps extends HTMLAttributes<T> {
  defaultOption: HighlightsSelectOptionTypes;
  setFieldValue: Function;
  error: string;
  handleChange: Function;
  name: string;
  options?: HighlightsSelectOptionTypes[];
  value?: string | number;
}

export interface DropdownProps {
  options: HighlightsSelectOptionTypes[];
  selectedOption: string | undefined;
  handleDropdownClick: (item: { value: string, text: string }) => void;
}

export interface HighlightsSelectProps {
  helperText?: string;
  label?: string;
  field: FieldInputProps<string>;
  form: FormikProps<FormikValues>;
}

export interface StyledDropdownProps {
  selectedOption: string;
}
