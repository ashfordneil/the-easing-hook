import React from 'react';
import css from './App.module.css';

import Content from '../Content';
import Splash from '../Splash';

const App = () => {
  return (
    <div className={css.main}>
      <Splash />
      <Content />
    </div>
  );
}

export default App;
