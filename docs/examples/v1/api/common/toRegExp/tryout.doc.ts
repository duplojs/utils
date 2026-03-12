import { toRegExp } from "@duplojs/utils";

const fromString = toRegExp("a.c");
const matchesLiteral = fromString.test("a.c");

const tupleValues = [
	"jpg",
	"png",
] as const;
const fromTuple = toRegExp(tupleValues);
const matchesPng = fromTuple.test("png");

const existing = /hello/i;
const sameInstance = toRegExp(existing);
