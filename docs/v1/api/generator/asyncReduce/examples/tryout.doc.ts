import { G, N } from "@duplojs/utils";

const input = [0, 1, 2, 3, 4];
const result = await G.asyncReduce(
	input,
	G.reduceFrom(0),
	({ element, lastValue, next }) => next(N.add(lastValue, element)),
);
// result: 10
