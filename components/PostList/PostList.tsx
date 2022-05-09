import React from 'react';
import useSWR, { KeyedMutator } from 'swr';
import axios from 'axios';
import { IPost } from 'services/data';
import Post from 'components/Post/Post';
import * as S from './PostList.styled';
import { AnimatePresence } from 'framer-motion';

const PostList = () => {
  const { data: posts } = useSWR<IPost[]>('api/posts');

  if (!posts) {
    return <p>loading...</p>;
  }

  return (
    <S.Main>
      <AnimatePresence>
        {posts.length > 0 &&
          posts.map((item: IPost) => <Post key={item.id} post={item} />)}

        <S.AddButton
          transition={{
            duration: 0.5
          }}
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.25,
              ease: 'easeOut'
            }
          }}
          layout
          key="add-button"
          onClick={(e) => {
            e.preventDefault();

            axios.post('api/posts', {
              data: {
                title: 'Title',
                text: 'Description'
              }
            });
          }}
        >
          Add new post
        </S.AddButton>
      </AnimatePresence>
    </S.Main>
  );
};

export default PostList;
