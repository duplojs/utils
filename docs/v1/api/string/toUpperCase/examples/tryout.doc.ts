import { S, type ExpectType } from "@duplojs/utils";

const input = "duplojs";
const result = S.toUpperCase(input);

type check = ExpectType<
	typeof result,
	"DUPLOJS",
	"strict"
>;
