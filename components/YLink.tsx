import { HTMLAttributes } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link, { LinkProps } from 'next/link';

type Props = LinkProps & HTMLAttributes<HTMLAnchorElement>;

export default function YLink({
  children,
  href,
  ...props
}: Props): JSX.Element {
  const { lang } = useRouter().query as { lang: string };

  const stringHref = typeof href == 'string' ? href : href.pathname;
  const pathname = stringHref.replace('home', '');

  const processedHref = pathname.includes(lang)
    ? pathname
    : pathname.includes('[lang]')
    ? pathname.replace('[lang]', lang)
    : `/${lang}/${pathname.replace(/^\/|\/$/g, '')}`;

  return (
    <Link href={processedHref} {...props} passHref>
      {children}
    </Link>
  );
}
