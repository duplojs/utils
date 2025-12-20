import { A, type ExpectType } from "@duplojs/utils";

const input = [1, 2, 3];

const result = A.reduce(
	input,
	A.reduceFrom<(`[last:${number}]` | `(middle:${number})`)[]>([]),
	({ element, index, self, lastValue, nextPush }) => A.isLastIndex(self, index)
		? nextPush(lastValue, `[last:${element}]`)
		: nextPush(lastValue, `(middle:${element})`),
);

type check = ExpectType<
	typeof result,
	(`[last:${number}]` | `(middle:${number})`)[],
	"strict"
>;
