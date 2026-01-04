import { G } from "@scripts";

const result = G.reduce(
	[1, 2],
	G.reduceFrom(0),
	({ element, lastValue, next }) => next(lastValue + element),
);
