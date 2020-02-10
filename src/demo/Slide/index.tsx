import React, { useState } from 'react';
import css from './Slide.module.css';

import useEasing from '../../the-hook';

const Slide = () => {
  const [goal, setGoal] = useState(0);
  const slide = useEasing(goal, { damping: 0.6, duration: 0.5 });

  return (
    <div className={css.main}>
      <button
        className={css.button}
        style={{ transform: `rotate(${slide}deg)` }}
        onClick={() => setGoal(goal ? 0 : 180)}
      >
        Click to animate
      </button>
    </div>
  );
}

export default Slide;
