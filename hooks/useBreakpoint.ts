import { useState, useEffect } from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import { BreakPoint, ScreenSize } from '@/enums/screenSize';

interface BreakPointHook {
  (extendScreensizes?: ScreenSize[]): {
    screenSize: ScreenSize;
    screenReady: boolean;
  };
}

/**
 *
 * @param extendScreensizes extend required screen sizes (default is ScreenSize.SM and ScreenSize.MD)
 * @returns object containing screenSize (a current screenSize) and screenReady (boolean set when screenSize is processed, on mount)
 */
const useBreakpoint: BreakPointHook = (extendScreensizes = []) => {
  const requiredScreenSizes = new Set([
    ScreenSize.SM,
    ScreenSize.MD,
    ...extendScreensizes,
  ]);

  const screenWidth = useWindowWidth();

  const screenSize = determineBreakpoint(screenWidth, requiredScreenSizes);

  const [screenReady, setScreenReady] = useState(false);

  console.log('screen width', screenWidth);

  // set ready when screen size is determined, for sensitive content i.e. Background grid
  useEffect(() => {
    if (screenWidth && !screenReady) {
      setScreenReady(true);
    }
  }, [screenWidth]);

  return { screenSize, screenReady };
};

const determineBreakpoint = (
  screenWidth: number,
  requiredScreenSizes: Set<ScreenSize>
) =>
  screenWidth > BreakPoint.MD && requiredScreenSizes.has(ScreenSize.MD)
    ? ScreenSize.MD
    : ScreenSize.SM;

export default useBreakpoint;
