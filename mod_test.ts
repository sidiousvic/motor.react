import {} from "https://deno.land/std/testing/asserts.ts";
import { MotorSpec } from "https://deno.land/x/motor@v1.0.5/mod.ts";

type Gears = "stopped" | "paused" | "playing" | "loading";

type Events = "SELECT" | "LOAD" | "PLAY" | "PAUSE" | "STOP";

const _musicPlayerMotor: MotorSpec<Gears, Events> = {
  gear: "stopped",
  transmission: {
    stopped: {
      on: { LOAD: "loading" },
    },
    paused: {
      on: { PLAY: "playing", STOP: "stopped" },
    },
    loading: {
      on: { PLAY: "playing", STOP: "stopped" },
    },
    playing: {
      on: { PAUSE: "paused", STOP: "stopped" },
    },
  },
};

Deno.test("UNDER CONSTRUCTION", () => {});
