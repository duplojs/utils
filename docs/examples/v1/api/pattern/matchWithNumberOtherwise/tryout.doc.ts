import { DPattern, type ExpectType, pipe } from "@duplojs/utils";

const status = 404 as 200 | 404 | 500;

const result = pipe(
	status,
	DPattern.matchWithNumberOtherwise(
		{
			200: (value) => {
				type check = ExpectType<typeof value, 200, "strict">;
				return "success" as const;
			},
		},
		(value) => {
			type check = ExpectType<typeof value, 404 | 500, "strict">;
			return `error: ${value}`;
		},
	),
);

console.log(result); // "error: 404"
