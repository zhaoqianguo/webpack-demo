import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '@/store/reducers/counterReducer';
import { Button } from 'antd';
import type { RootState } from '@/store';

type HomePoprs = { path: string };

export const Home = (props: HomePoprs) => {
  const { path } = props;
  const store = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  console.log(store);

  return (
    <div>
      Home
      {store}
      <Button onClick={() => dispatch(increment())}>+++</Button>
      <Button onClick={() => dispatch(decrement())}>---</Button>
    </div>
  );
};
