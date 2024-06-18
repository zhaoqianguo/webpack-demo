import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '@/store/reducers/counterReducer';
import { Button } from 'antd';
import type { RootState } from '@/store';
import { Link } from 'react-router-dom';

type HomePoprs = { path: string };

export const Home = (props: HomePoprs) => {
  const { path } = props;
  const store = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  console.log(store);

  const id = 12;

  return (
    <div>
      Home
      {store}
      <Link to={`/editPost/${id}`} className="button">
        Edit Post
      </Link>
      <Button onClick={() => dispatch(increment())}>+++</Button>
      <Button onClick={() => dispatch(decrement())}>---</Button>
    </div>
  );
};
