import React, { AriaAttributes, useState } from 'react';

import YButton from '../YButton/YButton';
import { ButtonSize } from '@/enums/components';

interface Props extends AriaAttributes {
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
}) => {
  const [inputText, setInputText] = useState('');

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
