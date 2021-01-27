import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  title?: string;
  description?: string;
}

export default function YButton({
  title = 'Title',
  description = '',
  children,
  ...props
}: Props): JSX.Element {
  return (
    <div>
      <span>{title}</span>
      <span>{description}</span>
      <button {...props}>{children}</button>
    </div>
  );
}
