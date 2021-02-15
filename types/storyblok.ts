//region Exported Types
export type PageItem = {
  alternates: Alternate[];
  content: PageComponent;
  created_at: string;
  first_published_at: string;
  full_slug: string;
  group_id: number;
  id: number;
  is_startpage: boolean;
  lang: string;
  meta_data: { [key: string]: any };
  name: string;
  parent_id: number;
  path: string;
  position: number;
  published_at: string;
  release_id: number;
  slug: string;
  sort_by_date: string;
  tag_list: string[];
  translated_slugs: TranslatedSlug[];
  uuid: string;
};

export type PostItem = {
  alternates: [Alternate];
  content: PostComponent;
  created_at: string;
  first_published_at: string;
  full_slug: string;
  group_id: number;
  id: number;
  is_startpage: boolean;
  lang: string;
  meta_data: { [key: string]: any };
  name: string;
  parent_id: number;
  path: string;
  position: number;
  published_at: string;
  release_id: number;
  slug: string;
  sort_by_date: string;
  tag_list: [string];
  translated_slugs: [TranslatedSlug];
  uuid: string;
};

export type PageItems = Collection<PageItem>;

export type PageSlugsResponse = {
  PageItems: Collection<Pick<PageItem, 'full_slug'>>;
};

export type LanguageCodesResponse = {
  Space: Pick<Space, 'languageCodes'>;
};

export type PostItems = Collection<PostItem>;

type Space = {
  domain: string;
  id: number;
  languageCodes: string[];
  name: string;
  version: number;
};
//endregion

//region Mapped Types
type Collection<T> = {
  total: number;
  items: T[];
};
//endregion

//region Other Types
type Alternate = {
  fullSlug: string;
  id: number;
  isFolder: boolean;
  name: string;
  parentId: number;
  published: boolean;
  slug: string;
};

export type PageComponent = {
  _editable: string;
  _uid: string;
  body: string;
  component: string;
};

export type PostComponent = {
  _editable: string;
  _uid: string;
  component: string;
  intro: string;
  long_text: { [key: string]: any };
  title: string;
};

type TranslatedSlug = {
  lang: string;
  name: string;
  path: string;
};
//endregion
