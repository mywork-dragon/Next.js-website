import React, { DetailedHTMLProps, useRef, useState } from 'react';
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

  const { inputProps } = useTextField(props as AriaTextFieldProps, ref);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onSubmit(inputText);
  };

  return (
    <form
      className={[className, 'relative h-13 w-81.1'].join(' ')}
      onSubmit={handleSubmit}
    >
      <input
        ref={ref}
        {...inputProps}
        type="text"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
        placeholder={placeholder || 'your email'}
        className="h-full w-full rounded pl-5 text-white bg-white bg-opacity-15"
      ></input>
      <YButton
        type="submit"
        className="absolute right-1.9 top-1.9 bottom-1.9 py-auto"
        buttonSize={ButtonSize.XS}
      >
        {buttonText || 'Sign Up'}
      </YButton>
    </form>
  );
};

export default YInputButton;
