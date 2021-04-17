import { PageItem, PostItem, Blok } from '@/types/storyblok';
import { Company } from '@/components/HomeTop/HomeTop';
import { FormField } from '@/enums/form';
import { NavItemInterface } from '@/components/YHeaderItem/YHeaderItem';
import SubItem, {
  SubItemInterface,
} from '@/components/YHeaderSubItem/YHeaderSubItem';

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
              console.log(story);
              setStory(event.story);
            }
          );
        }
      }
    );
  }
}

export const mapStoryblokProps = (props: Blok): Blok => {
  const newProps = { ...props };
  const propKeys = Object.keys(newProps);

  if (propKeys.includes('buttonText')) {
    newProps.buttonProps = {
      text: props.buttonText,
      link: props.buttonLink?.cached_url || '',
    };
  }

  if (propKeys.includes('logoLink')) {
    newProps.logo = {
      icon: props.logoIcon,
      link: props.logoLink?.cached_url || '',
    };
  }

  if (propKeys.includes('companies')) {
    newProps.companies = Object.keys(newProps.companies).reduce(
      (companies, companyKey) => {
        const company = newProps.companies[companyKey];
        const newCompany = {} as Company;

        newCompany.title = company.title;
        newCompany.link = company.link.url;
        newCompany.logo = company.logo.filename;

        return [...companies, newCompany];
      },
      []
    );
  }

  if (propKeys.includes('cards')) {
    newProps.cards = newProps.cards.map((card) => {
      const newCard = { ...card };

      newCard.Icon = card.icon;

      return newCard;
    });
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

  return newProps;
};

const processReviewsFrame = (props) => ({
  reviews: props.reviews,
  buttonSM: props.reviewsButtonSm,
  buttonLG: props.reviewsButtonLg,
});

const processArticlesFrame = (article) => ({
  articles: article.articles,
  buttonSM: article.buttonSm,
  buttonLG: article.buttonLg,
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
