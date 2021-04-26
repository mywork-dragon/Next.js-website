import { ScreenSize } from '@/enums/screenSize';

const props = {
  serviceLabel: 'SERVICE',
  description:
    'The integration & implementation part of our services is where we help companies integrate the tools we offer.',
  buttonProps: {
    link: '/',
    text: 'Learn More',
  },
};

export const integrationImplementation = {
  ...props,
  title: 'Integration/ Implementation',
  heroImage: {
    filename: '',
    alt: 'alt-text',
  },
};
export const affiliateMarketing = {
  ...props,
  title: 'Affiliate Marketing',
  heroImage: {
    filename:
      'https://a.storyblok.com/f/98632/1080x897/a00d768b1f/affiliate-marketing.png',
    alt: 'alt-text',
  },
};
export const onlineAdvertising = {
  ...props,
  title: 'Online Advertising',
  heroImage: {
    filename:
      'https://a.storyblok.com/f/98632/1080x977/9ca280aba5/online-advertising.png',
    alt: 'alt-text',
  },
};
export const emailMarketing = {
  ...props,
  title: 'Email Marketing',
  heroImage: {
    filename:
      'https://a.storyblok.com/f/98632/1080x824/97f3fe3821/email-marketing-mobile.png',
    alt: 'alt-text',
    srcSet: {
      [ScreenSize.LG]:
        'https://a.storyblok.com/f/98632/1080x904/6cd98fb903/email-marketing.png',
    },
  },
};
export const personalization = {
  ...props,
  title: 'Personalization',
  heroImage: {
    filename:
      'https://a.storyblok.com/f/98632/1080x746/bce904fd07/personalization-mobile.png',
    alt: 'alt-text',
    srcSet: {
      [ScreenSize.LG]:
        'https://a.storyblok.com/f/98632/1080x1065/2e920eb87f/personalization.png',
    },
  },
};
export const marketingAutomation = {
  ...props,
  title: 'Marketing Automation',
  heroImage: {
    filename:
      'https://a.storyblok.com/f/98632/1080x1067/d3b82ada8c/marketing-automation.png',
    alt: 'alt-text',
    srcSet: {
      [ScreenSize.LG]:
        'https://a.storyblok.com/f/98632/1080x1030/cfc42e8f24/marketing-automation-mobile.png',
    },
  },
};
export const dataAnalytics = {
  ...props,
  title: 'Data & Analytics',
  heroImage: {
    filename:
      'https://a.storyblok.com/f/98632/1080x821/d179f3801c/data-analytics-mobile.png',
    alt: 'alt-text',
  },
  srcSet: {
    [ScreenSize.LG]:
      'https://a.storyblok.com/f/98632/1080x985/a1e9e7f8e0/data-analytics.png',
  },
};
export const conversionOptimization = {
  ...props,
  title: 'Conversion Optimization',
  heroImage: {
    filename:
      'https://a.storyblok.com/f/98632/1080x894/8fa5e6db6e/conversion-optimization.png',
    alt: 'alt-text',
  },
};
