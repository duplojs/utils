import { C, type ExpectType, type DP, type E } from "@duplojs/utils";

const {
	BigInt,
	Boolean,
	Date,
	Number,
	String,
} = C;

const value = Number.create(10);

type check = ExpectType<
	typeof value,
	E.EitherLeft<"createNewTypeError", DP.DataParserError>
	| E.EitherRight<"createNewType", C.Primitive<10>>,
	"strict"
>;
