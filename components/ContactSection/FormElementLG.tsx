import React from 'react';

import { FormField } from '@/enums/form';
import { InputType, InputStyle } from '@/enums/components';

import YContactForm from '@/components/YContactForm';
interface InputField {
  label: string;
  placeholder: string;
  errorMessage?: string;
  info?: string;
}

interface SubmitHandler {
  (values: Record<string, string>): void;
}

interface FormElementProps {
  formTitle: string;
  formButtonText: string;
  fields: Record<FormField, InputField>;
}

const FormElement: React.FC<
  FormElementProps & {
    onFormSubmit: SubmitHandler;
  }
> = ({ fields, formTitle, formButtonText, onFormSubmit }) => {
  // handles closing of modal on mobile on submit
  const handleSubmit: typeof onFormSubmit = (values) => {
    onFormSubmit(values);
  };

  const formProps = {
    fields: {
      ...fields,
      [FormField.Comment]: {
        ...fields[FormField.Comment],
        type: InputType.TextArea,
      },
    },
    onSubmit: handleSubmit,
    title: formTitle,
    style: InputStyle.Light,
    buttonText: formButtonText,
  };

  return <YContactForm {...formProps} />;
};

export default FormElement;
