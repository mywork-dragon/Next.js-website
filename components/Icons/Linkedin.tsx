import * as React from 'react';

function SvgLinkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 0H1a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V1a1 1 0 00-1-1zM5.339 15.337H2.667v-8.59h2.672v8.59zM4.003 5.574a1.548 1.548 0 110-3.096 1.548 1.548 0 010 3.096zm11.335 9.763h-2.669V11.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H7.013v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71h.001z"
        fill="#2A5D7D"
      />
    </svg>
  );
}

export default SvgLinkedin;
