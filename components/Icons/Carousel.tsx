import * as React from 'react';

function SvgCarousel(props: React.SVGProps<SVGSVGElement>) {
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
        d="M26.222 6H13.778a3.114 3.114 0 00-3.111 3.111V30.89A3.114 3.114 0 0013.777 34h12.445a3.114 3.114 0 003.111-3.111V9.11A3.114 3.114 0 0026.223 6zM4.444 12.222v15.556a3.114 3.114 0 003.112 3.11V9.112a3.114 3.114 0 00-3.112 3.111zm28-3.11v21.777a3.114 3.114 0 003.112-3.111V12.222a3.114 3.114 0 00-3.111-3.11z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCarousel;
