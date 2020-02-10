import React from 'react';
import raw from "raw.macro";
import css from './Content.module.css';

import Code from '../Code';

import Spinner from '../demo/Spinner';

const Content = () => (
  <main id="content" className={css.main}>
    <h2>Welcome to The Easing Hook</h2>
    <p>
      With this library, I propose a new way to perform animations in react
      &mdash; performing them purely in react. This is very experimental, and
      probably not going to perform incredibly well. However, we're giving it a
      try.
    </p>
    <Spinner />
    <h3>How do I use it?</h3>
    <Code>
      {raw("../demo/Spinner/index.tsx")}
    </Code>
    <p>
      The Easing Hook is declarative by nature, so think of it the way you
      would think of CSS transitions. You specify the nature in which you want
      any given transition to take place (using duration, and damping), and
      then you specify what value you want to currently be on the screen. The
      hook gives you an intermediate value to put on the screen, that will
      smoothly transition between the old and new values.
    </p>
  </main>
);

export default Content;
