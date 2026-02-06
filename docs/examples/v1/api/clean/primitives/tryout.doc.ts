import { C, type ExpectType, type DP, type E } from "@duplojs/utils";

const {
	BigInt,
	Boolean,
	Date,
	Time,
	Number,
	String,
} = C;

const value = Number.create(10);

type check = ExpectType<
	typeof value,
	E.Left<"createPrimitiveError", DP.DataParserError>
	| E.Right<"createPrimitive", C.Primitive<10>>,
	"strict"
>;
