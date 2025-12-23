import { type ExpectType, forward, P, pipe } from "@duplojs/utils";

type Input =
	| {
		type: "redirect";
		location: string;
	}
	| {
		type: "ok";
		body: string;
	}
	| {
		type: "error";
		message: string;
	};

pipe(
	null as unknown as Input,
	P.match(
		{ type: "ok" },
		forward,
	),
	P.otherwise((value) => {
		type check = ExpectType<
			typeof value,
			{
				type: "redirect";
				location: string;
			} | {
				type: "error";
				message: string;
			},
			"strict"
		>;
		return value;
	}),
);

