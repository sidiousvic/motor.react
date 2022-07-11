// ex. scripts/build_npm.ts
import { build, emptyDir } from "https://deno.land/x/dnt/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: { deno: true },
  package: {
    name: "@sidiousware/motor_react",
    version: Deno.args[0],
    description: "Utilities for using Motor with React.",
    license: "MIT",
    scripts: { "semantic-release": "semantic-release --branches prod" },
    release: { branches: ["prod"] },
    repository: {
      type: "git",
      url: "git+https://github.com/sidiousvic/motor_react.git",
    },
    bugs: {
      url: "https://github.com/sidiousvic/motor_react/issues",
    },
  },
});

Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
