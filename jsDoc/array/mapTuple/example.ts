import { A, pipe } from "@scripts";

A.mapTuple(
	<const>[1, 2, 3],
	(value) => value * 2,
); // [2, 4, 6]

pipe(
	<const>["alpha", "beta"],
	A.mapTuple((value, { index }) => `${index}:${value}`),
); // ["0:alpha", "1:beta"]

A.mapTuple(
	[10, 20, 30],
	(value, { self }) => value / self.length,
); // [3.333..., 6.666..., 10]
