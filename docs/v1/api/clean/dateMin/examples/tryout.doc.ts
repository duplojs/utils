import { C, D, type ExpectType } from "@duplojs/utils";

const dates = [
	C.Date.createOrThrow(D.create("2024-01-10")),
	C.Date.createOrThrow(D.create("2024-01-01")),
	C.Date.createOrThrow(D.create("2024-01-05")),
] as const;

const result = C.dateMin(...dates);
// 2024-01-01

type check = ExpectType<
	typeof result,
	C.Primitive<D.TheDate>,
	"strict"
>;
