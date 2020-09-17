import { FormikProps, FieldInputProps, FormikValues, FormikErrors } from 'formik';

export interface StyledAnimationProps {
  focus?: boolean;
  error?: string;
  typed?: boolean;
  textarea?: boolean;
  touched?: boolean;
}

export interface HighlightsInputProps {
  helperText?: string;
  textarea?: boolean;
  label?: string;
  field: FieldInputProps<string>;
  form: FormikProps<FormikValues>;
}

export interface StyledHighlightsProps {
  writingStatus?: boolean;
  textarea?: boolean;
  error?: string | string[] | FormikErrors<FormikValues> | FormikErrors<FormikValues>[] | undefined;
}
