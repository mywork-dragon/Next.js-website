import React, { useEffect, useState } from 'react';

import { ImageFormat } from '@/enums/images';

export const ImageFormatContext = React.createContext<ImageFormat | null>(null);

export const ImgFormatProvider: React.FC = ({ children }) => {
  const [format, setFormat] = useState<ImageFormat | null>(null);

  const supportsWebp = () => {
    const element = document.createElement('canvas');

    if (element.getContext && element.getContext('2d')) {
      return element.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    } else {
      return false;
    }
  };

  useEffect(() => {
    console.log('supports webp', supportsWebp());
    setFormat(() => ImageFormat.WebP);
  }, []);

  return (
    <ImageFormatContext.Provider value={format}>
      {children}
    </ImageFormatContext.Provider>
  );
};
