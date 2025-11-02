import { DGenerator, DNumber } from "@duplojs/utils";

const input = [0, 1, 2, 3, 4];
const result = await DGenerator.asyncReduce(
	input,
	DGenerator.reduceFrom(0),
	({ element, lastValue, next }) => next(DNumber.add(lastValue, element)),
);
// result: 10
