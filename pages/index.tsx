import type { NextPage } from 'next';
import Head from 'next/head';
import { getPosts, IPost } from 'services/data';
import { SWRConfig } from 'swr';
import { GetServerSidePropsResult } from 'next';
import PostList from 'components/PostList';
import * as S from './index.styled';

interface IndexPageProps {
  posts: IPost[];
}

const Index = ({ posts }: IndexPageProps) => {
  return (
    <SWRConfig
      value={{
        fallback: {
          'api/posts': { posts }
        },
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
        refreshInterval: 1000
      }}
    >
      <PostList />
    </SWRConfig>
  );
};

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<IndexPageProps>
> {
  return {
    props: { posts: getPosts() }
  };
}

export default Index;
