import { type ExpectType, O, P, pipe } from "@duplojs/utils";

type Input =
	| {
		kind: "error";
		message: string;
	}
	| {
		kind: "success";
		payload: string;
	};

pipe(
	null as unknown as Input,
	P.whenNot(
		O.discriminate("kind", "error"),
		(value) => {
			type check = ExpectType<
				typeof value,
				{
					kind: "success";
					payload: string;
				},
				"strict"
			>;
			return value;
		},
	),
);
