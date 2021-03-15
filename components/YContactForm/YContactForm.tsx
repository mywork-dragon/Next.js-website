import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import { InputStyle, InputType, ToggleType } from '@/enums/components';
import { BreakPoint, ScreenSize } from '@/enums/screenSize';
import { FontLineHeight, FontSize } from '@/enums/font';

import YFormElement from '@/components/YFormElement';
import YButton from '@/components/YButton';
import YHeading from '@/components/YHeading';
import YMenuToggle from '@/components/YMenuToggle';

import styles from './YContactForm.module.css';

import filterPosition from '@/libs/utils/filterPosition';

import useValidate from '@/hooks/useValidate';

enum Field {
  Name = 'name',
  PhoneNumber = 'phoneNumber',
  Email = 'email',
  Comment = 'comment',
}

interface InputField {
  label: string;
  placeholder: string;
  errorMessage?: string;
  info?: string;
  type?: InputType;
}

interface Props {
  title: string;
  fields: Record<string, InputField>;
  onSubmit: (values: Record<string, string>) => any;
  buttonText: string;
  className?: string;
  style?: InputStyle;
  onClose?: () => void;
}

const YContactForm: React.FC<Props> = ({
  onSubmit,
  buttonText,
  className,
  style = InputStyle.Light,
  title,
  fields,
  onClose,
}) => {
  const screenSize =
    useWindowWidth() < BreakPoint.MD ? ScreenSize.SM : ScreenSize.MD;

  const fieldNames = Object.keys(fields);

  const {
    handleChange,
    handleSubmit,
    disabled,
    validationErrors,
    formValues,
  } = useValidate(fieldNames, onSubmit, validationRegex);

  // form title displayed on mobile
  const heading = screenSize == ScreenSize.SM && (
    <YHeading
      fontSize={FontSize.XL}
      lineHeight={FontLineHeight.Relaxed}
      as="h2"
    >
      {title}
    </YHeading>
  );

  // menu toggle on small screen
  const toggle = screenSize == ScreenSize.SM && (
    <YMenuToggle
      onClick={() => onClose()}
      open={false}
      className="absolute top-5 right-5 transform scale-125 rotate-45 cursor-pointer"
      type={ToggleType.Plus}
    />
  );

  // form inner container with input fields
  const formElements = (
    <div className={formInnerClasses.join(' ')}>
      {fieldNames.map((field) => {
        const formField = fields[field];
        return (
          <YFormElement
            key={field}
            className={getFieldClasses(formField.type, screenSize)}
            onChange={(value) => handleChange(value, field)}
            value={formValues[field]}
            {...formField}
            error={validationErrors[field]}
            style={style}
          />
        );
      })}
    </div>
  );

  // fade overlay above button on mobile
  const fade = screenSize == ScreenSize.SM && (
    <div
      className={['absolute bottom-22.5 h-15 w-full', styles.fade].join(' ')}
    />
  );

  // submit button
  const button = (
    <YButton
      className="absolute bottom-8 w-full md:static md:w-43.6 md:mt-3"
      type="submit"
      isDisabled={disabled}
      shadow
    >
      {buttonText}
    </YButton>
  );

  return (
    <div
      className={filterPosition(
        [...containerClasses, ...color[style]],
        className
      )}
    >
      {toggle}
      <form onSubmit={handleSubmit} className={formClasses.join(' ')}>
        {heading}
        {formElements}
        {fade}
        {button}
      </form>
    </div>
  );
};

// outer container
const containerClasses = ['md:px-15', 'md:py-12', 'md:rounded-lg'];

// form element
const formClasses = [
  'absolute',
  'top-10',
  'left-10',
  'right-10',
  'bottom-8',
  'md:static',
  'md:w-full',
];

// inner form -> input fields container (to enable scrolling)
const formInnerClasses = [
  'absolute',
  'overflow-auto',
  'no-scrollbar',
  'top-15',
  'w-full',
  'bottom-22.5',
  'md:static',
];

const color = {
  [InputStyle.Light]: ['bg-white'],
  [InputStyle.Dark]: ['bg-blue-200'],
};

const getFieldClasses = (type: InputType, screenSize: ScreenSize) =>
  [
    'mb-5',
    screenSize == ScreenSize.MD && type == InputType.TextArea
      ? 'w-73.6'
      : 'w-full',
  ].join(' ');

const validationRegex = {
  [Field.Name]: /(.|\s)*\S(.|\s)*/,
  [Field.Email]: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  [Field.PhoneNumber]: /[0-9]+/,
};
export default YContactForm;
