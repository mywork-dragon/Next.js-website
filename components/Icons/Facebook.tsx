import * as React from 'react';

function SvgFacebook(props: React.SVGProps<SVGSVGElement>) {
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
        d="M17 0H1a1 1 0 00-1 1v16a1 1 0 001 1h8.615v-6.96H7.277V8.315h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325V8.31h2.697l-.35 2.725h-2.348V18H17a1 1 0 001-1V1a1 1 0 00-1-1z"
        fill="#2A5D7D"
      />
    </svg>
  );
}

export default SvgFacebook;
