import React from 'react';
import { LayoutMenu } from './menu';
import { LayoutContent } from './content';
import css from './style.less';

export const Layout = () => {
  return (
    <div className={css.layout}>
      <LayoutMenu />
      <LayoutContent />
    </div>
  );
};
