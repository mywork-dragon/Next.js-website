import * as React from 'react';

function SvgYoutube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.058 1.887A2.125 2.125 0 0015.58.374C14.265.006 9.006 0 9.006 0S3.748-.006 2.432.346A2.17 2.17 0 00.95 1.869C.603 3.209.6 5.99.6 5.99s-.003 2.796.34 4.123c.194.734.76 1.314 1.48 1.512 1.329.368 6.573.374 6.573.374s5.26.006 6.574-.345a2.133 2.133 0 001.483-1.51c.347-1.34.35-4.121.35-4.121s.017-2.796-.342-4.137zM7.324 8.568l.004-5.138 4.37 2.573-4.374 2.565z"
        fill="#2A5D7D"
      />
    </svg>
  );
}

export default SvgYoutube;
