import React, { useMemo, useState } from 'react';
import dynamic from 'next/dynamic';

import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';
import { ScreenSize } from '@/enums/screenSize';
import { FormField } from '@/enums/form';

import { FormElementProps, InputField, SubmitHandler } from './FormElementSM';

import YHeading from '@/components/YHeading';
import YText from '@/components/YText';
import YButton from '../YButton';
import {
  AnimateLayoutFeature,
  AnimationFeature,
  ExitFeature,
  MotionConfig,
} from 'framer-motion';

import useBreakpoint from '@/hooks/useBreakpoint';

interface ContactInfo {
  icon: string;
  info: string;
}

interface Props extends FormElementProps {
  title: string;
  description: string;
  buttonText: string;
  contactInfo: ContactInfo[];
}

const ContactSection: React.FC<Props> = ({
  title,
  description,
  buttonText,
  contactInfo,
  ...props
}) => {
  const { screenSize, screenReady } = useBreakpoint();

  const [openForm, setOpenForm] = useState(false);

  const FormElement = useMemo(
    () =>
      dynamic(
        () =>
          screenSize == ScreenSize.SM
            ? import('./FormElementSM')
            : import('./FormElementLG'),
        { ssr: false }
      ) as React.FC<
        FormElementProps & {
          openForm?: boolean;
          setOpenForm?: (open: boolean) => void;
          onFormSubmit: SubmitHandler;
        }
      >,
    [screenSize]
  );

  const infoSection = (
    <div className="w-full lg:w-109.5 lg:absolute lg:-left-120 lg:top-1/2 lg:transform lg:-translate-y-1/2">
      <YHeading
        fontSize={FontSize['XXL']}
        lineHeight={FontLineHeight.Relaxed}
        className="text-white mb-1 lg:mb-2 lg:leading-22 lg:text-4xl"
        as="h1"
      >
        {title}
      </YHeading>
      <YText
        fontSize={FontSize.SM}
        lineHeight={FontLineHeight.Loose}
        className="text-gray-300 mb-6 lg:mb-15 lg:text-lg lg:leading-12"
        as="p"
      >
        {description}
      </YText>
      {contactInfo.map(({ icon, info }, index) => {
        const Icon = dynamic(() => import(`@/assets/icons/${icon}.svg`));

        return (
          <div
            key={index}
            className="flex items-center h-10.5 mb-5 lg:h-13 lg:mb-8"
          >
            <div className="flex rounded-lg p-2 items-center justify-center fill-current text-white text-opacity-60 bg-white bg-opacity-15 w-10.5 h-full mr-4 lg:w-13 lg:mr-5">
              <Icon />
            </div>
            <div>
              <YText
                fontSize={FontSize.SM}
                fontWeight={FontWeight.SemiBold}
                className="text-white lg:text-base lg:leading-9"
                as="p"
              >
                {info}
              </YText>
            </div>
          </div>
        );
      })}
      <YButton
        className="mt-3 lg:hidden"
        shadow
        onPress={() => setOpenForm(true)}
      >
        {buttonText}
      </YButton>
    </div>
  );

  const handleSubmit: SubmitHandler = (values) => {
    /**@TODO connect to segment */
    console.log(values);
  };

  return (
    <MotionConfig
      features={[AnimationFeature, ExitFeature, AnimateLayoutFeature]}
    >
      <section className="container pt-30.5 pb-15 lg:pt-53.5 lg:px-23.5 lg:pb-42">
        <div className="relative max-w-lg mx-auto lg:max-w-none lg:mx-0 lg:w-110 lg:ml-auto">
          {screenReady && (
            <>
              <div className="lg:">{infoSection}</div>
              <FormElement
                {...props}
                openForm={openForm}
                setOpenForm={setOpenForm}
                onFormSubmit={handleSubmit}
              />
            </>
          )}
        </div>
      </section>
    </MotionConfig>
  );
};

export default ContactSection;
