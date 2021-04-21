import { useEffect, useState } from 'react';
import graphqlClient from '@/utils/graphql';
import {
  LanguageCodesResponse,
  PageItem,
  PageSlugsResponse,
  PostComponent,
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

import { PageBackground } from '@/enums/components';

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

  const transitionProps = {
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
          <motion.main key={contentOfStory._uid} {...transitionProps}>
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
    backgroundGradient?: PageBackground;
    body: PostComponent[];
  };
};

type DefaultProps<T> = {
  res: ApolloQueryResult<T>;
};

interface StaticPropsResult {
  props: DefaultProps<{ PageItem: PageItemWithLayout }> & {
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
    ApolloQueryResult<{ PageItem: PageItemWithLayout }>
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

interface PathInterface {
  params: {
    page: string[];
  };
  locale: string;
}

interface StaticPathResults {
  paths: PathInterface[];
  fallback: boolean;
}

export const getStaticPaths = async ({
  preview = false,
}: NextApiRequest): Promise<StaticPathResults> => {
  const result: {
    paths: PathInterface[];
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
      const path = {
        params: {
          page: item.full_slug === 'home' ? [''] : [item.full_slug],
        },
        locale: lang,
      };

      result.paths.push(path);
    });
  });

  return result;
};
