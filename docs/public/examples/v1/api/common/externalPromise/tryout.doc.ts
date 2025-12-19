import { createExternalPromise } from "@duplojs/utils";

const { promise, resolve } = createExternalPromise<number>();
resolve(42);

const result = await promise;
// result: 42
