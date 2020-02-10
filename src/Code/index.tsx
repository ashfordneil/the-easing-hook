import React from 'react';
import css from './Code.module.css';

export interface Props {
  children: string;
}

const Code: React.FC<Props> = props => (
  <pre className={css.main}>
    <code>
      {props.children}
    </code>
  </pre>
);

export default Code;
