import React from 'react';
import css from './App.module.css';

import Splash from '../Splash';

const App = () => {
  return (
    <div className={css.main}>
      <Splash />
    </div>
  );
}

export default App;
