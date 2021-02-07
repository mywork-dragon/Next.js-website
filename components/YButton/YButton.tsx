import { createElement, useRef } from 'react';
import { ButtonShape, ButtonSize } from '@/enums/components';
import styles from './YButton.module.css';
import { useButton } from '@react-aria/button';
import { AriaButtonProps } from '@react-types/button';

type Props = AriaButtonProps & {
  tag?: keyof JSX.IntrinsicElements;
  size?: ButtonSize;
  shape?: ButtonShape;
};

export default function YButton({
  tag = 'button',
  size = ButtonSize.MD,
  shape = ButtonShape.Square,
  children,
  ...props
}: Props): JSX.Element {
  const CustomTag = tag as keyof JSX.IntrinsicElements;
  const ref = useRef();
  const { buttonProps } = useButton(props as AriaButtonProps, ref);

  const defaultClasses = [
    styles.base,
    'bg-primary',
    'rounded',
    'font-serif',
    'font-semibold',
    'text-white',
  ];

  const shapeClass = shape === ButtonShape.Square ? '' : 'rounded-4xl';

  const className = [...defaultClasses, ...sizeClasses[size], shapeClass].join(
    ' '
  );

  return createElement(
    CustomTag,
    {
      className,
      ref,
      ...buttonProps,
    },
    children,
    ''
  );
}

const sizeClasses = {
  [ButtonSize.XS]: [`ybutton--xs ${styles.xs}`],
  [ButtonSize.SM]: ['px-4.5', 'py-2.5', 'text-xs'],
  [ButtonSize.MD]: ['px-5', 'py-3', 'text-sm'],
  [ButtonSize.LG]: ['px-5', 'py-3', 'text-md'],
};
