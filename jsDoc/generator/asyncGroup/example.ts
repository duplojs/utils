import { G } from "@scripts";

const asyncValues = (async function *() {
	yield Promise.resolve(1);
	yield 2;
	yield 3;
	yield 4;
})();

await G.asyncGroup(
	asyncValues,
	(value, { output }) => output(value % 2 ? "odd" : "even", value),
);
// { odd: [1, 3], even: [2, 4] }
