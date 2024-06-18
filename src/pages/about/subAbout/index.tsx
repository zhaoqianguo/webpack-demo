import React from 'react';
import { StoreProvider } from '@/layout/provider';
import { reduxStore } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '@/store/reducers/todoListReducer';

export const SubAboutComp = () => {
  const dispatch = useDispatch();

  return (
    <>
      SubAboutComp
      <div onClick={() => dispatch(addTodo('121'))}>121</div>
    </>
  );
};

export const SubAbout = () => {
  return (
    <StoreProvider store={reduxStore}>
      <SubAboutComp />
    </StoreProvider>
  );
};
