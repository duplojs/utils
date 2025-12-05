import { type ExpectType, O, S } from "@duplojs/utils";

const result = O.transformProperty(
	{
		name: "mathieu",
		age: 23,
	} as const,
	"name",
	S.toUpperCase,
);

type check = ExpectType<
	typeof result,
	{
		name: "MATHIEU";
		readonly age: 23;
	},
	"strict"
>;
