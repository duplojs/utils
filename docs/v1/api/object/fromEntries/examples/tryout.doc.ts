import { type ExpectType, O } from "@duplojs/utils";

const input = [["name", "Alice"], ["age", 30]] as const;
const result = O.fromEntries(input);

type check = ExpectType<
	typeof result,
	{
		name?: "Alice" | undefined;
		age?: 30 | undefined;
	},
	"strict"
>;
