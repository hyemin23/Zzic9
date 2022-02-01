import { ChangeEvent, useCallback, useEffect } from "react";
import { useState } from "react";

interface useFormProp<T> {
  init: T;
  onSubmit: (value: T) => void;
  validate: (value: T) => formErrors;
}
interface useFormReturn<T> {
  values: T;
  errors: formErrors;
  submitting: boolean;
  submitted: boolean;
  handleChange(e: ChangeEvent<HTMLInputElement>): void;
  handleSubmit(e: SubmitEvent): void;
}

export interface formErrors {
  [name: string]: string;
}

const useForm = <T>({
  init,
  onSubmit,
  validate,
}: useFormProp<T>): useFormReturn<T> => {
  const [values, setValues] = useState(init);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      console.log("values:", { ...values });

      setValues({ ...values, [name]: value });
    },
    [values],
  );

  const handleSubmit = useCallback(
    async (e: SubmitEvent) => {
      setSubmitting(true);
      e.preventDefault();
      setErrors(validate(values));

      await new Promise((r) => setTimeout(r, 1000));
    },
    [validate, values],
  );

  useEffect(() => {
    if (submitting) {
      if (Object.keys(errors).length === 0) {
        onSubmit(values);
        setSubmitted(true);
      }
      setSubmitting(false);
    }
  }, [submitting, values, errors, onSubmit]);

  return { values, errors, submitting, handleChange, handleSubmit, submitted };
};

export default useForm;
