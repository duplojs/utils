import { DPattern, pipe, type ExpectType } from "@duplojs/utils";

const status = "success" as "success" | "failure";

const result = pipe(
	status,
	DPattern.matchWithString({
		success: (value) => {
			type check = ExpectType<
				typeof value,
				"success",
				"strict"
			>;

			return 200 as const;
		},
		failure: () => 500 as const,
	}),
);

type check = ExpectType<
	typeof result,
	200 | 500,
	"strict"
>;
