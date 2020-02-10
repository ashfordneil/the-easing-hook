import React from 'react';
import logo from './logo.svg';
import css from './App.module.css';

import Link from '../Link';

const App = () => {
  return (
    <div className={css.main}>
      <header className={css.header}>
        <img src={logo} className={css.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link href="https://reactjs.org">
          Learn React
        </Link>
      </header>
    </div>
  );
}

export default App;
