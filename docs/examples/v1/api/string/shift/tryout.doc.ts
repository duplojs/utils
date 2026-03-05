import { S, type ExpectType } from "@duplojs/utils";

const input = "Duplo" as const;
const result = S.shift(input);

type check = ExpectType<
	typeof result,
	"uplo",
	"strict"
>;
