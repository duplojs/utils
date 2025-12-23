import { A, type ExpectType, N, pipe } from "@duplojs/utils";

const input = [
	{
		id: "INV-01",
		amount: 320,
	},
	{
		id: "INV-02",
		amount: 450,
	},
	{
		id: "INV-03",
		amount: 350,
	},
] as const;

const result = A.reduce(
	input,
	0,
	({ element, lastValue, next }) => next(N.add(lastValue, element.amount)),
);

type check = ExpectType<
	typeof result,
	number,
	"strict"
>;

const result2 = pipe(
	input,
	A.reduce(
		A.reduceFrom({
			total: 0,
			count: 0,
		}),
		({ element, lastValue, next }) => next({
			total: N.add(lastValue.total, element.amount),
			count: N.add(lastValue.count, 1),
		}),
	),
);

type check2 = ExpectType<
	typeof result2,
	{
		total: number;
		count: number;
	},
	"strict"
>;
