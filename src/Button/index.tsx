import React from 'react';
import css from './Button.module.css';

export interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<Props> = props => (
  <button onClick={props.onClick} className={css.main}>
    {props.children}
  </button>
)

export default Button;
