import { useEffect, useState } from 'react';

import { BreakPoint, ScreenSize } from '@/enums/screenSize';
import { useWindowWidth } from '@react-hook/window-size';

export type ResponsiveImages = {
  [index in ScreenSize]: string[];
};

interface PrefetchHook {
  (images: ResponsiveImages | string[]);
}

/**
 * Hook for prefetching of images, fetches, either all images, on mount, or images with respect to screenSize
 * @param images array of image sources if fetching all on mount, or object with keys of screen size and corresponding array of image sources
 */
const usePrefetch: PrefetchHook = (images) => {
  // check for responsive and assign screen sizes
  const keys = Object.keys(images);
  const responsive = Object.values(ScreenSize).includes(keys[0] as any);

  // create initial state for fetched checks based on responsive variant
  const initialState = responsive
    ? (keys.reduce((acc, curr) => ((acc[curr] = false), acc), {}) as {
        [index in ScreenSize]: boolean;
      })
    : false;

  /**
   * Contains boolean checks if images are fetched, or record of screen size, boolean pair checks for each size
   */
  const [fetched, setFetched] = useState<
    boolean | { [index in ScreenSize]: boolean }
  >(initialState);

  const screenSize =
    useWindowWidth() < BreakPoint.LG ? ScreenSize.MD : ScreenSize.LG;

  useEffect(() => {
    if (responsive) {
      if (!fetched[screenSize]) {
        (images as { [index in ScreenSize]: string[] })[screenSize].forEach(
          (src) => {
            new Image().src = src;
          }
        );
        setFetched({
          ...(fetched as { [index in ScreenSize] }),
          [screenSize]: true,
        });
      }
    } else {
      if (!fetched) {
        (images as string[]).forEach((src) => {
          new Image().src = src;
        });
        setFetched(true);
      }
    }
  }, [screenSize]);
};

export default usePrefetch;
