import { N, type ExpectType } from "@duplojs/utils";

const tuple = [10, 3, 25] as const;

const result = N.min(tuple);

type check = ExpectType<
	typeof result,
	number,
	"strict"
>;
