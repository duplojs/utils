import { DClean, type ExpectType, pipe, unwrap } from "@duplojs/utils";

const status = DClean.Number.createOrThrow(
	404 as 200 | 404 | 500,
);

const result = pipe(
	status,
	DClean.matchWithNumberOtherwise(
		{
			200: () => "success" as const,
		},
		(value) => {
			type check = ExpectType<
				typeof value,
				DClean.Primitive<200 | 404 | 500>
					& DClean.Primitive<404 | 500>,
				"strict"
			>;
			return value;
		},
	),
);

console.log(unwrap(result)); // 404
