import { HTMLAttributes } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link, { LinkProps } from 'next/link';

type Props = LinkProps & HTMLAttributes<HTMLAnchorElement>;

export default function YLink({
  children,
  href,
  ...props
}: Props): JSX.Element {
  const { locale } = useRouter();

  const processedHref =
    typeof href != 'string'
      ? href
      : href.replace('home', '').replace('[lang]/', '');

  return (
    <Link href={processedHref} locale={locale} {...props} passHref>
      {children}
    </Link>
  );
}
