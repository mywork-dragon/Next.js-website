import React from 'react';
import { AnimateSharedLayout } from 'framer-motion';

import { FormField } from '@/enums/form';
import { InputType, InputStyle } from '@/enums/components';

import YContactForm from '@/components/YContactForm';
import ExpandableRegion from '@/components/AnimateComponents/YExpandableRegion';
import YAnimateItem from '@/components/AnimateComponents/YAnimateItem';

interface InputField {
  label: string;
  placeholder: string;
  errorMessage?: string;
  info?: string;
}

export interface FormElementProps {
  fields: Record<FormField, InputField>;
  formTitle: string;
  formButtonText: string;
  openForm: boolean;
  setOpenForm: (open: boolean) => void;
  onFormSubmit: (values: Record<string, string>) => void;
}

const FormElement: React.FC<FormElementProps> = ({
  fields,
  formTitle,
  formButtonText,
  openForm,
  onFormSubmit,
  setOpenForm,
}) => {
  // handles closing of modal on mobile on submit
  const handleSubmit: typeof onFormSubmit = (values) => {
    setOpenForm(false);
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
    onClose: () => setOpenForm(false),
    title: formTitle,
    style: InputStyle.Dark,
    buttonText: formButtonText,
  };

  return (
    <AnimateSharedLayout>
      <ExpandableRegion
        className="fixed top-0 left-0 right-0 bottom-0 whitespace-normal z-50"
        open={openForm}
      >
        <YAnimateItem layout className="h-full w-full">
          <YContactForm
            {...formProps}
            onClose={() => setOpenForm(false)}
            className="h-full w-full"
          />
        </YAnimateItem>
      </ExpandableRegion>
    </AnimateSharedLayout>
  );
};

export default FormElement;
