import React, { useState } from 'react';
import css from './Spinner.module.css';

import useEasing from '../../the-hook';

import Button from '../../Button';

const Spinner = () => {
  const [goal, setGoal] = useState(0);
  const slide = useEasing(goal, { damping: 0.6, duration: 0.5 });

  return (
    <div className={css.main}>
      <div
        className={css.button}
        style={{ transform: `rotate(${slide}deg)` }}
      >
        <Button
          onClick={() => setGoal(goal ? 0 : 180)}
        >
          Click to animate
        </Button>
      </div>
    </div>
  );
}

export default Spinner;
