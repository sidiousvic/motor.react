import { MotorSpec } from "https://deno.land/x/motor/mod";
export declare function useMotor<E extends string, G extends string>(machine: MotorSpec<G, E>): {
    hook: (cylinder: (e: E) => void) => void;
    gear: () => G;
    fire: (event: E) => void;
};
