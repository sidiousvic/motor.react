import { useState, useEffect } from "preact/hooks";
import { motor, MotorSpec } from "../deps/deno.land/x/motor@v1.0.6/mod.js";

export function useMotor<E extends string, G extends string>(
  machine: MotorSpec<G, E>
): {
  hook: (cylinder: (e: E) => void) => void;
  gear: () => G;
  fire: (event: E) => void;
} {
  const [{ fire, gear, hook }, setShifter] = useState(motor<E, G>(machine));
  const [fired, setFired] = useState<E[]>([""] as E[]);
  hook((e: E) => {
    setFired([...fired, e]);
  });
  useEffect(() => {
    const shift = motor<E, G>(machine);
    setShifter(shift);
    fired.forEach((e: E) => shift.fire(e));
  }, [fired]);
  return {
    fire,
    gear,
    hook,
  };
}
