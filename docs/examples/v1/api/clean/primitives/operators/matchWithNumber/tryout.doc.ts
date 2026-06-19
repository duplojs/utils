import { DClean, pipe, type ExpectType } from "@duplojs/utils";

const status = DClean.Number.createOrThrow(200 as 200 | 404);

const result = pipe(
	status,
	DClean.matchWithNumber({
		200: (value) => {
			type check = ExpectType<
				typeof value,
				DClean.Primitive<200 | 404> & DClean.Primitive<200>,
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
