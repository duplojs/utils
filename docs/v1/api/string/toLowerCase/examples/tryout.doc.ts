import { S, type ExpectType } from "@duplojs/utils";

const input = "ZERIIX";
const result = S.toLowerCase(input);

type check = ExpectType<
	typeof result,
	"zeriix",
	"strict"
>;
