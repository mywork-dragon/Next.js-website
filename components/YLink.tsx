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

  const processedHref =
    typeof href != 'string'
      ? href
      : href.includes(lang)
      ? href
      : href.includes('[lang]')
      ? href.replace('[lang]', lang)
      : `/${lang}/${href.replace(/^\/|\/$/g, '')}`;

  return (
    <Link href={processedHref} {...props} passHref>
      {children}
    </Link>
  );
}
