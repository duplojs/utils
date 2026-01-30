import { memoPromise } from "@duplojs/utils";

let calls = 0;
const memoized = memoPromise(() => {
	calls += 1;
	return Promise.resolve("cached");
});

const first = await memoized.value;
// "cached", calls = 1
const second = await memoized.value;
// "cached", calls = 1 (no recompute)
