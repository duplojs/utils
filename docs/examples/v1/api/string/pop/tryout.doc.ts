import { S, type ExpectType } from "@duplojs/utils";

const input = "Duplo" as const;
const result = S.pop(input);

type check = ExpectType<
	typeof result,
	"Dupl",
	"strict"
>;
