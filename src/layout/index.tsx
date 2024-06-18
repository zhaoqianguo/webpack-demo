import React from 'react';
import { CSSTransition, TransitionGroup, SwitchTransition } from 'react-transition-group';
import { useLocation, useOutlet, useNavigationType } from 'react-router-dom';
import { LayoutMenu } from './menu';
import { LayoutContent } from './content';
import css from './style.less';

export const Layout = () => {
  const location = useLocation();

  return (
    <div className={css.layout}>
      <LayoutMenu />
      <TransitionGroup className={'transition-wrapper'}>
        <CSSTransition key={location.pathname} timeout={300} classNames="forward" unmountOnExit>
          {(state) => (
            <div id="transition">
              <LayoutContent />
            </div>
          )}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
