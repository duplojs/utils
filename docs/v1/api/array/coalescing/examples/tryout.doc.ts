import { A, type ExpectType } from "@duplojs/utils";

const result = A.coalescing("test");

type check1 = ExpectType<
	typeof result,
	readonly ["test"],
	"strict"
>;

const result2 = A.coalescing(result);

type check2 = ExpectType<
	typeof result2,
	readonly ["test"],
	"strict"
>;
