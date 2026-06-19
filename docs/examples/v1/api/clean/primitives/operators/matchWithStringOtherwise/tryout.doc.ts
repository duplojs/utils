import { DClean, type ExpectType, pipe, unwrap } from "@duplojs/utils";

const status = DClean.String.createOrThrow(
	"failure" as "success" | "failure" | "pending",
);

const result = pipe(
	status,
	DClean.matchWithStringOtherwise(
		{
			success: () => 200 as const,
		},
		(value) => {
			type check = ExpectType<
				typeof value,
				DClean.Primitive<"success" | "failure" | "pending">
					& DClean.Primitive<"failure" | "pending">,
				"strict"
			>;
			return value;
		},
	),
);

console.log(unwrap(result)); // "failure"
