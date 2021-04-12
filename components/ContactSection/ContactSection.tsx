import React, { useState } from 'react';

import { FormField } from '@/enums/form';
import { ScreenSize } from '@/enums/screenSize';
import { InputStyle, InputType } from '@/enums/components';

import useBreakpoint from '@/hooks/useBreakpoint';

import YContactForm from '@/components/YContactForm';
import YHeading from '@/components/YHeading';
import YText from '@/components/YText';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';
import ExpandableRegion from '../AnimateComponents/YExpandableRegion';
import YButton from '../YButton';
import {
  AnimateLayoutFeature,
  AnimateSharedLayout,
  AnimationFeature,
  ExitFeature,
  MotionConfig,
} from 'framer-motion';
import YAnimateItem from '../AnimateComponents/YAnimateItem';

interface InputField {
  label: string;
  placeholder: string;
  errorMessage?: string;
  info?: string;
}

interface ContactInfo {
  icon: JSX.Element;
  info: string;
}

interface Props {
  title: string;
  description: string;
  onFormSubmit: (values: Record<string, string>) => void;
  buttonText: string;
  formButtonText: string;
  formTitle: string;
  fields: Record<FormField, InputField>;
  contactInfo: ContactInfo[];
}

const ContactSection: React.FC<Props> = ({
  title,
  description,
  onFormSubmit,
  buttonText,
  formButtonText,
  formTitle,
  fields,
  contactInfo,
}) => {
  const { screenSize } = useBreakpoint();

  const [openForm, setOpenForm] = useState(
    screenSize == ScreenSize.MD ? true : false
  );

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
    style: screenSize == ScreenSize.SM ? InputStyle.Dark : InputStyle.Light,
    buttonText: formButtonText,
  };

  const infoSection = (
    <div className="w-full md:w-109.5 md:absolute md:-left-119.5 md:top-1/2 md:transform md:-translate-y-1/2">
      <YHeading
        {...titleProps[screenSize]}
        className="mb-1 md:mb-2 md:leading-22"
      >
        {title}
      </YHeading>
      <YText {...textProps[screenSize]} className="text-gray-300 mb-6 md:mb-15">
        {description}
      </YText>
      {contactInfo.map((contact) => (
        <div className="flex items-center h-10.5 mb-5 md:h-13 md:mb-8">
          <div className="flex rounded-lg p-2 items-center justify-center fill-current text-white text-opacity-60 bg-white bg-opacity-15 w-10.5 h-full mr-4 md:w-13 md:mr-5">
            {contact.icon}
          </div>
          <div>
            <YText {...contactTextProps[screenSize]}>{contact.info}</YText>
          </div>
        </div>
      ))}
      {screenSize == ScreenSize.SM && (
        <YButton className="mt-3" shadow onPress={() => setOpenForm(true)}>
          {buttonText}
        </YButton>
      )}
    </div>
  );

  const contactForm =
    screenSize == ScreenSize.MD ? (
      <YContactForm {...formProps} />
    ) : (
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

  return (
    <MotionConfig
      features={[AnimationFeature, ExitFeature, AnimateLayoutFeature]}
    >
      <section className="container pt-30.5 pb-15 md:pt-53.5 md:px-23.5 md:pb-42">
        <div className="relative mr-0 md:w-110 md:ml-auto">
          {infoSection}
          {contactForm}
        </div>
      </section>
    </MotionConfig>
  );
};

const titleProps = {
  [ScreenSize.MD]: {
    fontSize: FontSize['4XL'],
    as: 'h1',
  },
  [ScreenSize.SM]: {
    fontSize: FontSize['XXL'],
    lineHeight: FontLineHeight.Relaxed,
    as: 'h1',
  },
} as Record<ScreenSize, Parameters<typeof YHeading>[0]>;

const textProps = {
  [ScreenSize.MD]: {
    fontSize: FontSize.LG,
    lineHeight: FontLineHeight.Loose,
    as: 'p',
  },
  [ScreenSize.SM]: {
    fontSize: FontSize.SM,
    lineHeight: FontLineHeight.Loose,
    as: 'p',
  },
} as Record<ScreenSize, Parameters<typeof YText>[0]>;

const contactTextProps = {
  [ScreenSize.MD]: {
    lineHeight: FontLineHeight.Relaxed,
    fontWeight: FontWeight.SemiBold,
    as: 'p',
  },
  [ScreenSize.SM]: {
    fontSize: FontSize.SM,
    fontWeight: FontWeight.SemiBold,
    as: 'p',
  },
} as Record<ScreenSize, Parameters<typeof YText>[0]>;

export default ContactSection;
