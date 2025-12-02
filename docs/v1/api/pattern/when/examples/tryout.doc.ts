import { type ExpectType, O, P, pipe } from "@duplojs/utils";

type Input =
	| {
		kind: "failed";
		reason: string;
	}
	| {
		kind: "async";
		retries: number;
	}
	| {
		kind: "sync";
		attempts: number;
	};

pipe(
	null as unknown as Input,
	P.when(
		O.discriminate("kind", "async"),
		(value) => {
			type check = ExpectType<
				typeof value,
				{
					kind: "async";
					retries: number;
				},
				"strict"
			>;
			return value;
		},
	),
);
