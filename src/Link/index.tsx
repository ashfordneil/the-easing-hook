import React from 'react';
import css from './Link.module.css';

export interface Props {
  children: React.ReactNode;
  href: string;
}

const Link: React.FC<Props> = props => (
  <a
    className={css.main}
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.children}
  </a>
)

export default Link;
