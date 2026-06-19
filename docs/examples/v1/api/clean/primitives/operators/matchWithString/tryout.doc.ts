import { DClean, pipe, type ExpectType } from "@duplojs/utils";

const status = DClean.String.createOrThrow(
	"success" as "success" | "failure",
);

const result = pipe(
	status,
	DClean.matchWithString({
		success: (value) => {
			type check = ExpectType<
				typeof value,
				DClean.Primitive<"success" | "failure">
					& DClean.Primitive<"success">,
				"strict"
			>;

			return 200 as const;
		},
		failure: () => 500 as const,
	}),
);

type check = ExpectType<typeof result, 200 | 500, "strict">;
