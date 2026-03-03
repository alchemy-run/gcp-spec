import { Effect } from "effect";
import { BunRuntime } from "@effect/platform-bun";

const program = Effect.gen(function* () {
  yield* Effect.log("Hello from Effect!");
  yield* Effect.log("Playground is running");
});

BunRuntime.runMain(program);
