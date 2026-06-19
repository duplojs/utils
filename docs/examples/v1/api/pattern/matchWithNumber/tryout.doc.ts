import { DPattern, pipe, type ExpectType } from "@duplojs/utils";

const status = 200 as 200 | 404;

const result = pipe(
	status,
	DPattern.matchWithNumber({
		200: (value) => {
			type check = ExpectType<
				typeof value,
				200,
				"strict"
			>;

			return "success" as const;
		},
		404: () => "missing" as const,
	}),
);

type check = ExpectType<
	typeof result,
	"success" | "missing",
	"strict"
>;
