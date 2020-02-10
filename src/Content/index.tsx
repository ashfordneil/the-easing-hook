import React from 'react';
import css from './Content.module.css';

import Slide from '../demo/Slide';

const Content = () => (
  <main id="content" className={css.main}>
    <h2>Welcome to The Easing Hook</h2>
    <p>
      With this library, I propose a new way to perform animations in react
      &mdash; performing them purely in react. This is very experimental, and
      probably not going to perform incredibly well. However, we're giving it a
      try.
    </p>
    <Slide />
  </main>
);

export default Content;
