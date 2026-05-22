import { G, pipe } from "@scripts";

G.asyncConcat([1, 2], [3], [4]);
// AsyncGenerator<1 | 2 | 3 | 4, unknown, unknown>

const asyncNumberTail = (async function *() {
	yield Promise.resolve(3);
	yield 4;
})();
pipe(
	[1, 2],
	G.asyncConcat(asyncNumberTail),
); // AsyncGenerator<number, unknown, unknown>
