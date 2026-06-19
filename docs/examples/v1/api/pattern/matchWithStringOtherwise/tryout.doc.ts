import { DPattern, type ExpectType, pipe } from "@duplojs/utils";

const status = "failure" as "success" | "failure" | "pending";

const result = pipe(
	status,
	DPattern.matchWithStringOtherwise(
		{
			success: (value) => {
				type check = ExpectType<typeof value, "success", "strict">;
				return 200 as const;
			},
		},
		(value) => {
			type check = ExpectType<typeof value, "failure" | "pending", "strict">;
			return `unhandled: ${value}`;
		},
	),
);

console.log(result); // "unhandled: failure"
