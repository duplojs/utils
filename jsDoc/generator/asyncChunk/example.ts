import { A, G, pipe } from "@scripts";

const input = [1, 2, 3, 4];

const iterator = G.asyncMap(
	input,
	async(value) => Promise.resolve(value * 2),
);

const result = await pipe(
	G.asyncChunk(
		iterator,
		2,
	),
	A.from,
);
// number[][]
