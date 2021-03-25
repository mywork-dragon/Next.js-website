import { useState, useEffect } from 'react';
import { useWindowWidth } from '@react-hook/window-size';

const useBreakpoint = (): number | undefined => {
  const [clientWidth, setClientWidth] = useState(null);

  const screenWidth = useWindowWidth();

  useEffect(() => {
    if (screenWidth) setClientWidth(screenWidth);
  }, [screenWidth]);

  return clientWidth;
};

export default useBreakpoint;
