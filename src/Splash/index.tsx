import React from 'react';
import css from './Splash.module.css';

import Link from '../Link';

const Splash = () => (
  <header className={css.main}>
    <h1>
      The Easing Hook
      <span className={css.subheading}>
        A purely declarative animation engine for react.
      </span>
    </h1>
    <p>
      <Link href="#content">Scroll</Link> to see more.
    </p>
  </header>
);

export default Splash;
