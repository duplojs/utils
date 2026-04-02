import { forwardAsserts, isType, pipe, type ExpectType } from "@duplojs/utils";

const directValue = "demo" as string | number;
const directResult = forwardAsserts(directValue, isType("string"));

type checkDirect = ExpectType<
	typeof directResult,
	string,
	"strict"
>;

const pipedResult = pipe(
	42 as string | number,
	forwardAsserts(isType("number")),
);

type checkPiped = ExpectType<
	typeof pipedResult,
	number,
	"strict"
>;
