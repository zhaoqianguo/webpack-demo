import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import css from './style.less';

export const LayoutContent = () => {
  const { pathname } = useLocation();

  if (pathname === '/') {
    return (
      <div className={css.welcome}>
        <h1>欢迎👏：使用 webpack + react +react-router-dom v6 + zustand + less + typescript + antd </h1>
      </div>
    );
  }

  return (
    <div className={css.wrapper}>
      <Outlet />
    </div>
  );
};
