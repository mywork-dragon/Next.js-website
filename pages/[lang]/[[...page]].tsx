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
} from '@/types/storyblok';
import { ApolloQueryResult } from '@apollo/client';
import { NextApiRequest } from 'next';
import { GET_LANGUAGES } from '@/libs/api/app';

function Home({ res }: DefaultProps<{ PageItem: PageItem }>): JSX.Element {
  const [story, setStory] = useState<PageItem>(res.data.PageItem);
  const contentOfStory = story.content;

  useEffect(() => {
    setStory(res.data.PageItem);
  }, [res]);

  useEffect(() => {
    setTimeout(() => initEditor([story, setStory]), 200);
  }, []);

  return (
    <Layout>
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

type DefaultProps<T> = {
  res: ApolloQueryResult<T>;
};

interface StaticPropsResult {
  props: DefaultProps<{ PageItem: PageItem }>;
}

export const getStaticProps = async ({
  preview = false,
  params,
}: {
  preview: boolean;
  params?: { lang: string; page: string[] };
}): Promise<StaticPropsResult> => {
  const { lang } = params;
  const page = params.page ? params.page.join('') : 'home';

  const id = lang === 'en' ? page : `${lang}/${page}`;

  const res: ApolloQueryResult<{ PageItem: PageItem }> = await graphqlClient({
    preview,
  }).query({
    query: GET_PAGE,
    variables: {
      id,
    },
  });

  return {
    props: {
      res,
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
