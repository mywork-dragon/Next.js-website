import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import graphqlClient from '@/utils/graphql';
import Page from '@/components/Page';
import { initEditor } from '@/utils/storyblok';
import { GET_PAGE, GET_PAGE_SLUGS } from '@/libs/api/page';
import {
  LanguageCodesResponse,
  PageItem,
  PageSlugsResponse,
  PostItem,
} from '@/types/storyblok';
import { ApolloQueryResult } from '@apollo/client';
import { NextApiRequest } from 'next';
import { GET_LANGUAGES } from '@/libs/api/app';

function Home({ res, locales }: StaticPropsResult['props']): JSX.Element {
  const [story, setStory] = useState<PageItemWithLayout>(res.data.PageItem);
  const contentOfStory = story.content;

  const headerContent = contentOfStory.header
    ? { ...contentOfStory.header.content, locales }
    : undefined;

  const footerContent = contentOfStory.footer
    ? contentOfStory.footer.content
    : undefined;

  /**
   * @NOTE This seems unnecessary as res is passed as prop,
   * causing component to remount on each change
   * and initialize story state with the same value as here
   * */
  useEffect(() => {
    setStory(res.data.PageItem);
  }, [res]);

  useEffect(() => {
    setTimeout(() => initEditor([story, setStory]), 200);
  }, []);

  return (
    <Layout headerContent={headerContent} footerContent={footerContent}>
      <Page content={contentOfStory} />
      <script
        src={
          '//app.storyblok.com/f/storyblok-latest.js?t=BKFRTWedKaTnP3sHlkRQBQtt'
        }
      />
    </Layout>
  );
}

export default Home;

type PageItemWithLayout = PageItem & {
  content: PageItem['content'] & {
    header?: PostItem;
    footer?: PostItem;
  };
};

type DefaultProps<T> = {
  res: ApolloQueryResult<T>;
};

interface StaticPropsResult {
  props: DefaultProps<{ PageItem: PageItem }> & {
    locales: ApolloQueryResult<LanguageCodesResponse>;
  };
}

export const getStaticProps = async ({
  preview = false,
  params,
  locale,
}: {
  preview: boolean;
  params?: { lang: string; page: string[] };
  locale: string;
}): Promise<StaticPropsResult> => {
  const page = params.page ? params.page.join('/') : 'home';

  const id = locale === 'en' ? page : `${locale}/${page}`;

  const pageDataPromise: Promise<
    ApolloQueryResult<{ PageItem: PageItem }>
  > = graphqlClient({
    preview,
  }).query({
    query: GET_PAGE,
    variables: {
      id,
    },
  });

  const localesPromise: Promise<
    ApolloQueryResult<LanguageCodesResponse>
  > = graphqlClient({ preview }).query({
    query: GET_LANGUAGES,
  });

  const [res, locales] = await Promise.all([pageDataPromise, localesPromise]);

  return {
    props: {
      res,
      locales,
    },
  };
};

interface StaticPathResults {
  paths: string[];
  fallback: boolean;
}

export const getStaticPaths = async ({
  preview = false,
}: NextApiRequest): Promise<StaticPathResults> => {
  const result: {
    paths: string[];
    fallback: boolean;
  } = {
    paths: [],
    fallback: false,
  };

  // TODO: Refactor to use Promise.all
  const promise1: Promise<ApolloQueryResult<PageSlugsResponse>> = graphqlClient(
    {
      preview,
    }
  ).query({
    query: GET_PAGE_SLUGS,
  });

  const promise2: Promise<
    ApolloQueryResult<LanguageCodesResponse>
  > = graphqlClient({ preview }).query({
    query: GET_LANGUAGES,
  });

  const [response, response2] = await Promise.all([promise1, promise2]);

  if (!response.data?.PageItems.items.length || !response2.data?.Space) {
    return result;
  }

  [...response2.data?.Space.languageCodes, 'en'].forEach((lang: string) => {
    response.data?.PageItems.items.forEach((item) => {
      const path = `/${lang}/${
        item.full_slug === 'home' ? '' : item.full_slug
      }`;

      result.paths.push(path);
    });
  });

  return result;
};
