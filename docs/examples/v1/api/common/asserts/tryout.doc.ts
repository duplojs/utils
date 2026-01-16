import { asserts, type ExpectType, isType } from "@duplojs/utils";

const value = "demo" as string | number;
asserts(value, isType("string"));

type checkString = ExpectType<
	typeof value,
	string,
	"strict"
>;

const maybeId = 42 as number | undefined;
asserts(maybeId, isType("number"));

type checkNumber = ExpectType<
	typeof maybeId,
	number,
	"strict"
>;

