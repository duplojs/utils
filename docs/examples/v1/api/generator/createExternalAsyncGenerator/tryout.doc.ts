import { G } from "@duplojs/utils";

const channel = G.createExternalAsyncGenerator<number>();

const pending = channel.asyncGenerator.next();
channel.next(42);

const result = await pending;
// result: { done: false, value: 42 }
