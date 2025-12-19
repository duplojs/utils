import { S, type ExpectType } from "@duplojs/utils";

const input = "zeriix";
const result = S.capitalize(input);

type check = ExpectType<
	typeof result,
	"Zeriix",
	"strict"
>;
