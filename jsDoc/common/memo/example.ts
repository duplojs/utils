import { memo } from "@scripts";

let calls = 0;
const expensive = memo(() => {
	calls += 1;
	return "cached";
});

const first = expensive.value;
// "cached", calls = 1
const second = expensive.value;
// "cached", calls = 1 (no recompute)
