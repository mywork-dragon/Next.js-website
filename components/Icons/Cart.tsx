import * as React from 'react';

function SvgCart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M33.5 8.084H5v3h3.45l5.282 14.524a3.005 3.005 0 002.818 1.975H29v-3H16.55l-1.092-3H29c.6 0 1.143-.357 1.378-.909l4.5-10.5a1.502 1.502 0 00-1.379-2.09zM17.75 33.583a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM26.75 33.583a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCart;
