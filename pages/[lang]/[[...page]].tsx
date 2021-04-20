import { useEffect, useState } from 'react';
import graphqlClient from '@/utils/graphql';
import {
  LanguageCodesResponse,
  PageItem,
  PageSlugsResponse,
  PostItem,
} from '@/types/storyblok';
import { ApolloQueryResult } from '@apollo/client';
import { NextApiRequest } from 'next';
import { initEditor } from '@/utils/storyblok';
import { GET_PAGE, GET_PAGE_SLUGS } from '@/libs/api/page';
import {
  m as motion,
  MotionConfig,
  AnimationFeature,
  ExitFeature,
  AnimatePresence,
} from 'framer-motion';

import Layout from '@/components/Layout';
import Page from '@/components/Page';
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

  const trasnsitionProps = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0 },
    transition: {
      duration: 0.4,
      type: 'tween',
    },
  };

  return (
    <MotionConfig features={[AnimationFeature, ExitFeature]}>
      <script
        src={
          '//app.storyblok.com/f/storyblok-latest.js?t=BKFRTWedKaTnP3sHlkRQBQtt'
        }
      />
      <Layout headerContent={headerContent} footerContent={footerContent}>
        <AnimatePresence exitBeforeEnter>
          <motion.main key={contentOfStory._uid} {...trasnsitionProps}>
            <Page content={contentOfStory} />
          </motion.main>
        </AnimatePresence>
      </Layout>
    </MotionConfig>
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
  preview = true,
  params,
}: {
  preview: boolean;
  params?: { lang: string; page: string[] };
}): Promise<StaticPropsResult> => {
  const { lang } = params;
  const page = params.page ? params.page.join('/') : 'home';

  const id = lang === 'en' ? page : `${lang}/${page}`;

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
  preview = true,
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
