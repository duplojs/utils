import { C, DP, type ExpectType } from "@duplojs/utils";

const Age = C.createNewType("age", DP.number());

const age = Age.createOrThrow(24);
const theNumber = C.Number.createOrThrow(4);

const result = C.add(age, theNumber);

type check = ExpectType<
	typeof result,
	C.Number,
	"strict"
>;
