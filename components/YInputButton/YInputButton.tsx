import React, { InputHTMLAttributes, useRef, useState } from 'react';
import { useTextField } from '@react-aria/textfield';
import { AriaTextFieldProps } from '@react-types/textfield';

import YButton from '../YButton/YButton';
import { ButtonSize } from '@/enums/components';

interface Props extends AriaTextFieldProps {
  buttonText?: string;
  placeholder?: string;
  className?: string;
  onSubmit?: (text: string) => unknown;
}

/**
 * @TODO add aria labels
 */

const YInputButton: React.FC<Props> = ({
  buttonText,
  placeholder,
  className,
  onSubmit,
  ...props
}) => {
  const [inputText, setInputText] = useState('');

  const ref = useRef();

  const { inputProps } = useTextField(props as AriaTextFieldProps, ref) as {
    inputProps: InputHTMLAttributes<HTMLInputElement>;
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onSubmit(inputText);
  };

  return (
    <form
      className={[
        className,
        'flex items-center h-13 w-81.1 bg-white rounded bg-opacity-15 overflow-hidden',
      ].join(' ')}
      onSubmit={handleSubmit}
    >
      <input
        ref={ref}
        {...(inputProps as React.InputHTMLAttributes<HTMLInputElement>)}
        type="text"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
        placeholder={placeholder || 'your email'}
        className="h-full w-full pl-5 text-white bg-transparent focus:outline-none"
      />
      <YButton
        type="submit"
        className="m-1.9 whitespace-nowrap py-2.5"
        buttonSize={ButtonSize.XS}
      >
        {buttonText || 'Sign Up'}
      </YButton>
    </form>
  );
};

export default YInputButton;