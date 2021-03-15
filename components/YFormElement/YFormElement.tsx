import React, { useRef, createElement } from 'react';
import { useTextField } from '@react-aria/textfield';
import { AriaTextFieldProps } from '@react-types/textfield';

import { InputStyle, InputType } from '@/enums/components';

import YText from '@/components/YText';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

interface Props extends AriaTextFieldProps {
  style?: InputStyle;
  type?: InputType;
  className?: string;
  info?: string;
  error?: boolean;
  errorMessage?: string;
}

const YFormElement: React.FC<Props> = ({
  style = InputStyle.Light,
  type = InputType.Input,
  className = '',
  info,
  error,
  errorMessage,
  ...props
}) => {
  const { label } = props;
  const ref = useRef();

  const { labelProps, inputProps } = useTextField(
    props as AriaTextFieldProps,
    ref
  );

  const inputElement = createElement(type, {
    ref,
    ...inputProps,
    className: getInputClasses(type, style),
  });

  return (
    <div className={addBasicWidth(className)}>
      <label {...labelProps}>
        <YText
          fontWeight={FontWeight.SemiBold}
          className="text-gray-300"
          fontSize={FontSize.XS}
        >
          {label}
        </YText>
      </label>
      {inputElement}
      {info && (
        <YText className="text-gray-400" {...messageProps}>
          {info}
        </YText>
      )}
      {error && (
        <YText className="text-red-300" {...messageProps}>
          {errorMessage}
        </YText>
      )}
    </div>
  );
};

const messageProps = {
  fontSize: FontSize.XXS,
  lineHeight: FontLineHeight.Relaxed,
  as: 'p',
} as Parameters<typeof YText>[0];

const addBasicWidth = (className: string) =>
  className.includes(' w') ? className : `${className} w-65`;

const getInputClasses = (type: InputType, style: InputStyle) =>
  [...baseClasses, sizeClasses[type], colorClasses[style]].join(' ');

const baseClasses = [
  'w-full',
  'mt-3',
  'py-4',
  'px-5',
  'mb-1',
  'rounded',
  'text-gray-300',
  'border-none',
  'border',
  'outline-none',
  'border-blue-100',
  'focus:border-solid',
];

const sizeClasses = {
  [InputType.Input]: 'h-13',
  [InputType.TextArea]: 'h-25 resize-none no-scrollbar',
};

const colorClasses = {
  [InputStyle.Dark]: 'bg-white bg-opacity-15',
  [InputStyle.Light]: 'bg-gray-100',
};

export default YFormElement;
