import React from 'react';
import css from './index.module.less';

const App = () => {
  return (
    <div className="app">
      app
      <div className={css.module}>1212</div>
      <h1>Hello, Webpack with LESS and PostCSS!</h1>
    </div>
  );
};

export default App;
