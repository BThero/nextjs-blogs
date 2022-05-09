import React from 'react';
import { IPost } from 'services/data';
import * as S from './Post.styled';
import EditableWrapper from 'components/EditableWrapper';
import axios from 'axios';
import { AnimatePresence } from 'framer-motion';

const Post = ({ post }: { post: IPost }) => {
  return (
    <S.Container
      layoutId={`${post.id}`}
      layout
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 200, opacity: 0 }}
      transition={{
        duration: 0.4,
        ease: 'easeIn'
      }}
    >
      <S.DeleteButton
        onClick={(e) => {
          e.preventDefault();
          axios.delete('api/posts', { data: { id: post.id } });
        }}
      >
        Delete
      </S.DeleteButton>

      <AnimatePresence>
        <EditableWrapper
          text={post.title}
          Child={S.Title}
          onChange={(newText) => {
            axios.put('api/posts', {
              id: post.id,
              data: { title: newText }
            });
          }}
        />
      </AnimatePresence>

      <AnimatePresence>
        <EditableWrapper
          text={post.text}
          Child={S.Text}
          onChange={(newText) => {
            axios.put('api/posts', {
              id: post.id,
              data: { text: newText }
            });
          }}
        />
      </AnimatePresence>

      <S.Row>
        <S.ReactionWrapper>
          <S.Reaction>
            <S.ReactionIcon
              color="lightgreen"
              onClick={(e) => {
                e.preventDefault();

                axios.put('api/posts', {
                  id: post.id,
                  data: {
                    likeCount: post.likeCount + 1
                  }
                });
              }}
            >
              &#9677;
            </S.ReactionIcon>
            <span> {post.likeCount}</span>
          </S.Reaction>
          <S.Reaction>
            <S.ReactionIcon
              color="crimson"
              onClick={(e) => {
                e.preventDefault();

                axios.put('api/posts', {
                  id: post.id,
                  data: {
                    dislikeCount: post.dislikeCount + 1
                  }
                });
              }}
            >
              &#9677;
            </S.ReactionIcon>
            <span> {post.dislikeCount}</span>
          </S.Reaction>
        </S.ReactionWrapper>
        <span>Created {post.createdAt}</span>
      </S.Row>
    </S.Container>
  );
};

export default Post;
