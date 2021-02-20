import * as React from 'react';

function SvgIconPlaceholder(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 38 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 29.44L7.463 35.507 9.667 22.66.333 13.562l12.899-1.874L19 0l5.768 11.688 12.899 1.874-9.334 9.098 2.204 12.846L19 29.441z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgIconPlaceholder;
