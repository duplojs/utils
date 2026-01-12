import { G, N, pipe } from "@scripts";

const values = [4, 8, 12];

const result = pipe(
	values,
	G.reduce(
		G.reduceFrom({
			total: 0,
			count: 0,
		}),
		({ element, lastValue, next }) => next({
			total: N.add(lastValue.total, element),
			count: N.add(lastValue.count, 1),
		}),
	),
);
