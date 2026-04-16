import { memoObject } from "@duplojs/utils";

let calls = 0;
const state = memoObject(() => {
	calls += 1;
	return { count: 1 };
});

const first = state.count;
const second = state.count;
// calls = 1

state.count = 2;
const updated = state.count;
// updated = 2
