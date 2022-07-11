import * as dntShim from "./_dnt.test_shims.js";
import {} from "./deps/deno.land/std@0.147.0/testing/asserts.js";
import { MotorSpec } from "./deps/deno.land/x/motor@v1.0.6/mod.js";

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

dntShim.Deno.test("UNDER CONSTRUCTION", () => {});
