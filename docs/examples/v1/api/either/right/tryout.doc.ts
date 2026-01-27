import { E, P, type ExpectType, pipe, S } from "@duplojs/utils";

const input = "SAVE-15" as string;

const result = pipe(
	input,
	P.when(
		S.startsWith("SAVE"),
		(code) => E.right(
			"coupon.applied",
			{
				code,
				percent: 15,
			},
		),
	),
	P.otherwise(
		(value) => E.left("coupon.invalid", value),
	),
);

type check = ExpectType<
	typeof result,
	E.Right<
		"coupon.applied",
		{
			readonly code: `SAVE${string}`;
			readonly percent: 15;
		}
	>
	| E.Left<
		"coupon.invalid",
		string
	>,
	"strict"
>;
