import { useEffect, useState, useRef } from "react";

export interface Config {
  duration: number;
  damping: number;
  initial?: number;
}

const useEasing = (goal: number, settings: Config) => {

  // Set up rendering state
  const state = useRef({
    position: orDefault(settings.initial, goal), velocity: 0, lastFrame: 0
  });

  // We use a setState so that we can trigger re-renders whenever the value
  // changes, but we also store the value in a ref so that we don't need to
  // change effect functions every frame
  const [position, setPosition] = useState(state.current.position);

  // Take everything we possibly would need to do with the settings object, and
  // wrap it up in a ref. This way, if the settings object changes between
  // renders business can continue as usual, but the next frame will use the
  // updated settings automatically.
  const accelerationHelper = useRef(getAcceleration(settings));
  useEffect(() => {
    accelerationHelper.current = getAcceleration(settings);
  }, [settings]);

  // This is where the magic happens.
  const callbackId = useRef(0);
  useEffect(() => {
    const frame = (step: number) => {
      const { position, velocity, lastFrame } = state.current;
      const acceleration =
        accelerationHelper.current(position - goal, velocity);

      if (isStopped(position - goal, velocity, acceleration)) {
        console.log("stopping animation");
        callbackId.current = 0;
        state.current = {
          position: goal,
          velocity: 0,
          lastFrame: 0,
        };
      } else {
        callbackId.current = requestAnimationFrame(frame);
        if (lastFrame) {
          const delta = (step - lastFrame) / 1000;

          state.current = {
            position: position + delta * (velocity + 0.5 * delta * acceleration),
            velocity: velocity + delta * acceleration,
            lastFrame: step,
          };
        } else {
          state.current = { position, velocity, lastFrame: step };
        }
      }

      setPosition(state.current.position);
    }

    callbackId.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(callbackId.current);
  }, [goal]);

  return position;
}

// Very small utility function. Unwrap an optional value, providing a default
// value in case the optional is not available.
const orDefault = <T>(optional: T | undefined, backup: T) =>
  optional === undefined ? backup : optional;

// Calculate the acceleration that will act on the body given its relative
// position, velocity, and the settings object.
const getAcceleration =
    (settings: Config) => (difference: number, velocity: number) => {
  // translate the settings
  const angularFreq = 2 * Math.PI / settings.duration;

  const damping = -2 * angularFreq * settings.damping * velocity;
  const springForce = -1 * angularFreq * angularFreq * difference;

  return damping + springForce;
}

const isStopped = (
  _difference: number,
  velocity: number,
  acceleration: number,
) => {
  // We consider a body stopped when its velocity is close to 0 and its
  // acceleration is close to 0. The question is, how close to 0 is close
  // enough? I don't actually know at the moment.

  // TODO - find an appropriate value for this
  const threshold = 0.001;

  return Math.abs(velocity) < threshold && Math.abs(acceleration) < threshold;
}

export default useEasing;
