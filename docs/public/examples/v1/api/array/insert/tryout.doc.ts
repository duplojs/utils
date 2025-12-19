import { A, pipe, type ExpectType } from "@duplojs/utils";

const array = ["value1", "value2"];

const result = pipe(
	"value3",
	A.insert(array),
);

type check = ExpectType<
	typeof result,
	string[],
	"strict"
>;
