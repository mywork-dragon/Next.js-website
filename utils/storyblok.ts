import { PageItem, PostItem, Blok } from '@/types/storyblok';

import { FormField } from '@/enums/form';
import { ScreenSize } from '@/enums/screenSize';

import { NavItemInterface } from '@/components/YHeaderItem/YHeaderItem';
import { SubItemInterface } from '@/components/YHeaderSubItem/YHeaderSubItem';
import { ServiceButton } from '@/enums/components';

export function initEditor([story, setStory]: [
  PageItem | PostItem,
  (story) => void
]): void {
  if (window?.storyblok) {
    window.storyblok.init();

    // reload on Next.js page on save or publish event in Storyblok Visual Editor
    window.storyblok.on(['change', 'published'], () => location.reload(true));

    // Update state.story on input in Visual Editor
    // this will alter the state and replaces the current story with a current raw story object and resolve relations
    window.storyblok.on(
      'input',
      (event: { story: { id: string; content: { _uid: string } } }) => {
        if (event.story.content._uid === story.content._uid) {
          event.story.content = window.storyblok.addComments(
            event.story.content,
            event.story.id
          );
          window.storyblok.resolveRelations(
            event.story,
            ['featured-articles.articles'],
            () => {
              setStory(event.story);
            }
          );
        }
      }
    );
  }
}

export const mapStoryblokProps = (props: Blok): Blok => {
  let newProps = { ...props };
  const propKeys = Object.keys(newProps);

  if (propKeys.includes('locales')) {
    newProps.locales = props.locales.data.Space.languageCodes;
  }

  if (propKeys.includes('buttonText') && !propKeys.includes('formButtonText')) {
    const {
      buttonText,
      buttonLink,
      buttonType,
      buttonPlaceholder,
      ...tempProps
    } = newProps;

    let additionalButtonProps =
      buttonType == ServiceButton.Input
        ? {
            type: buttonType,
            placeholder: buttonPlaceholder,
          }
        : {};

    newProps = {
      ...tempProps,
      buttonProps: {
        text: props.buttonText,
        link: props.buttonLink?.cached_url || '',
        ...additionalButtonProps,
      },
    };
  }

  if (propKeys.includes('logoLink')) {
    const { logoIcon, logoLink, ...tempProps } = newProps;
    newProps = {
      ...tempProps,
      logo: {
        icon: props.logoIcon,
        link: props.logoLink.cached_url || '',
      },
    };
  }

  if (propKeys.includes('partners')) {
    newProps.partners = props.partners.map(({ link, ...props }) => ({
      ...props,
      link: link.url,
    }));
  }

  if (propKeys.includes('nameLabel')) {
    const fields = Object.values(FormField).reduce(
      (acc, curr) => ((acc[curr] = processFormField(curr, props)), acc),
      {}
    );
    newProps.fields = fields;
  }

  if (propKeys.includes('articlesFrames')) {
    newProps.frames = [];
    newProps.frames[0] = processReviewsFrame(props);
    newProps.frames = [
      newProps.frames[0],
      ...props.articlesFrames.map((article) => processArticlesFrame(article)),
    ];
  }

  if (propKeys.includes('navItems')) {
    newProps.navItems = processNavItems(props.navItems);
  }

  if (propKeys.includes('linksFirst')) {
    newProps = processFooterProps(props);
  }

  if (propKeys.includes('services')) {
    newProps.services = props.services.map((service) => ({
      ...service,
      buttonLink: service.buttonLink.cached_url,
    }));
  }

  if (propKeys.includes('cards')) {
    newProps.cards = props.cards.map(({ link, ...card }) => ({
      ...card,
      link: link ? link.cached_url : '',
    }));
  }

  if (propKeys.includes('heroImageLG')) {
    const newHero = { ...props.heroImageLG };
    if (props.heroImageSM && props.heroImageSM.filename) {
      newHero.filename = props.heroImageSM.filename;
      newHero.srcSet = { [ScreenSize.LG]: props.heroImageLG.filename };
    }
    newProps.heroImage = newHero;
  }

  return newProps;
};

const processReviewsFrame = (props) => ({
  reviews: props.reviews,
  buttonSM: props.reviewsButtonSm,
  buttonMD: props.reviewsButtonMd,
});

const processArticlesFrame = (article) => ({
  articles: article.articles,
  buttonSM: article.buttonSm,
  buttonMD: article.buttonMd,
});

const processFormField = (field: FormField, props: any) => {
  return {
    label: props[`${field}Label`],
    placeholder: props[`${field}Placeholder`],
    errorMessage: props[`${field}ErrorMessage`],
  };
};

interface LinkObject {
  cached_url: string;
}

const processNavItems = (
  navItems: Array<
    NavItemInterface & {
      link: LinkObject;
      subItems: Array<SubItemInterface & { link: LinkObject }>;
    }
  >
) =>
  navItems.map((navItem) => {
    const link = navItem.link.cached_url;
    return navItem.subItems?.length
      ? {
          ...navItem,
          link,
          subItems: navItem.subItems.map((subItem) => ({
            ...subItem,
            link: (subItem.link as any).cached_url,
          })),
        }
      : { link, text: navItem.text };
  });

const processFooterProps = (props) => ({
  links: {
    first: props.linksFirst.map(({ text, link }) => ({
      link: link.cached_url || link.cachedUrl,
      text,
    })),
    second: props.linksSecond.map(({ text, link }) => ({
      link: link.cached_url || link.cachedUrl,
      text,
    })),
  },
  content: {
    heading: props.contentHeading,
    description: props.contentDescription,
  },
  contactDetails: {
    street: props.street,
    postalCode: props.postalCode,
    city: props.city,
    email: props.email,
    phoneNumber: {
      label: props.phoneLabel,
      value: props.phoneValue,
    },
  },
  contactButton: props.contactButton,
  socialMedia: props.socialMedia.map(({ link, icon, name }) => ({
    icon,
    link: link.cached_url || link.cachedUrl,
    name,
  })),
});
