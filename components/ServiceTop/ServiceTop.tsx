import React, { useRef } from 'react';
import dynamic from 'next/dynamic';

import { Service, ServiceButton } from '@/enums/components';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

import YButton from '@/components/YButton';
import YHeading from '@/components/YHeading';
import YLink from '@/components/YLink';
import YText from '@/components/YText';
import YInputButton from '@/components/YInputButton';

import useBreakpoint from '@/hooks/useBreakpoint';
import { ScreenSize } from '@/enums/screenSize';

const ImageComponent = dynamic(() => import('./ImageComponent'), {
  ssr: false,
});

interface ButtonProps {
  text: string;
  link: string;
  type?: ServiceButton;
  placeholder?: string;
}

interface Props {
  title: string;
  description: string;
  buttonProps: ButtonProps;
  serviceLabel: string;
  service: Service;
}

const ServiceTop: React.FC<Props> = ({
  title,
  description,
  buttonProps,
  serviceLabel,
  service,
}) => {
  const { screenSize } = useBreakpoint();

  const sectionRef = useRef<HTMLElement>(null);

  // handles submit of ServiceButton.Input
  const handleSubmit = (value: string) => {
    /**@TODO integrate with segment */
    console.log(value);
  };

  // scrolls to next section if no link is present in ServiceButton.Button
  const handleScroll = () => {
    const { height } = sectionRef.current.getBoundingClientRect();
    const smHeaderHeight = 62;

    // on smaller screens, offset scroll to by fixed header
    const top = screenSize == ScreenSize.LG ? height : height - smHeaderHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  // applied only if there's no link present for ServiceButton.Button
  const additinalButtonProps = buttonProps.link
    ? {}
    : {
        onPress: handleScroll,
      };

  const button =
    buttonProps.type == ServiceButton.Input ? (
      <YInputButton
        buttonText={buttonProps.text}
        placeholder={buttonProps.placeholder}
        className="max-w-full"
        onSubmit={handleSubmit}
      />
    ) : (
      <YButton
        shadow
        className="px-5 py-3 text-sm leading-6 lg:text-md lg:leading-7"
        {...additinalButtonProps}
      >
        {buttonProps.text}
      </YButton>
    );

  const buttonElement =
    buttonProps.type != ServiceButton.Input && buttonProps.link ? (
      <YLink href={buttonProps.link}>{button}</YLink>
    ) : (
      button
    );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden w-full border-b border-soft"
    >
      <div className="container lg:px-0">
        <div className="relative w-full mb-10 pt-80 lg:pt-0 lg:my-37.5 lg:w-150 lg:h-125 lg:ml-auto lg:mr-0">
          <div className="absolute top-11.5 w-105 h-80 sm:right-0 lg:static lg:h-full lg:w-full">
            <ImageComponent service={service} />
          </div>
          <div className="max-w-md lg:max-w-none lg:w-100 lg:absolute lg:top-1/2 lg:transform lg:-translate-x-120 lg:-translate-y-1/2">
            <YHeading
              fontSize={FontSize.XS}
              fontWeight={FontWeight.Regular}
              className="text-primary mb-2 lg:mb-3 lg:text-base"
              as="h2"
            >
              {serviceLabel}
            </YHeading>
            <YHeading
              fontSize={FontSize.XL}
              lineHeight={FontLineHeight.Relaxed}
              className="text-white w-37.5 mb-2 lg:mb-3 lg:w-full lg:text-4xl lg:leading-21"
              as="h1"
            >
              {title}
            </YHeading>
            <YText
              fontSize={FontSize.SM}
              lineHeight={FontLineHeight.Relaxed}
              className="text-gray-300 mb-5 lg:mb-6 lg:w-94.6 lg:text-base lg:leading-11"
              as="p"
            >
              {description}
            </YText>
            {buttonElement}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTop;
