import React, { useEffect, useState } from "react";
import css from "./Projectile.module.css";

import useEasing from "../../the-hook";

import Button from '../../Button';

const Projectile = () => {
  const value = useEasing(180, {
    duration: 2, damping: 1, initial: 20,
  });

  // parabolic arc
  const x = value;
  const y = 0.0153 * value * value - 2.6806 * value + 167.5;

  // take the derivative of the parabola
  const angle = Math.atan2(-1, 2 * 0.0153 * value - 2.6806) * 180 / Math.PI;

  return (
    <svg className={css.image} viewBox="0 0 200 200">
      <line className={css.line} x1="0" x2={x} y1={y} y2={y} />
      <line className={css.line} y1="200" y2={y} x1={x} x2={x} />

      <g transform={`translate(${x} ${y}) rotate(${angle})`}>
        <rect className={css.missile} x="-3" width="6" y="-10" height="10" />
        <polygon className={css.missile} points="-7 0 7 0 0 10" />
      </g>
    </svg>
  );
}

const ProjectileWrapper = () => {
  const [show, setShow] = useState(true);

  // reset the animation by unmounting and remounting the child component
  useEffect(() => {
    if (!show) {
      setShow(true);
    }
  }, [show]);

  return (
    <div className={css.main}>
      {show ? <Projectile /> : <div className={css.image} />}
      <div className={css.button}>
        <Button onClick={() => setShow(false)}>
          Reset
        </Button>
      </div>
    </div>
  );
}

export default ProjectileWrapper;
