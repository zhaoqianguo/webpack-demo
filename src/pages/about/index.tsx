import React from 'react';
import { Outlet } from 'react-router-dom';
import { reduxStore } from '@/store';
import { Button } from 'antd';

const { dispatch } = reduxStore;

export const About = () => {
  const state = reduxStore.getState();

  reduxStore.subscribe(() => {
    console.log(reduxStore.getState());
  });

  console.log(state);
  return (
    <div>
      about
      <Button onClick={() => dispatch({ type: 'counter/incremented' })}>+++</Button>
      <Button onClick={() => dispatch({ type: 'counter/decremented' })}>---</Button>
      <Outlet />
    </div>
  );
};
