import { type ExpectType, O } from "@duplojs/utils";

const result = O.getProperty(
	{
		name: "Alice",
		age: 30,
	} as const,
	"name",
);

type check = ExpectType<
	typeof result,
	"Alice",
	"strict"
>;
