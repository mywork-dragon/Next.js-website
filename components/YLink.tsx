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
      : href.includes(locale)
      ? href
      : href.includes('[lang]')
      ? href.replace('[lang]', locale)
      : href === 'home'
      ? `/${locale}`
      : `/${locale}/${href.replace(/^\/|\/$/g, '')}`;

  return (
    <Link href={processedHref} {...props} passHref>
      {children}
    </Link>
  );
}
