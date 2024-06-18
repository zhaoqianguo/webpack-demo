import React from 'react';
import { useRootSelector, useRootDispatch } from '@/hooks';
import { PostCard } from './card';
import css from './style.less';

export const Posts = () => {
  const posts = useRootSelector((state) => state.posts);

  return (
    <div>
      <h1 className={css.title}>Posts</h1>

      
      {posts.map((post) => (
        <PostCard />
      ))}
    </div>
  );
};
