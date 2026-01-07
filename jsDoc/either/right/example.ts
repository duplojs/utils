import { E, P, pipe, S } from "@scripts";

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

// type: E.EitherRight< "coupon.applied", { readonly code: `SAVE${string}`; readonly percent: 15; } >
// | E.EitherLeft< "coupon.invalid", string >
