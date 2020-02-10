import React from 'react';
import css from './Link.module.css';

export interface Props {
  children: React.ReactNode;
  href: string;
}

const Link: React.FC<Props> = props => {
  const link = new URL(props.href, window.location.href);
  const extraProps = link.origin !== window.location.origin
    ? {
      target: "_blank",
      rel: "noopener noreferrer"
    } : {
    };

  return (
    <a
      className={css.main}
      href={props.href}
      {...extraProps}
    >
      {props.children}
    </a>
  )
}

export default Link;
