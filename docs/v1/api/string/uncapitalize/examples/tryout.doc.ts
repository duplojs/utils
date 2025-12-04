import { S, type ExpectType } from "@duplojs/utils";

const input = "Zeriix";
const result = S.uncapitalize(input);

type check = ExpectType<
	typeof result,
	"zeriix",
	"strict"
>;
