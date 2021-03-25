import Link, { LinkProps } from 'next/link';
import { HTMLAttributes, forwardRef } from 'react';

type Props = LinkProps & HTMLAttributes<HTMLAnchorElement>;

export default function YLink({
  children,
  href,
  ...props
}: Props): JSX.Element {
  // TODO: Fix Localization
  return (
    <Link href={href} {...props}>
      <>{children}</>
    </Link>
  );
}
