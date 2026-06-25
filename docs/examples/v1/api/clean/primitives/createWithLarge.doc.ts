import { C, type E, type ExpectType } from "@duplojs/utils";

const rawName: string = "Ada";

const result = C.String.createWithLarge(rawName);

type CheckResult = ExpectType<
	typeof result,
	| E.Left<"createPrimitiveError", C.PrimitiveError<"string">>
	| E.Right<"createPrimitive", C.Primitive<string>>,
	"strict"
>;

const name = C.String.createWithLargeOrThrow(rawName);

type CheckName = ExpectType<
	typeof name,
	C.Primitive<string>,
	"strict"
>;
