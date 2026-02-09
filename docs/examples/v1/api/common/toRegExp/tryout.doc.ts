import { toRegExp } from "@duplojs/utils";

const fromString = toRegExp("a.c");
const matchesLiteral = fromString.test("a.c");

const fromList = toRegExp([
	"jpg",
	"png",
]);
const matchesPng = fromList.test("png");

const existing = /hello/i;
const sameInstance = toRegExp(existing);
