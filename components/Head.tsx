import React from 'react';
import NextHead from 'next/head';

import { __SbImageServer__ } from '@/libs/constants';

export interface MetaContent {
  title: string;
  description?: string;
  keywords?: string;
}

const Head = ({ title, description, keywords }: MetaContent): JSX.Element => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || 'YEA Personalize'}</title>
    <meta name="description" content={description || ''} />
    <meta name="keywords" content={keywords || ''} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="preload"
      href={`${__SbImageServer__}/fit-in/2013x1542/filters:fill(transparent):format(webp)/f/98632/2013x1542/3fc365e9cf/hometop-grid-sm.png`}
      as="image"
    />
    <link
      rel="preload"
      href={`${__SbImageServer__}/fit-in/1616x1542/filters:fill(transparent):format(webp)/f/98632/1616x1542/154b45d9c1/hometop-grid-lg.png`}
      as="image"
    />
    <script
      defer
      src={
        '//app.storyblok.com/f/storyblok-latest.js?t=BKFRTWedKaTnP3sHlkRQBQtt'
      }
    />
  </NextHead>
);

export default Head;
